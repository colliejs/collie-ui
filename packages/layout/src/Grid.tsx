import { styled } from "@collie-ui/common";
import React, { useState } from "react";
import {
  ListItemType,
  List,
  ListPropsWithoutRef,
  useList,
} from "./List";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "co-grid": JSX.IntrinsicElements["div"];
    }
  }
}

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
) as any; //TODO:

//===========================================================
// useGrid
//===========================================================
export const useGrid = (initialData: ListItemType[]) => {
  return useList(initialData);
};

//===========================================================
// Grid
//===========================================================
export type GridProps<T extends ListItemType> = ListPropsWithoutRef<T>;
export const Grid = <T extends ListItemType>(props: GridProps<T>) => {
  return <StyledGrid {...props}></StyledGrid>;
};
Grid.displayName = "Grid";
