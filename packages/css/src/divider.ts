import { Side } from "@collie-ui/common";
import {  CSSObject } from "@colliejs/core";
import { getPopoverPos } from "./layout";

// //===========================================================
// // TODO:z
// //===========================================================
export const divider = (color: CSSObject<object>["color"]): CSSObject<object> => ({
  "& > :not(:last-child)": {
    borderBottom: `1px solid ${color}`,
  },
});

// export const divider_p = (color: string): CSSPropertiesComplex => ({
//   "& > *:not(:last-child)::after": {
//     width: "1px",
//     backgroundColor: `${color}`,
//     height: "100%",
//   },
// });

export const dividerAt = (placement: Side, css: CSSObject<object>): CSSObject<object> => {
  const geo: CSSObject<object> = {};
  switch (placement) {
    case "top":
    case "bottom":
      geo.height = "1px";
      geo.width = "100%";
      break;
    case "left":
    case "right":
      geo.width = "1px";
      geo.height = "100%";
      break;
    default:
      throw new Error("TypeError:placement must be one of top, bottom, left, right");
  }

  return {
    _after: {
      ...getPopoverPos(placement),
      ...geo,
      ...css,
    },
  };
};
