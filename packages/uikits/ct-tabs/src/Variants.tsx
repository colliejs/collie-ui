import {
  TabItemType,
  BaseTab,
  TabProps,
  BaseTabControlled,
  BaseTabControlledProps,
} from "./BaseTab";

//===========================================================
// Sidebar
//===========================================================
export const SideBar = <T extends TabItemType<T>>(
  props: Omit<TabProps<T>, "direction">
) => <BaseTab direction="row" {...props} />;

export const SideBarControlled = <T extends TabItemType<T>>(
  props: Omit<BaseTabControlledProps<T>, "direction">
) => <BaseTabControlled direction="row" {...props} />;

//===========================================================
// Menus
//===========================================================
export const Menus = BaseTab;
export const MenusControlled = BaseTabControlled;

//===========================================================
// Tabs
//===========================================================
export const Tabs = BaseTab;
export const TabsControlled = BaseTabControlled;
