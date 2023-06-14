import { styled } from "@border-collie-js/react";
import { Box } from "./Box";
import { rgap } from "@border-collie-ui/css";

export const Row = styled(
  Box,
  {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    variants: {
      gap: {
        dynamic: (gap) => ({ ...rgap(gap) }),
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
  { as: "u-row" }
);
