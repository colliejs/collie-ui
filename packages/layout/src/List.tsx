import { useExclusive } from "@c3/react";
import { Color } from "@c3/utils";
import { styled } from "@border-collie-js/react";
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
  { as: "u-ul" }
);

//============================================================================
// List
//============================================================================
type ListItemElementProps = {
  onClick: (e: React.MouseEvent) => void;
  "data-active": boolean;
};

export type RenderItem<T extends BaseListItemType<T>> = (
  props: T
) =>
  | React.ReactElement<ListItemElementProps>
  | string
  | null
  | undefined
  | number;

export type BaseListMetaType = {
  id: string | number;
  active: boolean;
};
export type BaseListItemType<T extends BaseListMetaType> = {
  renderItem?: RenderItem<T>;
} & BaseListMetaType;

export type ListPropsWithoutRef<T extends BaseListItemType<T>> = {
  data: T[];
  direction?: "row" | "column";
  renderItem?: RenderItem<T>;
  updateData: (newData: T[], prev: T[]) => void;
  onClick?: (e: MouseEvent) => void;
  divider?: Color; //TODO:
} & React.ComponentProps<typeof StyledList>;

export const List = <T extends BaseListItemType<T>>(
  props: ListPropsWithoutRef<T>
) => {
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
      {data.map((e) => {
        const item = e.renderItem?.(e) || renderItem?.(e);
        if (!React.isValidElement(item)) {
          return item;
        }
        return React.cloneElement(item, {
          onClick: async (event: React.MouseEvent) => {
            on(e.id);
            await item.props.onClick?.(event);
          },
          "data-active": e.active,
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
export type ListControlledProps<T extends BaseListItemType<T>> = Omit<
  ListPropsWithoutRef<T>,
  "updateData" | "data"
> & { initialData: T[] };

export const ListControlled = <T extends BaseListItemType<T>>(
  props: ListControlledProps<T>
) => {
  const { initialData, ...restProps } = props;
  const [data, setData] = useState(initialData);
  return <List data={data} updateData={setData} {...restProps}></List>;
};
