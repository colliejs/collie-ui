import { BaseTabs, TabItemType, TabProps } from "./BaseTabs";

//===========================================================
// SideBar
//===========================================================

export const SideBar = <T extends TabItemType, R extends "row" | "column">(
  props: Omit<TabProps<T, R>, "direction">
) => <BaseTabs direction="row" {...props} />;

//===========================================================
// Menus
//===========================================================
export const Menus = <T extends TabItemType, R extends "row" | "column">(
  props: Omit<TabProps<T, R>, "direction">
) => <BaseTabs direction="column" {...props} />;

//===========================================================
// Tabs
//===========================================================
export const Tabs = BaseTabs;
