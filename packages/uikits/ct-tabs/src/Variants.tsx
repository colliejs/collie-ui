import { TabItemType, BaseTabs, TabProps } from "./BaseTabs";
import {
  BaseTabControlledProps,
  BaseTabControlled,
} from "./BaseTabControlled";
import { Id } from "@collie-ui/layout";

//===========================================================
// Sidebar
//===========================================================
export const SideBar = <T extends Id>(
  props: Omit<TabProps<T>, "direction">
) => <BaseTabs direction="row" {...props} />;

export const SideBarControlled = <T extends Id>(
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
export const TabsControlled = <T extends Id>(
  props: Omit<BaseTabControlledProps<T>, "direction">
) => <BaseTabControlled direction="column" {...props} />;
