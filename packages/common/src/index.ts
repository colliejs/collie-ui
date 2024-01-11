import { makeStyled } from "@colliejs/react";
import { type BaseConfig } from "@colliejs/core";
import { defaultConfig } from "@colliejs/config";

//必须要设置断点，否则dynmaic variants无法传入数组
export const styled = makeStyled({
  ...defaultConfig,
  breakpoints: [0, 768],
  prefix: "co",
} as const satisfies BaseConfig);
