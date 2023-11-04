import { Col, List, ListItemType, Row, useList } from "@collie-ui/layout";
import { TabItemType } from "./BaseTabs";
export const useTabs = <T extends TabItemType>(data: T[]) => {
  return useList(data);
};
