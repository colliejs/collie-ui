import { Box } from "./Box";
import { styled } from "@collie-ui/common";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "co-relative": JSX.IntrinsicElements["div"];
    }
  }
}



export const Relative = styled(
  Box,
  { position: "relative" },
  { as: "co-relative" }
);
