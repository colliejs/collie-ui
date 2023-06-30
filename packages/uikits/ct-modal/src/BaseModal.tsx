import { Fixed, Stack } from "@collie-ui/layout";
import { mask as _mask } from "@collie-ui/css";
import { styled } from "@colliejs/react";
import React, { useEffect } from "react";
import { AnimationStatus } from "./Modal";

export type BaseModalPropsWithoutRef = {
  visible: boolean;
  animationStatus: AnimationStatus;
  closeBtn?: JSX.Element;
  okBtn?: JSX.Element;
  mask?: JSX.Element;
  cancelBtn?: JSX.Element;
  body: JSX.Element;
} & React.ComponentPropsWithoutRef<"div">;
//===========================================================
// Mask
//===========================================================
export const StyledMask = styled(
  Fixed,
  {
    opacity: 0,
    pointerEvents: "none",
    zIndex: 100,
    "&[data-visible=true]": { opacity: 1, pointerEvents: "auto" },
    "&[data-visible=false]": { opacity: 0, pointerEvents: "none" },
    ..._mask,
  },
  { as: "u-mask" }
);

//===========================================================
// Modal
//===========================================================
export const BaseModal = React.forwardRef<
  HTMLDivElement,
  BaseModalPropsWithoutRef
>((props, ref) => {
  const {
    visible,
    animationStatus,
    closeBtn,
    body: _body,
    okBtn,
    cancelBtn,
    mask = <StyledMask />,
    children,
    ...restProps
  } = props;
  const body = <_body.type {..._body.props} as="u-body" />;
  const dataVisibleAttr =
    animationStatus === "done" ? { "data-visible": visible } : {};
  return (
    <>
      <mask.type {...dataVisibleAttr} {...restProps} ref={ref}>
        <Stack as="u-modal" body={body}>
          {closeBtn}
          {okBtn}
          {cancelBtn}
        </Stack>
      </mask.type>
      {children}
    </>
  );
});
BaseModal.displayName = "Modal";
