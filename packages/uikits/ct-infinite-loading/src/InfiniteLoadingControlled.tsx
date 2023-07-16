import type {
  IAPI,
  Option,
  PaginationData,
  RawReqParameter,
  RawResBody,
  ReqParameter,
} from "@c3/api";
import { usePagination } from "@c3/api";
import { BaseListItemType } from "@collie-ui/layout";
import React, { useCallback, useState } from "react";
import { InfiniteLoading, InfiniteLoadingProps } from "./InfiniteLoading";
import { useMount } from "@c3/react";

type PageInfo = {
  pageNo: number;
  pageSize: number;
};

export type InfiniteLoadingControlledProps<
  T extends BaseListItemType<T>,
  DataItem,
  _RawReqParameter extends PageInfo = PageInfo,
  _ReqParameter extends ReqParameter = ReqParameter,
  _RawResBody extends RawResBody = RawResBody,
  _ResBody extends PaginationData<DataItem> = PaginationData<DataItem>
> = {
  scrollFromPageNo: number;
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
  DataItem,
  _RawReqParameter extends PageInfo = PageInfo,
  _ReqParameter extends ReqParameter = ReqParameter,
  _RawResBody extends RawResBody = RawResBody,
  _ResBody extends PaginationData<DataItem> = PaginationData<DataItem>
>(
  props: InfiniteLoadingControlledProps<
    T,
    DataItem,
    _RawReqParameter,
    _ReqParameter,
    _RawResBody,
    _ResBody
  >
) => {
  const {
    api,
    option,
    getReqParam,
    scrollFromPageNo: scrollFromPageNo,
    ...restProps
  } = props;
  const [pageNo, setPageNo] = useState(scrollFromPageNo);
  const { list, total, status, updateData, fetchPage } =
    usePagination(api, option);
  const myFetchPage = useCallback(
    async (pn: number) => {
      const param = getReqParam(pn);
      return fetchPage({ ...param, pageNo: pn, pageSize });
    },
    [fetchPage, getReqParam]
  );

  useMount(async () => {
    const i = 1;
    const data: T[] = [];
    while (i < scrollFromPageNo) {
      const res = (await handleNextPage(i)) as _RawResBody;
      data.push(...res.list);
    }
    updateData(data);
  });
  const handleNextPage = useCallback(async () => {
    myFetchPage(pageNo);
    setPageNo(pn => pn + 1);
  }, [myFetchPage, pageNo]);

  return (
    <InfiniteLoading
      onNextPage={handleNextPage}
      loading={status === "loading"}
      hasMore={total < list.length}
      data={list}
      {...restProps}
    />
  );
};
