import { CSSObject } from "@colliejs/core";

/**
 * used when the gap property is not supported
 * @param gap
 * @returns
 */
export const gapX = (gap: CSSObject<object>["gap"]): CSSObject<object> => ({
  "@supports (gap: 1px)": {
    gap,
  },
  "@supports not (gap: 1px)": {
    "& > :where(:not(:last-child))": {
      marginRight: gap,
    },
  },
});

export const gapY = (gap: CSSObject<object>["gap"]): CSSObject<object> => ({
  "@supports (gap: 1px)": {
    gap,
  },
  "@supports not (gap: 1px)": {
    "& > :where(:not(:last-child))": {
      marginBottom: gap,
    },
  },
});
