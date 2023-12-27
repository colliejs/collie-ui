import { CSSObject, CSSProperties } from "@colliejs/core";

export const toggleDisplay = (show: boolean): CSSObject<object> => ({
  display: show ? "flex" : "none",
});

export const hidden: CSSObject<object> = {
  display: "none",
};

export const toggleVisibility = (visibility: boolean): CSSObject<object> => ({
  visibility: visibility ? "visible" : "hidden",
});
