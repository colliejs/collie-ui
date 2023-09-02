import { useExclusive } from "@c3/react";
import { Color } from "@c3/utils";
import { styled } from "@collie-ui/common";
import React, { useState, useCallback } from "react";
import { Box as _Box } from "./Box";
import { Debug } from "@c3/types";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "co-ul": JSX.IntrinsicElements["ul"];
    }
  }
}

//============================================================================
// StyledList
//=============================================================================
export const StyledList = styled(
  _Box,
  {
    listStyle: "none",
    flexWrap: "nowrap",
    variants: {
      direction: {
        column: {
          flexDirection: "column",
          alignItems: "stretch", //fx
        },
        row: {
          flexDirection: "row",
        },
      },
    },
  },
  { as: "co-ul" }
);

//============================================================================
// useList
//============================================================================

export const useList = <T extends ListItemType>(intialData: T[]) => {
  const [data, setData] = useState(intialData);
  const onClick = useCallback(
    (item: T) => {
      const newData = intialData.map(e => {
        if (e.id === item.id) {
          return { ...e, active: true };
        }
        return { ...e, active: false };
      });
      setData(newData);
    },
    [intialData]
  );
  return [data, onClick] as const;
};

//============================================================================
// List
//============================================================================
export type ListItemType = {
  id: string | number;
  renderItem?(item: ListItemType): React.ReactNode;
  active: boolean;
};

export type ListPropsWithoutRef<T extends ListItemType> = {
  data: T[];
  direction?: "row" | "column";
  renderItem?(props: T): React.ReactNode;
} & React.ComponentProps<typeof StyledList>;

export const List = <T extends ListItemType>(
  props: ListPropsWithoutRef<T>
) => {
  const { data, renderItem, direction = "column", ...restProps } = props;
  return (
    <StyledList direction={direction} {...restProps}>
      {data.map(e => e.renderItem?.(e) || renderItem?.(e) || null)}
    </StyledList>
  );
};

List.displayName = "List";
