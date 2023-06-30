import { CSSProperties, CSSPropertiesComplex } from "@colliejs/core";
import { col } from "./col";
import { row } from "./row";

//divider and borderradius
export const list = (
  isCol: boolean,
  css: CSSProperties = {}
): CSSPropertiesComplex => ({
  ...(isCol ? col("stretch") : row()),
  "& > *": {
    width: isCol ? "100%" : "auto", //FIXME: 没必要了把？
    flexShrink: 0,
  },
  ...css,
});
