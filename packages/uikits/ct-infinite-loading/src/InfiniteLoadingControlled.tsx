import type {
  IAPI,
  PageInfo,
  PaginationData,
  RawResBody,
  ReqParameter,
} from "@c3/api";
import { usePagination } from "@c3/api";
import { Id, RenderItem } from "@collie-ui/layout";
import React, { useCallback, useState } from "react";
import { InfiniteLoading, InfiniteLoadingProps } from "./InfiniteLoading";

export type InfiniteLoadingControlledProps<
  T extends Id,
  _RawReqParameter extends PageInfo,
  _ReqParameter extends ReqParameter,
  _RawResBody extends RawResBody,
  _ResBody extends PaginationData<T>
> = {
  api: IAPI<_RawReqParameter, _ReqParameter, _RawResBody, _ResBody>;
  pageSize: number;
  getReqPara?: (
    pageNo: number
  ) => Omit<_RawReqParameter, "pageNo" | "pageSize">;
  renderItem: RenderItem<T>;
} & Omit<
  InfiniteLoadingProps<T>,
  "loading" | "hasMore" | "onNextPage" | "renderItem"
>;

export const InfiniteLoadingControlled = <
  T extends Id,
  _RawReqParameter extends PageInfo,
  _ReqParameter extends ReqParameter,
  _RawResBody extends RawResBody,
  _ResBody extends PaginationData<T>
>(
  props: InfiniteLoadingControlledProps<
    T,
    _RawReqParameter,
    _ReqParameter,
    _RawResBody,
    _ResBody
  >
) => {
  const { api, pageSize, getReqPara, ...restProps } = props;
  const { list, total, status, pageNo, fetchNextPage } = usePagination<
    T,
    _RawReqParameter,
    _ReqParameter,
    _RawResBody,
    _ResBody
  >(api, pageSize);
  const onNextPage = useCallback(async () => {
    const para = getReqPara
      ? getReqPara(pageNo)
      : ({} as Omit<_RawReqParameter, "pageNo" | "pageSize">);
    fetchNextPage(para);
  }, [fetchNextPage, getReqPara, pageNo]);

  return (
    <InfiniteLoading
      onNextPage={onNextPage}
      loading={status === "loading"}
      hasMore={total > 0 && total > list.length}
      data={list}
      {...restProps}
    />
  );
};
