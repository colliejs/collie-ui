import { KeepPxReg } from "./constants";

//===========================================================
// pxToVw
//===========================================================
export const pxToVw = (px: number, refWidth: number) => `${(px / refWidth) * 100}vw`;

export const vw = (px: string | number, refWidth: number) => {
  if (typeof px === "number") {
    return pxToVw(px, refWidth);
  }
  if (typeof px === "string") {
    if (KeepPxReg.test(px)) {
      return px.replace("_", "");
    }
    //if there is no px,it will keep original string
    return px.replace(/(\d+)px/g, (m, p) => pxToVw(+p, refWidth));
  }

  throw new Error(`px is ${JSON.stringify(px)}`);
};

export const fontVw = (px: number, refWidth: number) => {
  const base = 12;
  return `calc(${base}px + ${vw(px - base, refWidth)})`;
};
