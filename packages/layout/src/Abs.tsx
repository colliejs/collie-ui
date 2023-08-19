import { Box } from "./Box";
import { styled } from "@collie-ui/common";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "co-abs": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export const Abs = styled(Box, { position: "absolute" }, { as: "co-abs" });
