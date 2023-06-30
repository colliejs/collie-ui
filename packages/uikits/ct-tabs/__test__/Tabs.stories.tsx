import { Text } from "../../../atomic/src";
import React from "react";
import { useState } from "react";
import { MenuConfig, TabItemType, BaseTabs } from "../src/BaseTabs";
import "@collie-ui/atomic/css";

export default {
  component: BaseTabs,
  title: "uikits/Nav",
};

interface Item extends TabItemType<any> {
  title: string;
  to: string;
}

const config: MenuConfig<Item> = [
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
      css={{ "u-nav": { border: "1px solid red", gap: 10 } }}
      {...props}
    />
  );
};
//=====================================================================================================
// HorizontalSwitcher
//=====================================================================================================
export const HoriontalSwitcher = () => (
  <SwitcherApp direction="row"></SwitcherApp>
);

//=====================================================================================================
// VerticalSwitcher
//=====================================================================================================
export const VerticalSwitcher = () => (
  <SwitcherApp direction="column"></SwitcherApp>
);
