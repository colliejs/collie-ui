import { CSSProperties } from "react";

export const textGradient = (gradientColor: string) => ({
  backgroundImage: gradientColor,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const typo = ({ fontSize, fontWeight, lineHeight, fontFamily, letterSpacing }: any): any => {
  //TODO: type
  return {
    fontSize,
    fontWeight,
    lineHeight,
    fontFamily,
    letterSpacing,
  };
};

export const textEllipse = (value: CSSProperties["maxWidth"]): CSSProperties => ({
  maxWidth: value,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
