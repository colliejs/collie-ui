import { waitFor, assert } from "@c3/utils";
import React, { useCallback, useRef } from "react";
import { animate as _animate, setBodyScrollable } from "./utils";
import { default as anime } from "animejs";
import { on } from "events";

// export type AnimationStatus = "showing" | "hidding" | "initial" | "visible" | "hidden";


export type useModalOption = {
  useAnimation?: boolean;
  animate?: typeof _animate;
  onBeforeShow?: () => Promise<void>;
  onBeforeHide?: () => Promise<void>;
  onAfterShow?: () => Promise<void>;
  onAfterHide?: () => Promise<void>;
};
export const useModal = (option: useModalOption) => {
  const {
    useAnimation = true,
    animate = _animate,
    onAfterHide,
    onAfterShow,
    onBeforeHide,
    onBeforeShow,
  } = option;
  const [visible, setVisible] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // const [animationStatus, setAnimationStatus] = React.useState<AnimationStatus>("initial");

  const show = useCallback(async () => {
    let animateInstance;
    await onBeforeShow?.();
    setVisible(true);
    if (useAnimation) {
      await waitFor(() => !!ref.current);
      // setAnimationStatus(x => (x === "hidden" ? "showing" : x));
      assert(!!ref.current, "ref.current is required");
      anime.remove([ref.current, ref.current.querySelector("co-body")]);
      animateInstance = await animate(true, ref.current);
    }
    setBodyScrollable(false);
    await onAfterShow?.();
    return animateInstance;
  }, [animate, onAfterShow, onBeforeShow, useAnimation]);

  const hide = useCallback(async () => {
    let animateInstance;

    await onBeforeHide?.();
    if (useAnimation) {
      assert(!!ref.current, "ref.current is required");
      anime.remove([ref.current, ref.current.querySelector("co-body")]);
      animateInstance = await animate(false, ref.current);
    }
    setBodyScrollable(true);
    setVisible(false);
    await onAfterHide?.();
    return animateInstance;
  }, [animate, onAfterHide, onBeforeHide, useAnimation]);
  return { show, hide, visible, ref } as const;
};
