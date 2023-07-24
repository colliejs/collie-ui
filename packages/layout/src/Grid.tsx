import { styled } from "@collie-ui/common";
import React, { useState } from "react";
import { ListItemType, List, ListPropsWithoutRef, Id } from "./List";

//===========================================================
// StyledGrid
//===========================================================
export const StyledGrid = styled(
  List,
  {
    display: "grid",
    placeContent: "center",
    placeItems: "center",
    variants: {
      cols: {
        dynamic(cols) {
          return {
            gridTemplateColumns: `repeat(${cols},max-content)`,
          };
        },
      },
      h: {
        dynamic(h) {
          return {
            gridTemplateRows: h,
          };
        },
      },
    },
  },
  { as: "co-grid" }
);

//===========================================================
// Grid
//===========================================================
export type GridProps<T extends Id> = ListPropsWithoutRef<T>;
export const Grid = <T extends Id>(props: GridProps<T>) => {
  return <StyledGrid {...props}></StyledGrid>;
};
Grid.displayName = "Grid";

//===========================================================
// GridControlled
//===========================================================
export type GridControlledProps<T extends Id> = Omit<
  ListPropsWithoutRef<T>,
  "updateData" | "data"
> & { initialData: T[] };

export const GridControlled = <T extends Id>(
  props: GridControlledProps<T>
) => {
  const { initialData, ...restProps } = props;
  const [data, setData] = useState(initialData);
  return (
    <StyledGrid
      data={data}
      updateData={setData}
      {...restProps}
    ></StyledGrid>
  );
};
GridControlled.displayName = "GridControlled";
