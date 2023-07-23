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

export type InfiniteLoadingControlledProps<
  T extends BaseListItemType<T>,
  _RawReqParameter extends PageInfo,
  _ReqParameter extends ReqParameter,
  _RawResBody extends RawResBody,
  _ResBody extends PaginationData<T>
> = {
  api: IAPI<_RawReqParameter, _ReqParameter, _RawResBody, _ResBody>;
  option: Option<_RawReqParameter>;
} & Omit<InfiniteLoadingProps<T>, "loading" | "hasMore" | "onNextPage">;

//TODO: add funciton getReqPara = (pageNo:number) => ReqParameter
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
  const { api, option, ...restProps } = props;
  const [pageNo, setPageNo] = useState(1);
  const { list, total, status, fetchPage } = usePagination(api, option);


  const onNextPage = useCallback(async () => {
    await fetchPage({
      ...option.defaultReqParameter,
      pageNo: pageNo,
      pageSize: option.pageSize,
    });
    setPageNo(pn => pn + 1);
  }, [fetchPage, option.defaultReqParameter, option.pageSize, pageNo]);

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
