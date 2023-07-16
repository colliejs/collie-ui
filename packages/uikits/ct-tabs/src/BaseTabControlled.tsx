import React, { useState } from "react";
import { BaseTabs, type TabItemType, type TabProps } from "./BaseTabs";

//===========================================================
// BaseTabControlled
//===========================================================
export type BaseTabControlledProps<T extends TabItemType<T>> = Omit<
  TabProps<T>,
  "updateData" | "data"
> & { initialData: T[] };

export const BaseTabControlled = <T extends TabItemType<T>>(
  props: BaseTabControlledProps<T>
) => {
  const { initialData, ...restProps } = props;
  const [data, setData] = useState(initialData);
  return (
    <BaseTabs data={data} updateData={setData} {...restProps}></BaseTabs>
  );
};
