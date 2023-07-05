import { isOverflow } from "@c3/dom";
import { useIsVisible } from "@c3/react";
import {
  BaseListItemType,
  Col,
  List,
  ListPropsWithoutRef,
} from "@collie-ui/layout";
import React from "react";
import { useCallback, useEffect, useRef } from "react";

export type InfiniteLoadingProps<T extends BaseListItemType<T>> = {
  onNextPage: () => Promise<void>;
  loader?: React.ReactNode;
  loading: boolean;
  hasMore: boolean;
  endMessage?: React.ReactNode;
} & ListPropsWithoutRef<T>;

export const InfiniteLoading = <T extends BaseListItemType<T>>(
  props: InfiniteLoadingProps<T>
) => {
  const {
    onNextPage,
    loading,
    loader,
    hasMore,
    endMessage,
    className,
    ...restProps
  } = props;
  const bottomLineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, watch] = useIsVisible<HTMLDivElement>();

  useEffect(() => {
    if (!bottomLineRef.current || !containerRef.current || loading) {
      return;
    }
    //不足一屏，不触发
    if (!isOverflow(containerRef.current, "vertical")) {
      return;
    }
    return watch(bottomLineRef.current, { threshold: 0.5 });
  }, [loading, watch]);

  useEffect(() => {
    if (visible) {
      onNextPage();
    }
  }, [onNextPage, visible]);

  return (
    <Col
      ref={containerRef}
      className={className}
      css={{ alignItems: "center" }}
    >
      <List {...restProps} />
      {loading && loader}
      {!hasMore && endMessage}
      <div
        className="bottom-line"
        style={{ minHeight: 6, width: "100%" }}
        ref={bottomLineRef}
      />
    </Col>
  );
};
