// import React from "react";
// import { useState } from "react";
// import {
//   TabItemType,
//   TabConfig,
//   BaseTabs,
//   TabsControlled,
//   SideBar,
// } from "../src";
import { Text } from "@collie-ui/atomic";
import "./index.css";
import React from "react";
export default { title: "uikits/c-tabs" };
export const Hello = () => <Text bold >Hello</Text>;

// interface Item extends TabItemType<any> {
//   title: string;
//   to: string;
// }

// const data: TabConfig<Item> = [
//   {
//     id: "1",
//     title: "name1",
//     to: "/account#profile",
//     active: true,
//     renderContent: () => <p>content1</p>,
//   },
//   {
//     id: "2",
//     title: "name2",
//     to: "/account#222",
//     active: false,
//     renderContent: () => <p>content2</p>,
//   },
//   {
//     id: "3",
//     title: "name3",
//     to: "/account#222",
//     active: false,
//     renderContent: () => <p>content3</p>,
//   },
//   {
//     id: "4",
//     title: "name4",
//     to: "/account#2222",
//     active: false,
//     renderContent: () => <p>content4</p>,
//   },
// ];

// // //=====================================================================================================
// // // HorizontalSwitcher
// // //=====================================================================================================
// export const TabsControlledTest = () => (
//   <TabsControlled initialData={data}></TabsControlled>
// );

// //=====================================================================================================
// // SideBarControlledDemo
// //=====================================================================================================
// export const SideBarControlledDemo = () => (
//   <TabsControlled
//     initialData={data}
//     renderItem={() => {
//       return <Text>123</Text>;
//     }}
//   ></TabsControlled>
// );
