import { assert } from "@c3/utils";
import { AnimeInstance, fades, zoom } from "@collie-ui/animation";

export const animate = async (visible: boolean, mask: HTMLElement): Promise<AnimeInstance[]> => {
  const key = visible ? "in" : "out";
  const body = mask.querySelector("co-body");
  assert(!!mask, "mask is required");
  assert(!!body, "body is required");
  return Promise.all([
    fades[key]({ targets: mask, easing: "linear" }),
    zoom[`center-${key}`]({
      targets: body,
      duration: visible ? 500 : 200,
      easing: visible ? "spring" : "easeOutQuad",
    }),
  ]);
};

export const setScrollable = (scrollable: boolean) => {
  if (scrollable) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
};
