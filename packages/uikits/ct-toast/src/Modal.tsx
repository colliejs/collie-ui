import React, { useEffect, useRef } from "react";
import { BaseModal, BaseModalPropsWithoutRef } from "./BaseModal";
import { animate, setScrollable } from "./utils";

export type ModalUncontrolledProps = Omit<
  BaseModalPropsWithoutRef,
  "animationStatus"
> & {
  useAnimation?: boolean;
  setVisible: (visible: boolean) => void;
};
export type AnimationStatus =
  | "doing"
  | "done"
  | "not-triggered"
  | "triggered";
export const Modal: React.FC<ModalUncontrolledProps> = props => {
  const {
    visible,
    setVisible,
    okBtn: _okBtn,
    cancelBtn: _cancelBtn,
    closeBtn: _closeBtn,
    useAnimation = true,
    children,
    ...restProps
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [animationStatus, setAnimationStatus] =
    React.useState<AnimationStatus>("not-triggered");
  useEffect(() => {
    console.log("visible", visible);
    if (animationStatus === "not-triggered") return;

    if (visible && animationStatus === "triggered") {
      setAnimationStatus("doing");
      ref.current &&
        useAnimation &&
        animate(true, ref.current).then(() => {
          setAnimationStatus("done");
          setScrollable(false);
        });
      return;
    }
    if (!visible && animationStatus === "triggered") {
      setAnimationStatus("doing");
      ref.current &&
        useAnimation &&
        animate(false, ref.current).then(() => {
          setAnimationStatus("done");
          setScrollable(true);
        });
      return;
    }
  }, [animationStatus, useAnimation, visible]);

  const show = () => {
    setVisible(true);
    setAnimationStatus("triggered");
  };
  const hide = () => {
    setVisible(false);
    setAnimationStatus("triggered");
  };
  if (!React.isValidElement(children)) {
    throw new Error(
      "Modal must have a valid ReactElement as children(trigger)"
    );
  }
  const nChildren = React.cloneElement(children, {
    ...children.props,
    onClick: (e: React.MouseEvent) => {
      show();
      children.props.onClick?.(e);
    },
  });

  const closeBtn =
    _closeBtn &&
    React.cloneElement(_closeBtn, {
      onClick: async (e: React.MouseEvent) => {
        await _closeBtn.props.onClick?.(e);
        hide();
      },
    });
  const okBtn =
    _okBtn &&
    React.cloneElement(_okBtn, {
      onClick: async (e: React.MouseEvent) => {
        await _okBtn.props.onClick?.(e);
        hide();
      },
    });
  const cancelBtn =
    _cancelBtn &&
    React.cloneElement(_cancelBtn, {
      onClick: async (e: React.MouseEvent) => {
        await _cancelBtn.props.onClick?.(e);
        hide();
      },
    });

  return (
    <BaseModal
      ref={ref}
      visible={visible}
      okBtn={okBtn}
      cancelBtn={cancelBtn}
      closeBtn={closeBtn}
      animationStatus={animationStatus}
      {...restProps}
    >
      {nChildren}
    </BaseModal>
  );
};
