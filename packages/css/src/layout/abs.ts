import type { CSSObject, CSSProperties } from "@colliejs/core";

export interface YPos {
  top?: CSSObject<object>["top"];
  bottom?: CSSObject<object>["bottom"];
}
export interface XPos {
  left?: CSSObject<object>["left"];
  right?: CSSObject<object>["right"];
}
export type FixedOrAbs = "fixed" | "absolute";

export interface Pos extends XPos, YPos {}

export const xCenter =
  (position: FixedOrAbs) =>
  (ypos: YPos = {}): CSSObject<object> => {
    return {
      ...(ypos.top ? { top: ypos.top } : {}),
      ...(ypos.bottom ? { bottom: ypos.bottom } : {}),
      left: "50%",
      position,
      "@supports (translate: -50% 0%)": {
        translate: "-50% 0%",
      },
      "@supports not (translate: -50% 0%)": {
        transform: "translateX(-50%)",
      },
    };
  };

export const yCenter =
  (postion: FixedOrAbs) =>
  (xpos: XPos = {}): CSSObject<object> => {
    return {
      ...(xpos.left ? { left: xpos.left } : {}),
      ...(xpos.right ? { right: xpos.right } : {}),
      position: postion,
      top: "50%",
      "@supports (translate: 0% -50%)": {
        translate: "0% -50%",
      },
      "@supports not (translate: 0% -50%)": {
        transform: "translateY(-50%)",
      },
    };
  };

export const xyCenter = (position: FixedOrAbs) => () => (): CSSObject<object> => {
  return {
    position,
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    "@supports (translate: -50% -50%)": {
      translate: "-50% -50%",
    },
  };
};

export const absXCenter = xCenter("absolute");

export const absYCenter = yCenter("absolute");

export const absXYCenter = xyCenter("absolute");

export const abs = ({ left, top, right, bottom }: Pos): CSSObject<object> => {
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
