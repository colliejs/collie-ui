import { styled } from "@collie-ui/common";
import { Box } from "./Box";
import { rgap } from "@collie-ui/css";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "co-row": JSX.IntrinsicElements["div"];
    }
  }
}


export const Row = styled(
  Box,
  {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    variants: {
      gap: {
        dynamic: gap => ({ ...rgap(gap) }),
      },
      fx: {
        dynamic: (fx: string) => ({
          justifyContent: fx,
        }),
      },
      fy: {
        dynamic: (fy: string) => ({
          alignItems: fy,
        }),
      },
    },
  },
  { as: "co-row" }
);
