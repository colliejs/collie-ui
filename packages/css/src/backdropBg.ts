import { bgImg } from "./bg";
export const backDropBg = (bgUrl: string, filter = "blur(5px)") => ({
  _before: {
    w: "100%",
    h: "100%",
    ...bgImg(bgUrl),
    zIndex: -2,
  },
  _after: {
    w: "100%",
    h: "100%",
    backDropFilter: filter,
    zIndex: -1,
  },
});
