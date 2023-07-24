import { useCallback, useState } from "react";
import React from "react";
import { InfiniteLoading } from "../dist";
import { Box, type BaseListItemType } from "@collie-ui/layout";

export default {
  title: "uikits/ct-infinite-loading",
};
import "@collie-ui/atomic/css";
import "@collie-ui/layout/css";
import { InfiniteLoadingControlled } from "../src/InfiniteLoadingControlled";
import { noop } from "@c3/utils";
import { makeApi } from "@c3/api";

const api = makeApi({
  method: "get",
  url: "https://jsonplaceholder.typicode.com/users",
  mockData: {},
  convert: (data: any) => {
    console.log("data", data);
    return {
      list: data.slice?.(0, 4) || [],
      total: 100,
    };
  },
});

const initialData = [];
export const InfiniteoadingUncontrolledTest = () => {
  return (
    <InfiniteLoadingControlled
      getReqParam={noop}
      api={api}
      option={{}}
      loader={<div>loading</div>}
      css={{
        h: 300,
        border: "3px solid red",
        overflow: "auto",
        ".bottom-line": {
          backround: " red",
        },
      }}
      renderItem={e => {
        return (
          <Box css={{ h: 30, border: "1px solid red" }}>{e.name}</Box>
        );
      }}
    />
  );
};
