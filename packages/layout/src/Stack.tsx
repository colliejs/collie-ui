import { styled } from "@collie-ui/common";
import React, {
  ClassAttributes,
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
} from "react";
import { Box } from "./Box";
import { Debug } from "@c3/types";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "co-stack": JSX.IntrinsicElements["div"];
    }
  }
}

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
  { as: "co-stack" }
);

//===========================================================
// Stack
//===========================================================
export type StackProps = {
  body: JSX.Element;
  children?: React.ReactNode[];
} & React.ComponentProps<typeof StyledStack>;

export const Stack = React.forwardRef(
  (props: StackProps, ref: ForwardedRef<HTMLDivElement>) => {
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
