// export type Alignment = "start" | "end";
// export type Side =
//   | "top"
//   | "right"
//   | "bottom"
//   | "left"
//   | "left-start" //TODO:DELETE,use AlignedPlacement
//   | "left-end" //TODO:DELETE,use AlignedPlacement
//   | "right-start" //TODO:DELETE,use AlignedPlacement
//   | "right-end";//TODO:DELETE,use AlignedPlacement
// export type AlignedPlacement = `${Side}-${Alignment}`;
// export type Placement = Side | AlignedPlacement | "center";
import { Placement } from "./types";
export type Direction = "left" | "right" | "top" | "bottom";
export type HVDirection = "horizontal" | "vertical";

export const getAntiDirection = (direction: Direction): Direction => {
  switch (direction) {
    case "bottom":
      return "top";
    case "top":
      return "bottom";
    case "left":
      return "right";
    case "right":
      return "left";
    default:
      throw new Error("not existed");
  }
};

export const placements: Placement[] = [
  "top",
  "top-start",
  "top-end",
  "right",
  "right-start",
  "right-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end",
  "center",
];
export const anti: Record<Placement, Placement> = {
  center: "center",
  bottom: "top",
  top: "bottom",
  left: "right",
  right: "left",
  "bottom-start": "top-end",
  "bottom-end": "top-start",
  "top-start": "bottom-end",
  "top-end": "bottom-start",
  "left-start": "right-end",
  "left-end": "right-start",
  "right-start": "left-end",
  "right-end": "left-start",

  // "left-start-start": "right-end-end",
  // "left-start-end": "right-end-start",
  // "left-end-start": "right-start-end",
  // "left-end-end": "right-start-start",
  // "right-start-end": "left-end-start",
  // "right-start-start": "left-end-end",
  // "right-end-end": "left-start-start",
  // "right-end-start": "left-start-end",
};
