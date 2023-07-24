import { useExclusive } from "@c3/react";
import { Color } from "@c3/utils";
import { styled } from "@collie-ui/common";
import React, { useState } from "react";
import { Box as _Box } from "./Box";
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
// List
//============================================================================
type ListItemElementProps = {
  onClick: (e: React.MouseEvent) => void;
  "data-state": "active" | "inactive";
};

export type RenderItem<T extends Id> = (
  props: ListItemType<T>
) =>
  | React.ReactElement<ListItemElementProps>
  | string
  | null
  | undefined
  | number;

export type Id = {
  id: string | number;
};
export type ListItemType<T extends Id> = {
  renderItem?: RenderItem<T>;
  active: boolean;
} & T;

export type ListPropsWithoutRef<T extends Id> = {
  data: ListItemType<T>[];
  direction?: "row" | "column";
  renderItem?: RenderItem<T>;
  updateData: (
    newData: ListItemType<T>[],
    prev: ListItemType<T>[]
  ) => void;
  onClick?: (e: MouseEvent) => void;
  divider?: Color; //TODO:
} & React.ComponentProps<typeof StyledList>;

export const List = <T extends Id>(props: ListPropsWithoutRef<T>) => {
  const {
    data,
    renderItem,
    direction = "column",
    updateData,
    onClick,
    ...restProps
  } = props;
  const on = useExclusive(data, "active", updateData);

  return (
    <StyledList onClick={onClick} direction={direction} {...restProps}>
      {data.map(e => {
        const item = e.renderItem?.(e) || renderItem?.(e);
        if (!React.isValidElement(item)) {
          return item;
        }
        return React.cloneElement(item, {
          onClick: async (event: React.MouseEvent) => {
            on(e.id);
            await item.props.onClick?.(event);
          },
          "data-state": e.active ? "active" : "inactive",
          key: e.id,
        });
      })}
    </StyledList>
  );
};

List.displayName = "List";

//===========================================================
// ListControlled
//===========================================================
export type ListControlledProps<T extends Id> = Omit<
  ListPropsWithoutRef<T>,
  "updateData" | "data"
> & { initialData: ListItemType<T>[] };

export const ListControlled = <T extends Id>(
  props: ListControlledProps<T>
) => {
  const { initialData, ...restProps } = props;
  const [data, setData] = useState(initialData);
  return <List data={data} updateData={setData} {...restProps}></List>;
};
