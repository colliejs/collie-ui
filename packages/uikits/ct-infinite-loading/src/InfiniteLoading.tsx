import { useIsVisible } from "@c3/react";
import { noop } from "@c3/utils";
import {
  Col,
  List,
  ListItemType,
  ListPropsWithoutRef,
} from "@collie-ui/layout";
import React, { useEffect, useRef } from "react";

export type InfiniteLoadingProps<T extends ListItemType> = {
  onNextPage: () => Promise<void>;
  loader?: React.ReactNode;
  loading: boolean;
  hasMore: boolean;
  endMessage?: React.ReactNode;
  renderItem?(props: T): React.ReactNode;
} & Omit<ListPropsWithoutRef<T>, "renderItem">;

export const InfiniteLoading = <T extends ListItemType>(
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

  return (
    <Col
      ref={containerRef}
      className={className}
      css={{ alignItems: "center" }}
    >
      <List data={data} {...restProps} />
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
