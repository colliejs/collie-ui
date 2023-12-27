import { CSSObject, CSSProperties } from "@colliejs/core";

export const mask = (css: CSSObject<object> = {}): CSSObject<object> => ({
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
