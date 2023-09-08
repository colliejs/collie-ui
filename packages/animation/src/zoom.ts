import { Placement } from "@c3/types";
import { anti, placements } from "@c3/utils";
import { animate, AnimateParams } from "./core";

//TODO: zoom type optimization
export const zoom: Record<string, typeof animate> = placements.reduce((acc, cur: Placement) => {
  return {
    ...acc,
    [`${cur}-in`]: (params: AnimateParams) => {
      return animate({
        scale: [0.5, 1],
        opacity: [0, 1],
        begin: e => {
          e.animatables.forEach(e => {
            e.target.style.transformOrigin = anti[cur];
            // e.target.style.pointerEvents = "none";
          });
        },
        complete: e => {
          e.animatables.forEach(e => {
            // e.target.style.pointerEvents = "auto";
          });
        },
        ...params,
      });
    },
    [`${cur}-out`]: (params: AnimateParams) => {
      return animate({
        scale: [1, 0],
        opacity: [1, 0],
        begin: e => {
          e.animatables.forEach(e => (e.target.style.transformOrigin = anti[cur]));
        },
        ...params,
      });
    },
  };
}, {});

//@ts-ignore
window.__zoom = zoom;
