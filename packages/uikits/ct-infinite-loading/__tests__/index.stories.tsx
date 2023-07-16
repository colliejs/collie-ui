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

export const InfiniteoadingUncontrolledTest = () => {
  return (
    <InfiniteLoadingControlled
      css={{ h: 300, border: "3px solid red", overflow: "auto" }}
      renderItem={e => {
        return <Box css={{ h: 100 }}>{e.title}</Box>;
      }}

    />
  );
};
