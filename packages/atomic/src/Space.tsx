import { styled } from "@collie-ui/common";
import { Atomic } from "./Atomic";
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "co-space": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

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
          return { width: size, height: size };
        },
      },
      x: {
        dynamic_at(x) {
          return { w: x, height: 1 };
        },
      },
      y: {
        dynamic_at(y) {
          return { w: 1, h: y };
        },
      },
    },
  },
  { as: "co-space" }
);
