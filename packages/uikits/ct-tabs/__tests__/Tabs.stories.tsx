import React from "react";
import { TabItemType, TabDataType, Tabs, useTabs } from "../dist";
import { Text } from "@collie-ui/atomic";
import "./index.css";
import "../dist/index.css";

export default { title: "uikits/c-tabs" };

interface Item extends TabItemType {
  title: string;
  to: string;
}

const initialData: TabDataType<Item> = [
  {
    id: "1",
    title: "name1",
    to: "/account#profile",
    active: true,
  },
  {
    id: "2",
    title: "name2",
    to: "/account#222",
    active: false,
  },
  {
    id: "3",
    title: "name3",
    to: "/account#222",
    active: false,
    renderContent: () => <p>content3</p>,
  },
  {
    id: "4",
    title: "name4",
    to: "/account#2222",
    active: false,
    renderContent: () => <p>content4</p>,
  },
];

// //=====================================================================================================
// // HorizontalSwitcher
// //=====================================================================================================
export const TabsTest = () => {
  const [data, onClick] = useTabs(initialData);
  return (
    <Tabs
      data={data}
      renderItem={e => {
        return <Text onClick={() => onClick(e)}>{e.title}</Text>;
      }}
      renderContent={e => {
        return (
          <div>
            content-${e.title}
            <input placeholder="input something"></input>
          </div>
        );
      }}
    ></Tabs>
  );
};
