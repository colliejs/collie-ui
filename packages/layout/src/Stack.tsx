import { styled } from "@colliejs/react";
import React from "react";
import { Box } from "./Box";

//===========================================================
// StyledStack
//===========================================================
export const StyledStack = styled(
  Box,
  {
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
    w: "max-content",
    "& > :not(:first-child)": {
      left: 0,
      top: 0,
      position: "absolute",
    },
  },
  { as: "u-stack" }
);

//===========================================================
// Stack
//===========================================================
export type StackProps = {
  body: JSX.Element;
  children?: React.ReactNode[];
} & React.ComponentProps<typeof StyledStack>;

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (props, ref) => {
    const { body, children, ...restProps } = props;
    return (
      <StyledStack {...restProps} ref={ref}>
        {body}
        {children}
      </StyledStack>
    );
  }
);

Stack.displayName = "Stack";
