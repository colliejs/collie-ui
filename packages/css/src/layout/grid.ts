import { toArray } from "@c3/utils";
import { CSSObject, CSSProperties,  } from "@colliejs/core";
export const nCol = (
  _num: number | number[],
  _cellWidth: CSSObject<object>["width"],
  cellHeight: CSSObject<object>["height"],
  rowGap: CSSObject<object>["rowGap"] = 0,
  columnGap: CSSObject<object>["columnGap"] = 0
): CSSObject<object> => {
  const nums = toArray(_num);
  const cellWidths = toArray(_cellWidth);
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
