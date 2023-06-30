import { Atomic } from "../Atomic";
import { styled } from "@colliejs/react";

export const Link = styled(
  Atomic,
  {
    textDecoration: "none",
    cursor: "pointer",
    variants: {
      underline: {
        true: {
          textDecoration: "underline",
        },
      },
    },
  },
  { as: "a", attrs: { target: "_blank" } }
);
