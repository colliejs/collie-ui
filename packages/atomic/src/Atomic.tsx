import { styled } from "@colliejs/react";
import { HTMLAttributes } from "react";

export const Atomic = styled<HTMLAttributes<HTMLDivElement>, "div">(
  "div",
  {
    display: "inline-block",
    boxSizing: "border-box",
    p: 0,
    m: 0,
    variants: {
      w: {
        dynamic(x) {
          return {
            width: x,
          };
        },
      },
      circle: {
        true: {
          borderRadius: "100000px",
          aspectRatio: 1,
        },
      },
      square: {
        true: {
          aspectRatio: 1,
        },
      },
      round: {
        true: {
          borderRadius: "100000px",
        },
      },
      dbg: {
        true: {
          border: "1px solid red",
        },
      },
      disabled: {
        true: {
          // cursor: "not-allowed",
          pointerEvents: "none",
        },
      },
    },
  }
);
