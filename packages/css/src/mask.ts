import { BaseConfig, CSSObject } from "@colliejs/core";

export const mask = <Config extends BaseConfig>(
  css: CSSObject<Config> = {} as CSSObject<Config>,
): CSSObject<Config> => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ...css,
});
