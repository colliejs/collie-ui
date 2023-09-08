import React from "react";
import { Box, Row, Stack } from "../../layout";

import { flexCenter } from "../src";
import { getPopoverPos } from "../src/layout";

export default { title: "css/placement" };
const boxStyle = {
  background: "pink",
  ...flexCenter,
  w: 100,
  h: 100,
  border: "1px solid red",
};
const innerBoxStyle = {
  background: "gray",
  ...flexCenter,
  w: 50,
  h: 50,
};
const stackBoxStyle = {
  overflow: "visible",
};
export const Placement = () => {
  return (
    <Row css={{ gap: 30 }}>
      <Stack css={stackBoxStyle} body={<Box></Box>}>
        <Box css={{ ...innerBoxStyle, ...getPopoverPos("bottom") }}>
          bottom
        </Box>
      </Stack>
      <Stack css={stackBoxStyle} body={<Box></Box>}>
        <Box
          css={{
            ...innerBoxStyle,
            ...getPopoverPos(
              "bottom",
              "calc(100% + 20px)",
              "calc(100% + 20px)"
            ),
          }}
        >
          calc(100% + 20px)
        </Box>
        <span>use calc property:calc(100% + 20px)</span>
      </Stack>
    </Row>
  );
};
