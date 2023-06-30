import { Box } from "./Box";
import { styled } from "@colliejs/react";

/**
 * Responsive
 * column on mobile, row on desktop
 */
export const Responsive = styled(Box, {
  display: "flex",
  // flexDirection: ["column", "row"],
  flexDirection: "row",
  flexWrap: "nowrap",
  "@phone": {
    flexDirection: "column",
  },
  variants: {
    fx: {
      dynamic: (fx) => ({
        justifyContent: fx,
        "@phone": {
          alignItems: fx,
        },
      }),
    },
    fy: {
      dynamic: (fy) => ({
        alignItems: fy,
        "@phone": {
          justifyContent: fy,
        },
      }),
    },
  },
});
