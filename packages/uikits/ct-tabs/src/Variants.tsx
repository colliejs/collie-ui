import { TabItemType, BaseTabs, TabProps } from "./BaseTabs";

export const SideBar = <T extends TabItemType<T>>(
  props: Omit<TabProps<T>, "direction">
) => <BaseTabs direction="row" {...props} />;

export const Menus = BaseTabs;
export const Tabs = BaseTabs;
