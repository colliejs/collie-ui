import { AnimeInstance } from "@collie-ui/animation";
import { waitFor, assert } from "@c3/utils";
import React, { useCallback, useRef } from "react";
import { animate, setScrollable } from "./utils";
import { default as anime } from "animejs";

export type AnimationStatus = "showing" | "hidding" | "initial" | "visible" | "hidden";

type useModalOption = {
  useAnimation: boolean;
};
export const useModal = (option: useModalOption) => {
  const [visible, setVisible] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [animationStatus, setAnimationStatus] = React.useState<AnimationStatus>("initial");

  const show = useCallback(async () => {
    setVisible(true);
    if (option.useAnimation) {
      await waitFor(() => !!ref.current);
      setAnimationStatus("showing");
      assert(!!ref.current, "ref.current is required");
      anime.remove([ref.current, ref.current.querySelector("co-body")]);
      await animate(true, ref.current);
      setAnimationStatus(x => (x === "showing" ? "visible" : x));
    }
    setScrollable(false);
  }, [option.useAnimation]);

  const hide = useCallback(async () => {
    if (option.useAnimation) {
      setAnimationStatus("hidding");
      assert(!!ref.current, "ref.current is required");
      anime.remove([ref.current, ref.current.querySelector("co-body")]);
      await animate(false, ref.current);
      setAnimationStatus(x => (x === "hidding" ? "hidden" : x));
    }
    setScrollable(true);
    setVisible(false);
  }, [option.useAnimation]);
  return { show, hide, visible, animationStatus, ref } as const;
};
