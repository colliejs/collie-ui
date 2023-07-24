import React, { useState } from "react";
import {
  BaseTabs,
  TabConfig,
  type TabItemType,
  type TabProps,
} from "./BaseTabs";
import { Id } from "@collie-ui/layout";

//===========================================================
// BaseTabControlled
//===========================================================
export type BaseTabControlledProps<T extends Id> = Omit<
  TabProps<T>,
  "updateData" | "data"
> & { initialData: TabConfig<T> };

export const BaseTabControlled = <T extends Id>(
  props: BaseTabControlledProps<T>
) => {
  const { initialData, ...restProps } = props;
  const [data, setData] = useState(initialData);
  return (
    <BaseTabs data={data} updateData={setData} {...restProps}></BaseTabs>
  );
};
