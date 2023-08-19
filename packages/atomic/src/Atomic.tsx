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

type x = React.ComponentProps<typeof Atomic>;
