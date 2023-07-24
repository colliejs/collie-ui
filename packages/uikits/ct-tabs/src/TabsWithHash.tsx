import { useEventListener, useExclusive, useMount } from "@c3/react";
import React from "react";
import { useCallback } from "react";
import { TabItemType, BaseTabs, TabProps } from "./BaseTabs";
import { Id } from "@collie-ui/layout";

type TabsWithHashProps<T extends Id> = TabProps<T>;
export const TabsWithHash = <T extends Id>(
  props: TabsWithHashProps<T>
) => {
  const { data: menuConfig, updateData: updateConfig } = props;
  const on = useExclusive(menuConfig, "active", updateConfig);
  const switchToHash = useCallback(() => {
    const hash = window.location.hash;
    if (hash) {
      on(hash.slice(1));
    }
  }, [on]);

  useEventListener(window, "hashchange", switchToHash);
  useMount(switchToHash);

  return <BaseTabs {...props} />;
};
