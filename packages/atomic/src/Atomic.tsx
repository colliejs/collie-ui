import { styled } from "@colliejs/react";
import { HTMLAttributes } from "react";

export const Atomic = styled<HTMLAttributes<HTMLDivElement>, "div">("div", {
  display: "inline-block",
  boxSizing: "border-box",
  p: 0,
  m: 0,
  variants: {
    circle: {
      dynamic(diameter: number | string) {
        return {
          borderRadius: "100000px",
          width: diameter,
          height: diameter,
        };
      },
    },
    square: {
      dynamic(x: number | string) {
        return {
          width: x,
          height: x,
        };
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
});
