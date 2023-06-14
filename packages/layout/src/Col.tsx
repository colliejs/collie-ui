import { CSSProperties } from "@border-collie-js/core";
import { styled } from "@border-collie-js/react";
import { Box } from "./Box";

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
        dynamic: (value) => ({
          gap: value,
        }),
      },
      fx: {
        dynamic: (fx) => ({
          alignItems: fx,
        }),
      },
      fy: {
        dynamic: (fy) => ({
          justifyContent: fy,
        }),
      },
    },
  },
  { as: "u-col" }
);
