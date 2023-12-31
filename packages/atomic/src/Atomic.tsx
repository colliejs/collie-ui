import { styled } from "@collie-ui/common";
export const Atomic = styled("div", {
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
        outline: "1px solid red",
      },
    },
  },
});
