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
        dynamic: size => ({ w: size, h: size }),
      },
      w: {
        dynamic: x => ({ w: x, h: 1 }),
      },
      h: {
        dynamic: y => ({ h: y, w: 1 }),
      },
    },
  },
  { as: "co-space" },
);
