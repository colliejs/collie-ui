import { useGId, usePrev } from "@c3/react";
import { zoom } from "@collie-ui/animation";
import {
  useFloating,
  useClick,
  useDismiss,
  useHover,
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  Placement,
  shift,
  useInteractions,
  type OffsetOptions,
} from "@floating-ui/react";
import React, { useEffect, useState } from "react";
import { supportIndivideTransform } from "@collie-ui/css";
import { toArray } from "@c3/utils";

//===========================================================
// BaseFloating
//===========================================================
export type Trigger = "click" | "hover" | "focus";
export type FloatingProps = {
  floating: JSX.Element;
  open: boolean;
  trigger?: Trigger | Trigger[];
  placement?: Placement;
  onOpenChange?: (isOpen: boolean) => void;
  offset?: OffsetOptions;
  flip?: boolean;
  anime?: (
    visible: boolean,
    placement: Placement,
    targets: anime.AnimeParams["targets"]
  ) => void;
} & { children: JSX.Element; as?: any };

export const BaseFloating: React.FC<FloatingProps> = (props) => {
  const {
    trigger = "click",
    open = false,
    onOpenChange,
    floating: _floating,
    placement = "bottom",
    offset: _offset = 10,
    flip: _flip = true,
    children,
    anime = animate,
  } = props;
  if (!React.isValidElement(children)) {
    throw new Error("TypeError:children must be reactElement");
  }
  const overlayId = useGId();

  const { context, refs, floatingStyles } = useFloating({
    open,
    onOpenChange,
    middleware: [_flip && flip(), shift(), offset(_offset)],
    whileElementsMounted: (...args) => {
      setTimeout(() => {
        console.log("===>mounted");
        open && anime?.(open, placement, `#${overlayId}`);
      }, 0);
      return autoUpdate(...args);
    },
    placement,
  });
  const triggers = toArray(trigger);

  const click = useClick(context, { enabled: triggers.includes("click") });
  const hover = useHover(context, { enabled: triggers.includes("hover") });
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    click,
    hover,
  ]);

  const floating = React.cloneElement(_floating, {
    style: {
      ...floatingStyles,
    },
    id: overlayId,
    ref: refs.setFloating,
    ...getFloatingProps(),
  });

  const actionBtn = React.cloneElement(children, {
    //@ts-ignore
    ref: refs.setReference,
    ...getReferenceProps(),
  });

  return (
    <>
      {actionBtn}
      {open && <FloatingPortal>{floating}</FloatingPortal>}
    </>
  );
};

//=====================================================================================================
// animate
//=====================================================================================================

export const animate = (
  visible: boolean,
  placement: Placement,
  targets: anime.AnimeParams["targets"]
) => {
  console.log("===>animate");
  if (!supportIndivideTransform) {
    console.warn("NOT supportIndivideTransform");
    //TODO: fix this
    // return;
  }
  const key = `${placement}-${visible ? "in" : "out"}`;
  zoom[key]({ targets });
};
