import { BaseTabs, TabItemType, TabProps } from "./BaseTabs";
//===========================================================
export const SideBar = <T extends TabItemType>(
  props: Omit<TabProps<T>, "direction">
) => <BaseTabs direction="row" {...props} />;


//===========================================================
// Menus
//===========================================================
export const Menus  = <T extends TabItemType>(
  props: Omit<TabProps<T>, "direction">
) => <BaseTabs direction="column" {...props} />;

//===========================================================
// Tabs
//===========================================================
export const Tabs = Menus;
