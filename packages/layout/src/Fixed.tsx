import { styled } from "@collie-ui/common";
import React, { Ref } from "react";
import ReactDOM from "react-dom";
import { Box } from "./Box";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "co-fixed": JSX.IntrinsicElements["div"];
    }
  }
}

const StyledFixed = styled(Box, { position: "fixed" }, { as: "co-fixed" });

export const Fixed = React.forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof StyledFixed>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return ReactDOM.createPortal(
      <StyledFixed {...props} ref={ref} />,
      document.body
    );
  }
);

Fixed.displayName = "Fixed";
