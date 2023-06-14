import { animate, AnimateParams } from "./core";

export const fades: Record<"in" | "out", typeof animate> = {
  in: (params: AnimateParams) => {
    return animate({ opacity: [0, 1], ...params });
  },
  out: (params: AnimateParams) => {
    return animate({ opacity: [1, 0], ...params });
  },
};
