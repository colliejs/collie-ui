import { useExclusive } from "@c3/react";
import { BaseListItemType } from "@collie-ui/layout";
import { useCallback, useMemo } from "react";

export type useStepOption<T extends BaseListItemType<T>> = {
  data: T[];
  updateData: (newData: T[], prev: T[]) => void;
};

export const useSteps = <T extends BaseListItemType<T>>(
  props: useStepOption<T>
) => {
  const { data, updateData } = props;
  const on = useExclusive<T>(data, "active", updateData);
  const activeIndex = useMemo(() => data.findIndex((e: T) => e.active), [data]);
  const nextIndex = activeIndex < data.length - 1 ? activeIndex + 1 : 0;
  const prevIndex = activeIndex > 0 ? activeIndex - 1 : data.length - 1;

  const goNext = useCallback(() => {
    on(data[nextIndex].id);
  }, [nextIndex, data, on]);

  const goPrev = useCallback(() => {
    on(data[prevIndex].id);
  }, [prevIndex, data, on]);

  const goTo = useCallback(
    (idx: number) => {
      on(data[idx].id);
    },
    [data, on]
  );

  return { goNext, goPrev, goTo, activeIndex, nextIndex, prevIndex } as const;
};
