import { CSSObject } from "@colliejs/core";

export const dbg = {
  outline: "1px solid red",
  "& *": {
    outline: "1px solid red",
  },
} satisfies CSSObject<object>;
