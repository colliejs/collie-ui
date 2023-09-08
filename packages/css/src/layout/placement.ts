import { Placement } from "@c3/types";
import { absXCenter, absYCenter } from "./abs";
/**
 * NOTE: the parent element must be relative
 *
 * @param ele :the action element
 * @param placement
 * @returns
 */

export const getPopoverPos = (
  placement: Placement,
  parentBoxW: number | string = "100%",
  parentBoxH: number | string = "100%"
) => {
  switch (placement) {
    case "bottom":
      return absXCenter({ top: parentBoxH });
    case "top":
      return absXCenter({ bottom: parentBoxH });
    case "left":
      return absYCenter({ right: parentBoxW });
    case "right":
      return absYCenter({ left: parentBoxW });
    default:
      throw new Error(
        "TypeError:placement must be one of top, bottom, left, right"
      );
  }
};
