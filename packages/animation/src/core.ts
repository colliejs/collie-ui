import { dbg } from "@c3/dbg";
import { waitFor } from "@c3/utils";
import { default as anime, default as _anime } from "animejs";
//@ts-ignore
window.__anime = _anime;
export type AnimateParams = anime.AnimeParams;
export type AnimeInstance = anime.AnimeInstance;

export const animate = async (animeParams: AnimateParams) => {
  const ins = _anime({
    update: ins => {
      dbg(
        "progress",
        ins.progress,
        ins.animations.map(
          a => `target:${a.animatable.target.tagName}, ${a.property}:${a.currentValue}`
        )
      );
    },
    ...animeParams,
  });
  await ins.finished;
  return ins;
};

export const useAnime = () => animate;
