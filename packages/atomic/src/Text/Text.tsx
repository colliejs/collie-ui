import { textGradient } from "@collie-ui/css";
import { styled } from "@collie-ui/common";

export const Text = styled("p", {
  lineHeight: "$sm",
  fontFamily: "$font-family",
  variants: {
    italic: {
      true: {
        fontStyle: "italic",
      },
    },
    underline: {
      true: {
        textDecoration: "underline",
      },
    },
    delete: {
      true: {
        textDecoration: "line-through",
      },
    },
    gradient: {
      dynamic(color) {
        return textGradient(color);
      },
    },
    rows: {
      dynamic(rows) {
        return {
          display: "-webkit-box",
          WebkitLineClamp: rows,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        };
      },
    },
  },
});
