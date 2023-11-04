import { noop } from "@c3/utils";
import { Col, List, ListItemType, Row, useList } from "@collie-ui/layout";
import React, { useMemo, useState } from "react";
import { anti } from "./util";
import { styled } from "@collie-ui/common";
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "co-tabs": JSX.IntrinsicElements["div"];
      "co-nav": JSX.IntrinsicElements["div"];
    }
  }
}

const StyledContentList = styled(List, {
  "&>[data-state='inactive']": { display: "none" },
});

//===========================================================
// BaseTab
//===========================================================
export type TabItemType = {
  renderContent?(props: TabItemType): React.ReactNode;
} & ListItemType;

export type TabDataType<T extends TabItemType> = T[];

type RootProps<T extends "row" | "column"> = T extends "row"
  ? React.ComponentProps<typeof Row>
  : React.ComponentProps<typeof Col>;

export type TabProps<T extends TabItemType, R extends "row" | "column"> = {
  direction: R;
  data: TabDataType<T>;
  renderItem?(props: T): React.ReactNode;
  renderContent?(props: T): React.ReactNode;
} & RootProps<R>;

export const BaseTabs = <
  T extends TabItemType,
  R extends "row" | "column"
>(
  props: TabProps<T, R>
) => {
  const { data, direction, renderItem, renderContent, ...restProps } =
    props;
  const Layout = direction === "row" ? Row : Col;
  const nav = useMemo(
    () => (
      <List
        as="co-nav"
        data={data}
        direction={anti(direction)}
        renderItem={e => e.renderItem?.(e) || renderItem?.(e)}
      />
    ),
    [direction, data, renderItem]
  );
  const activeItem = data.find(e => e.active);
  const content =
    activeItem &&
    (activeItem?.renderContent?.(activeItem) ||
      renderContent?.(activeItem));

  return (
    <Layout as="co-tabs" {...restProps}>
      {nav}
      {content}
    </Layout>
  );
};
