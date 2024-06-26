import { arrayify } from "@collie-ui/common";
import { CSSObject, CSSProperties,  } from "@colliejs/core";
export const nCol = (
  _num: number | number[],
  _cellWidth: CSSObject<object>["width"],
  cellHeight: CSSObject<object>["height"],
  rowGap: CSSObject<object>["rowGap"] = 0,
  columnGap: CSSObject<object>["columnGap"] = 0
): CSSObject<object> => {
  const nums = arrayify(_num);
  const cellWidths = arrayify(_cellWidth);
  if (nums.length !== cellWidths.length) {
    throw new Error("must have same length");
  }
  return {
    display: "grid",
    justifyContent: "center",
    gridAutoRows: cellHeight,
    gridTemplateColumns: nums.map(
      (e, idx) => `repeat(${e}, ${cellWidths[idx]})`
    ),
    rowGap,
    columnGap,
  };
};

