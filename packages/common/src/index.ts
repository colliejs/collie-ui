import { makeStyled } from "@colliejs/react";
import { type BaseConfig } from "@colliejs/core";
import { defaultConfig } from "@colliejs/config";
export const styled = makeStyled({
  ...defaultConfig,
  prefix: "co",
} as const satisfies BaseConfig);
