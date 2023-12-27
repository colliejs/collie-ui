import { styled } from "@collie-ui/common";
import { Box } from "./Box";
import { gapX } from "@collie-ui/css";
import { CSSObject } from "@colliejs/core";

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
        dynamic: gap => ({ ...gapX(gap) } as CSSObject<object>),
      },
      fx: {
        dynamic: fx => ({
          justifyContent: fx,
        }),
      },
      fy: {
        dynamic: fy => ({
          alignItems: fy,
        }),
      },
    },
  },
  { as: "co-row" }
);
