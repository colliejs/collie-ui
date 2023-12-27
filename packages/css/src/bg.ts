import { CSSObject } from "@colliejs/core";

export const bgImg = (url: string, css: CSSObject<object> = {}): CSSObject<object> => ({
  backgroundImage: `url(${url})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  ...css,
});
