import { Atomic } from "@collie-ui/atomic";
import { styled } from "@colliejs/react";
import "@collie-ui/atomic/css";

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
  { as: "co-box" }
);
Box.displayName = "Box";
