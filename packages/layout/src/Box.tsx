import { Atomic } from "@border-collie-ui/atomic";
import { styled } from "@border-collie-js/react";
import "@border-collie-ui/atomic/css";

export const Box = styled(
  Atomic,
  {
    display: "flex",
    variants: {
      dbg: {
        true: {
          "&,& *": {
            outline: "1px solid rgba(220, 108, 108, 0.5)",
          },
        },
      },
    },
  },
  { as: "u-box" }
);
Box.displayName = "Box";
