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
// useTab
//===========================================================
export const useTab = (data: TabItemType[]) => {
  return useList(data);
};

//===========================================================
// BaseTab
//===========================================================
export type TabItemType = {
  renderContent?(props: TabItemType): React.ReactNode;
} & ListItemType;

export type TabItemsType<T extends TabItemType> = T[];

export type TabProps<T extends TabItemType> = {
  direction: "row" | "column";
  data: TabItemsType<T>;
  renderItem?(props: TabItemType): React.ReactNode;
  renderContent?(props: TabItemType): React.ReactNode;
};

export const BaseTabs = <T extends TabItemType>(props: TabProps<T>) => {
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
