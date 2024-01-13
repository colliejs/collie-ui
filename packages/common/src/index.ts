import { makeStyled } from "@colliejs/react";
import { CSSProperties, type BaseConfig } from "@colliejs/core";
import { defaultConfig } from "@colliejs/config";

//必须要设置断点，否则dynmaic variants无法传入数组

export const styled = makeStyled({
  ...defaultConfig,
  breakpoints: [0, 768],
  prefix: "co",
  // utils: {
  //   ...defaultConfig.utils,
  //   "@phone": (css: CSSProperties) => {
  //     return { "@media (min-width: 0px)": css };
  //   },
  //   "@tablet": (css: CSSProperties) => {
  //     return { "@media (min-width: 768px)": css };
  //   },
  // } as const satisfies BaseConfig["utils"],
} as const satisfies BaseConfig);
