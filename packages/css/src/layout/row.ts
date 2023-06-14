import { CSSProperties } from "@border-collie-js/core";

export const row = (
  fx: CSSProperties["justifyContent"] = "flex-start",
  fy: CSSProperties["alignItems"] = "center"
): CSSProperties => ({
  display: "flex",
  alignItems: fy,
  justifyContent: fx,
  flexWrap: "nowrap",
});
