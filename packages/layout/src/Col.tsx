import { styled } from "@collie-ui/common";
import { Box } from "./Box";
import { StyledObject } from "@colliejs/react";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "co-col": JSX.IntrinsicElements["div"];
    }
  }
}

export const Col = styled(
  Box,
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    variants: {
      gap: {
        dynamic: value => ({
          gapx: value,
        }),
        a: { overflowX: 2 },
      },
      fx: {
        dynamic: fx => ({
          alignItems: fx,
        }),
      },
      fy: {
        dynamic: fy => ({
          justifyContent: fy,
        }),
      },
    },
  },
  { as: "co-col" }
);
