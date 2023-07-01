import { textGradient } from "@collie-ui/css";
import { styled } from "@colliejs/react";
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
      del: {
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
