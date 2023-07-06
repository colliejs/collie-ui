import React, { useEffect, useRef } from "react";
import { BaseFloating, FloatingProps } from "./BaseFloating";
import {
  absXYCenter,
  textEllipse,
  flexCenter,
  pseudoArrow,
} from "@collie-ui/css";
import { styled } from "@colliejs/react";
import { Text } from "@collie-ui/atomic";
import { useIsOverflow } from "@c3/react";

//============================================================================
// TooltipUncontrolled
//============================================================================
export type TooltipUncontrolledProps = Omit<FloatingProps, "trigger">;
export const TooltipUncontrolled: React.FC<
  TooltipUncontrolledProps
> = props => {
  const { children, ...restProps } = props;

  if (!React.isValidElement(children)) {
    throw new Error("TypeError:trigger must be reactElement");
  }
  return (
    <BaseFloating trigger="hover" flip={false} {...restProps}>
      {children}
    </BaseFloating>
  );
};

//============================================================================
// Tooltip
//============================================================================
export type TooltipProps = Omit<
  FloatingProps,
  "trigger" | "open" | "onOpenChange"
>;
export const Tooltip: React.FC<TooltipProps> = props => {
  const { children, ...restProps } = props;
  const [open, onOpenChange] = React.useState(false);

  if (!React.isValidElement(children)) {
    throw new Error("TypeError:trigger must be reactElement");
  }
  return (
    <BaseFloating
      trigger="hover"
      flip={false}
      open={open}
      onOpenChange={onOpenChange}
      {...restProps}
    >
      {children}
    </BaseFloating>
  );
};

//============================================================================
// FloatingText
//============================================================================
export const FloatingText = styled(Text, {
  display: "inline-block",
  p: 10,
  border: "1px solid currentColor",
  ...flexCenter,
  ...pseudoArrow("bottom", 12, 6, {
    border: "1px solid currentColor",
  }),
});

//============================================================================
// TextWithTooltip
//============================================================================
export type TextWithTooltipProps = {
  children: React.ReactNode;
  tooltipProps?: React.ComponentProps<typeof Tooltip>;
} & React.ComponentProps<typeof Text>;

export const TextWithTooltip: React.FC<TextWithTooltipProps> = props => {
  const {
    children,
    tooltipProps: {
      floating = (
        <FloatingText className="co-floating-text">
          {children}
        </FloatingText>
      ),
      placement = "top",
      ...restTooltipProps
    } = {},
    ...restProps
  } = props;

  const [isOverflow, watch] = useIsOverflow();
  const ref = useRef();
  useEffect(() => {
    ref.current && watch(ref.current);
  }, [watch]);

  const text = (
    <Text
      className="co-text"
      style={{ ...textEllipse, display: "inline-block" }}
      {...restProps}
      ref={ref}
    >
      {children}
    </Text>
  );

  return isOverflow ? (
    <Tooltip
      floating={floating}
      placement={placement}
      {...restTooltipProps}
    >
      {text}
    </Tooltip>
  ) : (
    text
  );
};
