import { CSSProperties } from "react";
import { CSSPropertiesComplex } from "@colliejs/core";

/**
 * used when the gap property is not supported
 * @param gap
 * @returns
 */
export const rgap = (gap: CSSProperties["gap"]): CSSPropertiesComplex => ({
  "& > :where(:not(:last-child))": {
    marginRight: gap,
  },
});

export const vgap = (gap: CSSProperties["gap"]): CSSPropertiesComplex => ({
  "& > :where(:not(:last-child))": {
    marginBottom: gap,
  },
});
