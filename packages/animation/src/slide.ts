import { Placement } from "@c3/types";
import { anti, placements } from "@c3/utils";
import { animate, AnimateParams } from "./core";

const getScaleKey = (placement: Placement) => {
  switch (placement) {
    case "top":
    case "bottom":
      return "scaleY";
    case "left":
    case "right":
      return "scaleX";
    default:
      throw new Error("not existed");
  }
};

//TODO: zoom type optimization
export const slides: Record<string, typeof animate> = placements.reduce(
  (acc, cur: Placement) => {
    return {
      ...acc,
      [`${cur}-in`]: (params: AnimateParams) => {
        return animate({
          [getScaleKey(cur)]: [0.4, 1],
          opacity: [0, 1],
          begin: (e) => {
            e.animatables.forEach((e) => {
              e.target.style.transformOrigin = anti[cur];
              e.target.style.pointerEvents = "auto";
            });
          },

          complete: (instance) => {
            instance.animatables.forEach(
              (e) => (e.target.style.pointerEvents = "auto")
            );
          },
          ...params,
        });
      },
      [`${cur}-out`]: (params: AnimateParams) => {
        return animate({
          [getScaleKey(cur)]: [1, 0.5],
          opacity: [1, 0],
          begin: (instance) => {
            instance.animatables.forEach((e) => {
              e.target.style.transformOrigin = anti[cur];
              e.target.style.pointerEvents = "none";
            });
          },
          complete: (instance) => {
            instance.animatables.forEach(
              (e) => (e.target.style.pointerEvents = "none")
            );
          },
          ...params,
        });
      },
    };
  },
  {}
);
