import type { BaseConfig, CSSObject } from "@colliejs/core";
import type { Direction } from "@collie-ui/common";
import { CSSProperties } from "@colliejs/core";
import { getPopoverPos } from "./layout/placement";

export const arrow = (direction: "top" | "right" | "bottom" | "left"): CSSProperties => {
  let polygon;
  switch (direction) {
    case "top":
      polygon = "50% 0%, 0% 100%, 100% 100%";
      break;
    case "bottom":
      polygon = "0% 0%, 50% 100%, 100% 0%";
      break;
    case "left":
      polygon = "100% 0%, 0% 50%, 100% 100%";
      break;
    case "right":
      polygon = "0% 0%, 0% 100%, 100% 50%";
      break;
    default:
      throw new Error("TypeError:direction must be one of top, bottom, left, right");
  }
  return {
    clipPath: `polygon(${polygon})`,
  };
};

//=====================================================================================================
// pseudoArrow:
// color of border of arrow is same as the border color of parent element
//=====================================================================================================
//TODO: FIXME. about the returnType of pseudoArrow , it should be CSSObject<Config>

export const pseudoArrow = (
  direction: Direction,
  width: number,
  height: number,
  css?: CSSObject<object>
): CSSObject<object> => {
  const { border, ...restCss } = css || {};
  if (!border) {
    return {
      "&": {
        postion: "relative",
      },
      "&::before": {
        postion: "absolute",
        width: width,
        height: height,
        ...getPopoverPos(direction),
        ...arrow(direction),
        background: "inherit",
        ...css,
      },
    };
  }

  const res = (border as string).match(/(?<size>\d+?)p?x? (?<type>\w+?) (?<color>.+)/);
  // only support solid
  if (!res) {
    throw new Error(`invalid border: ${border}`);
  }
  //@ts-ignore
  const { size = 1, color } = res.groups;
  const w = width - +size - 1;
  const h = height - +size - 1;
  return {
    "&": {
      position: "relative",
    },
    "&::before": {
      positon: "absolute",
      w: width,
      h: height,
      ...getPopoverPos(direction),
      ...arrow(direction),
      background: color,
      ...restCss,
    },
    "&::after": {
      w: w,
      h: h,
      ...getPopoverPos(direction),
      ...arrow(direction),
      background: "inherit",
      ...restCss,
    },
  };
};
