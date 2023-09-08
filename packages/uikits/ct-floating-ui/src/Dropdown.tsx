import { Placement } from "@floating-ui/react-dom-interactions";
import { slides } from "@collie-ui/animation";
import React from "react";
import { BaseFloating, FloatingProps } from "./BaseFloating";

//============================================================================
// DropdownUncontrolled
//============================================================================
export const DropdownUncontrolled: React.FC<FloatingProps> = (props) => {
  const {
    floating: _floating,
    children,
    open,
    onOpenChange,
    ...restProps
  } = props;

  if (!React.isValidElement(children)) {
    throw new Error("TypeError:trigger must be reactElement");
  }
  const floating = React.cloneElement(_floating, {
    onClick: async (e: React.MouseEvent) => {
      onOpenChange?.(false);
      await _floating.props.onClick?.(e);
    },
  });

  return (
    <BaseFloating
      open={open}
      trigger="click"
      onOpenChange={onOpenChange}
      placement={"bottom"}
      anime={animate}
      flip={false}
      floating={floating}
      {...restProps}
    >
      {children}
    </BaseFloating>
  );
};

//============================================================================
// Dropdown
//============================================================================
export type DropdownProps = Omit<FloatingProps, "open" | "onOpenChange">;
export const Dropdown: React.FC<DropdownProps> = (props) => {
  const [open, onOpenChange] = React.useState(false);
  return (
    <DropdownUncontrolled open={open} onOpenChange={onOpenChange} {...props} />
  );
};

//================================================================================================
// animate
//================================================================================================

function animate(
  visible: boolean,
  placement: Placement,
  targets: anime.AnimeParams["targets"]
) {
  // if (!supportIndivideTransform) {
  // return;
  // }
  const key = `bottom-${visible ? "in" : "out"}`;
  //@ts-ignore
  slides[key]({ targets });
}
