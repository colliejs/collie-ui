import { Atomic } from "../Atomic";
import { styled } from "@collie-ui/common";

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
  { as: "a", target: "_blank" }
);
