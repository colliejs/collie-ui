import { styled } from "@collie-ui/common";
import { Row } from "@collie-ui/layout";
import React, { ForwardRefRenderFunction } from "react";

export type InputProps = {
  prefix: React.ReactNode;
  suffix: React.ReactNode;
  allowClear?: boolean;
  status?: "warning" | "error" | "success";
} & React.ComponentPropsWithoutRef<"input">;

const __Row = styled(Row, {
  ":where(& > input)": {
    h: "100%",
    flexGrow: 1,
    background: "transparent",
    outline: "none",
    border: "none",
  },
  "&:focus-within": {
    // border: '1px solid $gray600',
  },
  ":where(&:focus-within input)": {},
  ":where(&[disabled])": {
    cursor: "not-allowed",
  },
  ":where(&[disabled] input)": {
    cursor: "not-allowed",
  },
});
export const __Input = styled("input", {
  appearance: "none",
  outline: "none",
});

const _Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref
) => {
  const { prefix, suffix, className, ...restProps } = props;

  return (
    <__Row className={className}>
      {prefix}
      <__Input
        {...restProps}
        ref={ref}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
          e.key === "Enter" && e.currentTarget.blur();
        }}
      />
      {suffix}
    </__Row>
  );
};
export const Input = React.forwardRef(_Input);
