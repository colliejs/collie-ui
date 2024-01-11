import { styled } from "@collie-ui/common";
export const Atomic = styled("div", {
  display: "inline-block",
  boxSizing: "border-box",
  p: 0,
  m: 0,
  variants: {
    w: {
      dynamic: x => ({ width: x }),
    },
    circle: {
      true: {
        borderRadius: 99999,
        aspectRatio: 1,
      },
    },
    square: {
      true: {
        aspectRatio: 1,
      },
    },
    pill: {
      true: {
        borderRadius: 99999,
      },
    },
    dbg: {
      true: {
        outline: "1px solid red",
      },
    },
  },
});
