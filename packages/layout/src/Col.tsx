import { CSSProperties } from "@colliejs/core";
import { styled } from "@collie-ui/common";
import { Box } from "./Box";

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
        //TODO:使用@supports来判断是否支持flex中使用gap属性
        dynamic: value => ({
          gap: value,
        }),
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
