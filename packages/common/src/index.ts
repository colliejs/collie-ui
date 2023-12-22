import { makeStyled, defaultConfig } from "@colliejs/react";
import type { BaseConfig } from "@colliejs/core";
export const styled = makeStyled({
  ...defaultConfig,
  prefix: "co",
} as const satisfies BaseConfig);
