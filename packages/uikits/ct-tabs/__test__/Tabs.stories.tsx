import { Text } from "@collie-ui/atomic";
import React from "react";
import { useState } from "react";
import { TabItemType, TabConfig, BaseTabs, TabsControlled } from "../src";
import "./index.css";
export default { title: "uikits/c-tabs" };

interface Item extends TabItemType<any> {
  title: string;
  to: string;
}

const config: TabConfig<Item> = [
  {
    id: "1",
    title: "name1",
    to: "/account#profile",
    active: true,
    renderContent: () => <Text>content1</Text>,
  },
  {
    id: "2",
    title: "name2",
    to: "/account#222",
    active: false,
    renderContent: () => <Text>content2</Text>,
  },
  {
    id: "3",
    title: "name3",
    to: "/account#222",
    active: false,
    renderContent: () => <Text>content3</Text>,
  },
  {
    id: "4",
    title: "name4",
    to: "/account#2222",
    active: false,
    renderContent: () => <Text>content4</Text>,
  },
];

const SwitcherApp = (props: any): JSX.Element => {
  const [menuconfig, setMenuConfig] = useState(config);
  return (
    <BaseTabs
      data={menuconfig}
      updateData={setMenuConfig}
      renderItem={(e: Item) => <Text>{e.title}</Text>}
      css={{ "co-nav": { border: "1px solid red", gap: 10 } }}
      {...props}
    />
  );
};
//=====================================================================================================
// HorizontalSwitcher
//=====================================================================================================
export const TabsControlledTest = () => (
  <TabsControlled initialData={config}></TabsControlled>
);

//=====================================================================================================
// VerticalSwitcher
//=====================================================================================================
export const VerticalSwitcher = () => (
  <SwitcherApp direction="column"></SwitcherApp>
);
