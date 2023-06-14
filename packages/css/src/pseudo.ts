import { CSSProperties, CSSPropertiesComplex } from "@border-collie-js/core";

export const pseudoElement = (
  pse: string,
  properties: CSSProperties = {}
): any => {
  //FIXME
  return {
    [`&::${pse}`]: {
      position: "absolute",
      content: `attr('data-${pse}')`,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      ...properties,
    },
    "&": {
      position: "relative",
      overflow: "hidden",
    },
  };
};
