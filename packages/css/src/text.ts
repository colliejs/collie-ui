import { CSSObject, CSSProperties } from "@colliejs/core";

export const textGradient = (gradientColor: string | string[]): CSSObject<object> => ({
  backgroundImage: gradientColor,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const typo = ({
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
  letterSpacing,
}: any): CSSObject<object> => {
  return {
    fontSize,
    fontWeight,
    lineHeight,
    fontFamily,
    letterSpacing,
  };
};

export const textEllipse = (value: CSSObject<object>["maxWidth"]): CSSObject<object> => ({
  maxWidth: value,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
