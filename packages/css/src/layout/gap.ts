import { CSSProperties } from "react";
import { CSSPropertiesComplex } from "@border-collie-js/core";

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
