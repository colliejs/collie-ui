import { textGradient } from "@collie-ui/css";
import { styled } from "@border-collie-js/react";
import { Atomic } from "../Atomic";

export const Text = styled(
  Atomic,
  {
    variants: {
      bold: {
        true: {
          fontWeight: "bold",
        },
      },
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
      "line-through": {
        true: {
          textDecoration: "line-through",
        },
      },
      gradient: {
        dynamic(color: string) {
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
  },
  { as: "p" }
);
