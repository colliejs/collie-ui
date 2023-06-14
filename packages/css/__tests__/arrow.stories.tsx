import React from "react";
import { Box, Row } from "../../layout/src";
import { flexCenter } from "../src";
import { pseudoArrow } from "../src/arrow";

export default {
  compoennt: () => <div>xx</div>,
  title: "css/arrow",
};
const boxStyle = {
  background: "pink",
  ...flexCenter,
  w: 100,
  h: 100,
  border: "px solid red",
};
export const PseudoArrow = () => {
  return (
    <Row css={{ gap: 30 }}>
      <Box
        css={{
          ...boxStyle,
          ...pseudoArrow("right", 40, 20, { border: "1px solid red" }),
        }}
      >
        right
      </Box>
      <Box
        css={{
          ...boxStyle,
          ...pseudoArrow("bottom", 30, 20, { border: "1px solid red" }),
        }}
      >
        bottom
      </Box>
      <Box
        css={{
          ...boxStyle,
          ...pseudoArrow("top", 30, 20, { border: "1px solid red" }),
        }}
      >
        top
      </Box>
      <Box
        css={{
          ...boxStyle,
          ...pseudoArrow("left", 30, 20, { border: "1px solid red" }),
        }}
      >
        left
      </Box>
    </Row>
  );
};
export const HoverShowTooltip = () => {
  return (
    <Box
      css={{
        ...boxStyle,
        "&:hover": {
          ...pseudoArrow("right", 40, 20, { border: "1px solid red" }),
        },
      }}
    >
      hover me
    </Box>
  );
};
