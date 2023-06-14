import { CSSProperties } from "react";

export const textGradient = (value: string) => ({
  backgroundImage: `linear-gradient(${value})`,
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
}: any): any => {
  //TODO: type
  return {
    fontSize,
    fontWeight,
    lineHeight,
    fontFamily,
    letterSpacing,
  };
};

export const textEllipse = (
  value: CSSProperties["maxWidth"]
): CSSProperties => ({
  maxWidth: value,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
