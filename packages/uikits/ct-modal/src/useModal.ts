import { waitFor, assert } from "@c3/utils";
import React, { useCallback, useRef } from "react";
import { animate, setScrollable } from "./utils";
import { default as anime } from "animejs";

type useModalOption = {
  useAnimation: boolean;
};
export const useModal = (option: useModalOption = { useAnimation: true }) => {
  const [visible, setVisible] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const show = useCallback(async () => {
    setVisible(true);
    if (option.useAnimation) {
      await waitFor(() => !!ref.current);
      assert(!!ref.current, "ref.current is required");
      anime.remove([ref.current, ref.current.querySelector("co-body")]);
      await animate(true, ref.current);
    }
    setScrollable(false);
  }, [option.useAnimation]);

  const hide = useCallback(async () => {
    if (option.useAnimation) {
      assert(!!ref.current, "ref.current is required");
      anime.remove([ref.current, ref.current.querySelector("co-body")]);
      await animate(false, ref.current);
    }
    setScrollable(true);
    setVisible(false);
  }, [option.useAnimation]);
  return { show, hide, visible, ref } as const;
};
