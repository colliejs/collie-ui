import { Box } from "./Box";
import { styled } from "@collie-ui/common";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "co-responsive": JSX.IntrinsicElements["div"];
    }
  }
}

/**
 * Responsive
 * column on mobile, row on desktop
 */
//TODO: fixme for the hardcode media query 768px
export const Responsive = styled(Box, {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  "@media (max-width: 768px)": {
    //TODO:fixme
    flexDirection: "column",
  },

  variants: {
    fx: {
      dynamic: fx => ({
        justifyContent: fx,
        "@media (max-width: 768px)": {
          alignItems: fx,
        },
      }),
    },
    fy: {
      dynamic: fy => ({
        alignItems: fy,
        "@media (max-width: 768px)": {
          justifyContent: fy,
        },
      }),
    },
  },
});
