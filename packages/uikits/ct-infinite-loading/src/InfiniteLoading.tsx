import { useIsVisible } from "@c3/react";
import { noop } from "@c3/utils";
import {
  Col,
  Id,
  List,
  ListPropsWithoutRef,
  RenderItem,
} from "@collie-ui/layout";
import React, { useEffect, useRef } from "react";

export type InfiniteLoadingProps<T extends Id> = {
  onNextPage: () => Promise<void>;
  loader?: React.ReactNode;
  loading: boolean;
  hasMore: boolean;
  endMessage?: React.ReactNode;
  renderItem: RenderItem<T>;
} & Omit<ListPropsWithoutRef<T>, "updateData" | "renderItem">;

export const InfiniteLoading = <T extends Id>(
  props: InfiniteLoadingProps<T>
) => {
  const {
    onNextPage,
    loading,
    loader,
    hasMore,
    endMessage,
    className,
    data,
    ...restProps
  } = props;
  const bottomLineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, watch] = useIsVisible<HTMLDivElement>();

  useEffect(() => {
    if (!bottomLineRef.current || !containerRef.current) {
      return;
    }
    return watch(bottomLineRef, { threshold: 0.5 });
  }, [watch]);

  useEffect(() => {
    if (visible && !loading && hasMore) {
      onNextPage();
    }
  }, [hasMore, loading, onNextPage, visible]);
  console.log("isivisble", visible);

  return (
    <Col
      ref={containerRef}
      className={className}
      css={{ alignItems: "center" }}
    >
      <List data={data} updateData={noop} {...restProps} />
      {loading && loader}
      {!hasMore && endMessage}
      <div
        className="bottom-line"
        style={{ minHeight: 12, width: "100%" }}
        ref={bottomLineRef}
      />
    </Col>
  );
};
