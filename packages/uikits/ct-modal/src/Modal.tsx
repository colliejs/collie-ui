import { Fixed, Stack } from "@collie-ui/layout";
import { mask as _mask } from "@collie-ui/css";
import { styled } from "@collie-ui/common";
import React, { useEffect } from "react";
import { AnimationStatus } from "./useModal";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "co-mask": JSX.IntrinsicElements["div"];
      "co-modal": JSX.IntrinsicElements["div"];
      "co-body": JSX.IntrinsicElements["div"];
    }
  }
}

export type BaseModalPropsWithoutRef = {
  mask?: React.ForwardRefExoticComponent<any>;
  animationStatus: AnimationStatus;
} & React.ComponentPropsWithoutRef<"div">;
//===========================================================
// Mask
//===========================================================
export const StyledMask = styled(
  Fixed,
  {
    opacity: 0,
    pointerEvents: "none",
    contentVisibility: "auto",
    zIndex: 100,
    "&[data-state='visible']": { opacity: 1, pointerEvents: "auto" },
    "&[data-state='showing']": { opacity: 1, pointerEvents: "auto" },
    "&[data-state='hidding']": { opacity: 1, pointerEvents: "auto" },
    "&[data-state='hidden']": { opacity: 0, pointerEvents: "none" },
    ..._mask,
  },
  { as: "co-mask" }
);

//===========================================================
// Modal
//===========================================================
export const Modal = React.forwardRef<
  HTMLDivElement,
  BaseModalPropsWithoutRef
>((props, ref) => {
  const {
    mask: MyMask = StyledMask,
    animationStatus,
    children,
    ...restProps
  } = props;
  return (
    <MyMask
      data-state={animationStatus}
      {...restProps}
      ref={ref}
    >
      <co-body>{children}</co-body>
    </MyMask>
  );
});
Modal.displayName = "Modal";
