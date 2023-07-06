import {
  TabItemType,
  BaseTabs,
  TabProps,
  BaseTabControlled,
  BaseTabControlledProps,
} from "./BaseTabs";

//===========================================================
// Sidebar
//===========================================================
export const SideBar = <T extends TabItemType<T>>(
  props: Omit<TabProps<T>, "direction">
) => <BaseTabs direction="row" {...props} />;

export const SideBarControlled = <T extends TabItemType<T>>(
  props: Omit<BaseTabControlledProps<T>, "direction">
) => <BaseTabControlled direction="row" {...props} />;

//===========================================================
// Menus
//===========================================================
export const Menus = BaseTabs;
export const MenusControlled = BaseTabControlled;

//===========================================================
// Tabs
//===========================================================
export const Tabs = BaseTabs;
export const TabsControlled = <T extends TabItemType<T>>(
  props: Omit<BaseTabControlledProps<T>, "direction">
) => <BaseTabControlled direction="column" {...props} />;
