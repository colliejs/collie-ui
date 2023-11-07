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
  const navbar = useMemo(
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

  //TODO:一开始就渲染了所有元素
  const contentList = useMemo(
    () => (
      <List
        data={data}
        renderItem={(e: T) => (
          <div
            key={e.id}
            className={`tab-content ${e.active ? "active" : "inactive"}`}
            style={{ display: e.active ? "block" : "none" }}
          >
            {e.renderContent?.(e) || renderContent?.(e)}
          </div>
        )}
      />
    ),
    [data, renderContent]
  );

  return (
    <Layout as="co-tabs" {...restProps}>
      {navbar}
      {contentList}
    </Layout>
  );
};
