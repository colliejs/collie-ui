import { CSSObject, CSSProperties } from "@colliejs/core";
import { Pos, xCenter, xyCenter, yCenter } from "./abs";

export const fixed = (pos: Pos): CSSObject<object> => ({
  position: "fixed",
  top: pos.top,
  left: pos.left,
  right: pos.right,
  bottom: pos.bottom,
});

export const fixedXCenter = xCenter("fixed");
export const fixedYCenter = yCenter("fixed");
export const fixedXYCenter = xyCenter("fixed");
