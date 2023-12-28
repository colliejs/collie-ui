import { makeStyled } from "@colliejs/react";
import  { type BaseConfig, defaultConfig } from "@colliejs/core";
export const styled = makeStyled({
  prefix: "co",
  themeMap:defaultConfig.themeMap,
} as const satisfies BaseConfig);
