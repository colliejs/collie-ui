import { Atomic } from "../Atomic";
import { styled } from "@border-collie-js/react";

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
