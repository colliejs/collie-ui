import type {
  IAPI,
  Option,
  PageInfo,
  PaginationData,
  RawResBody,
  ReqParameter,
} from "@c3/api";
import { usePagination } from "@c3/api";
import { BaseListItemType } from "@collie-ui/layout";
import React, { useCallback, useState } from "react";
import { InfiniteLoading, InfiniteLoadingProps } from "./InfiniteLoading";
import { useMount } from "@c3/react";

export type InfiniteLoadingControlledProps<
  T extends BaseListItemType<T>,
  _RawReqParameter extends PageInfo,
  _ReqParameter extends ReqParameter,
  _RawResBody extends RawResBody,
  _ResBody extends PaginationData<T>
> = {
  intitalData: T[];
  pageSize: number;
  api: IAPI<_RawReqParameter, _ReqParameter, _RawResBody, _ResBody>;
  option: Option<_RawReqParameter>;
  getReqParam: (
    pageNo: number
  ) => Omit<_RawReqParameter, "pageSize" | "pageNo">;
} & Omit<InfiniteLoadingProps<T>, "loading" | "hasMore" | "onNextPage">;

export const InfiniteLoadingControlled = <
  T extends BaseListItemType<T>,
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
  const { api, option, getReqParam, pageSize, ...restProps } = props;
  const [pageNo, setPageNo] = useState(1);
  const { list, total, status, fetchPage } = usePagination(api, option);

  const myFetchPage = useCallback(
    async (pn: number) => {
      const param = getReqParam(pn);
      //@ts-ignore
      return fetchPage({ ...param, pageNo: pn, pageSize });
    },
    [fetchPage, getReqParam, pageSize]
  );

  const onNextPage = useCallback(async () => {
    await myFetchPage(pageNo);
    setPageNo(pn => pn + 1);
  }, [myFetchPage, pageNo]);

  return (
    <InfiniteLoading
      onNextPage={onNextPage}
      loading={status === "loading"}
      hasMore={total > list.length}
      data={list}
      {...restProps}
    />
  );
};
