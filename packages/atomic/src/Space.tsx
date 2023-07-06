import { styled } from "@colliejs/react";
import { Atomic } from "./Atomic";
export type SpaceProps = {
  size: number;
};

export const Space = styled(
  Atomic,
  {
    display: "flex",
    flexShrink: 0,
    variants: {
      size: {
        dynamic(size) {
          return { w: size, h: size };
        },
      },
      x: {
        dynamic(x) {
          return { w: x, h: 1 };
        },
      },
      y: {
        dynamic(y) {
          return { w: 1, h: y };
        },
      },
    },
  },
  { as: "co-space" }
);
