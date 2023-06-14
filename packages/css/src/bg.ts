import { CSSProperties } from "@border-collie-js/core";

export const bgImg = (url: string, css: CSSProperties = {}): CSSProperties => ({
  backgroundImage: `url(${url})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  ...css,
});
