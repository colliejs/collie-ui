import { assert } from "@c3/utils";
import { AnimeInstance, fades, zoom } from "@border-collie-ui/animation";

export const animate = async (
  visible: boolean,
  mask: HTMLElement
): Promise<AnimeInstance[]> => {
  assert(!!mask, "mask is required");
  console.log("animation...");
  const key: "in" | "out" = visible ? "in" : "out";
  return Promise.all([
    fades[key]({ targets: mask }),
    zoom[`center-${key}`]({
      targets: mask.querySelector("u-modal") as HTMLElement,
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
