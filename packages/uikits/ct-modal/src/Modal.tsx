import { styled } from "@collie-ui/common";
import { mask as _mask } from "@collie-ui/css";
import { Fixed } from "@collie-ui/layout";
import React from "react";

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
  visible?: boolean;
} & React.ComponentPropsWithoutRef<"div">;
//===========================================================
// Mask
//===========================================================
export const StyledMask = styled(
  Fixed,
  {
    // opacity: 0,
    // transform: "scale(0)",
    contentVisibility: "auto",
    zIndex: 100,
    "&[data-state='visible']": { opacity: 1, pointerEvents: "auto" },
    // "&[data-state='showing']": { opacity: 1, pointerEvents: "auto" },
    // "&[data-state='hidding']": { opacity: 1, pointerEvents: "auto" },
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
    visible,
    children,
    ...restProps
  } = props;
  return (
    <MyMask
      data-state={visible ? "visible" : "hidden"}
      {...restProps}
      ref={ref}
    >
      <co-body>{children}</co-body>
    </MyMask>
  );
});
Modal.displayName = "Modal";
