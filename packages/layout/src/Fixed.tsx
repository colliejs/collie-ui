import { styled } from "@border-collie-js/react";
import React from "react";
import ReactDOM from "react-dom";
import { Box } from "./Box";

const StyledFixed = styled(Box, { position: "fixed" }, { as: "u-fixed" });

export const Fixed = React.forwardRef<
  unknown,
  React.ComponentProps<typeof StyledFixed>
>((props, ref) => {
  return ReactDOM.createPortal(
    <StyledFixed {...props} ref={ref} />,
    document.body
  );
});

Fixed.displayName = "Fixed";
