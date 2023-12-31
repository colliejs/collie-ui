import { Atomic } from "@collie-ui/atomic";
import { styled } from "@collie-ui/common";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "co-box": JSX.IntrinsicElements["div"];
    }
  }
}
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
