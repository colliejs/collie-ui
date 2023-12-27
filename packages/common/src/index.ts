import { makeStyled, defaultConfig } from "@colliejs/react";
import type { BaseConfig } from "@colliejs/core";
export const styled = makeStyled({
  prefix: "co",
  themeMap:defaultConfig.themeMap,
} as const satisfies BaseConfig);
