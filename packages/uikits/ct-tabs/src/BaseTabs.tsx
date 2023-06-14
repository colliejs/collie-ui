import { noop } from "@c3/utils";
import {
  BaseListItemType,
  Col,
  List,
  RenderItem,
  Row,
} from "@border-collie-ui/layout";
import React, { useMemo } from "react";
import { anti } from "./util";
import { styled } from "@border-collie-js/react";
import "@border-collie-ui/layout/css";

const StyledContentList = styled(List, {
  "&>:not([data-active=true])": { display: "none" },
});

//===========================================================
// Nav
//===========================================================
export type TabItemType<T extends BaseListItemType<T>> = {
  id: string;
  active: boolean;
  renderItem?: RenderItem<T>;
  renderContent?: RenderItem<T>;
};

export type TabConfig<T extends TabItemType<T>> = T[];

export type TabProps<T extends TabItemType<T>> = {
  direction: "row" | "column";
  data: TabConfig<T>;
  updateData: (config: TabConfig<T>) => void;
  renderItem: RenderItem<T>;
  renderContent?: RenderItem<T>;
};

export const BaseTabs = <T extends TabItemType<T>>(props: TabProps<T>) => {
  const {
    data,
    updateData,
    direction,
    renderItem,
    renderContent,
    ...restProps
  } = props;
  const Layout = direction === "row" ? Row : Col;
  const nav = useMemo(
    () => (
      <List
        as="u-nav"
        data={data}
        direction={anti(direction)}
        renderItem={(e: T) => e.renderItem?.(e) || renderItem?.(e)}
        updateData={updateData}
      />
    ),
    [data, direction, renderItem, updateData]
  );

  const content = useMemo(() => {
    return (
      <StyledContentList
        data={data}
        direction={anti(direction)}
        renderItem={(e: T) =>
          e.renderContent?.(e) || renderContent?.(e) || <></>
        }
        updateData={noop}
      />
    );
  }, [data, direction, renderContent]);

  return (
    <Layout as="u-tabs" {...restProps}>
      {nav}
      {content}
    </Layout>
  );
};
