import { CSSProperties } from "@colliejs/core";

export interface IYPosition {
  top?: CSSProperties["top"];
  bottom?: CSSProperties["bottom"];
}
export interface IXPosition {
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
}
export type IAbsPosition = "fixed" | "absolute";

export interface IPosition extends IXPosition, IYPosition {}

//FIXME: SSR
export const supportIndivideTransform = globalThis?.CSS?.supports?.(
  "translate",
  "0px"
);

export const xCenter = (position: IAbsPosition) => (ypos?: IYPosition) => {
  return {
    top: ypos?.top,
    bottom: ypos?.bottom,
    left: "50%",
    position,
    ...(supportIndivideTransform
      ? { translate: "-50% 0%" } //FIXME: 0% maybe override the original value
      : { transform: "translateX(-50%)" }),
  } as CSSProperties;
};

export const yCenter = (postion: IAbsPosition) => (xpos?: IXPosition) => {
  return {
    left: xpos?.left,
    right: xpos?.right,
    position: postion,
    top: "50%",
    ...(supportIndivideTransform
      ? { translate: "0% -50%" }
      : { transform: "translateY(-50%)" }),
  } as CSSProperties;
};

export const xyCenter = (position: IAbsPosition) => () => {
  return {
    position,
    left: "50%",
    top: "50%",
    ...(supportIndivideTransform
      ? { translate: "-50% -50%" }
      : { transform: "translate(-50%,-50%)" }),
  } as CSSProperties;
};

export const absXCenter = xCenter("absolute");

export const absYCenter = yCenter("absolute");

export const absXYCenter = xyCenter("absolute");

export const abs = ({ left, top, right, bottom }: IPosition): CSSProperties => {
  return { position: "absolute", left, right, top, bottom };
};

export const leftTopCorner: CSSProperties = {
  left: 0,
  top: 0,
};

export const rightTopCorner: CSSProperties = {
  top: 0,
  right: 0,
};

export const rightBottomCorner: CSSProperties = {
  bottom: 0,
  right: 0,
};

export const leftBottomCorner: CSSProperties = {
  bottom: 0,
  left: 0,
};
