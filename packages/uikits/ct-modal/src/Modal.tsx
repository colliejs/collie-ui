import { styled } from "@collie-ui/common";
import { mask as _mask } from "@collie-ui/css";
import { Fixed } from "@collie-ui/layout";
import React from "react";
import { useModal, useModalOption } from "./useModal";
import { modalCtx, useModalCtx } from "./ctx";

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

export type BaseModalPropsWithoutRef =
  React.ComponentPropsWithoutRef<"div"> & {
    defaultHidden?: boolean;
  };
//===========================================================
// Mask
//===========================================================
export const StyledMask = styled(
  Fixed,
  {
    contentVisibility: "auto",
    zIndex: 100,
    background: "rgba(0 ,0, 0, 0.2)",
    "&[data-state='visible']": { pointerEvents: "auto" },
    "&[data-state='hidden']": { pointerEvents: "none" },
    ..._mask,
    variants: {
      defaultHidden: {
        true: {
          opacity: 0,
          // pointerEvents: "none",
        },
      },
    },
  },
  { as: "co-mask" }
);

//===========================================================
// Modal
//===========================================================
export const Modal: React.FC<BaseModalPropsWithoutRef> = props => {
  const { children, defaultHidden = false, ...restProps } = props;
  const { visible, ref } = useModalCtx();
  return (
    <StyledMask
      data-state={visible ? "visible" : "hidden"}
      defaultHidden={defaultHidden}
      ref={ref}
      {...restProps}
    >
      <co-body>{children}</co-body>
    </StyledMask>
  );
};
Modal.displayName = "Modal";

export type ModalProviderProps = {
  children?: React.ReactNode;
} & useModalOption;

export const ModalProvider: React.FC<ModalProviderProps> = props => {
  const { children, ...useModalOption } = props;
  const { show, hide, visible, ref } = useModal(useModalOption);
  return (
    <modalCtx.Provider
      value={{ visible: visible, onShow: show, onHide: hide, ref }}
    >
      {children}
    </modalCtx.Provider>
  );
};
