import { Placement } from "@c3/types";
import { CSSProperties, CSSPropertiesComplex } from "@border-collie-js/core";
import { getPopoverPos } from "./layout";

// //===========================================================
// // TODO:z
// //===========================================================
// export const divider = (
//   color: CSSProperties["color"]
// ): CSSPropertiesComplex => ({
//   "& > :not(:last-child)": {
//     borderBottom: `1px solid ${color}`,
//   },
// });

// export const divider_p = (color: string): CSSPropertiesComplex => ({
//   "& > *:not(:last-child)::after": {
//     width: "1px",
//     backgroundColor: `${color}`,
//     height: "100%",
//   },
// });

export const dividerAt = (
  placement: Placement,
  css: CSSProperties
): CSSPropertiesComplex => {
  const geo: CSSProperties = {};
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
      throw new Error(
        "TypeError:placement must be one of top, bottom, left, right"
      );
  }

  return {
    _after: {
      ...getPopoverPos(placement),
      ...geo,
      ...css,
    },
  };
};
