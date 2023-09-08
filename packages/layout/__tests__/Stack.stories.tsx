import { mock } from "@c3/test";
import { absXYCenter } from "@collie-ui/css";
import { Box } from "../src/Box";
import { Text } from "../../atomic/src/Text";
import { Image } from "../../atomic/src/Image";
import { Stack, StackProps } from "../src/Stack";
import React from "react";

export default {
  component: Stack,
  title: "layout/Stack",
};

//=====================================================================================================
// Stack
//=====================================================================================================
export const StackWithBody = () => {
  return (
    <Stack
      css={{ "*": { p: 0, m: 0 } }}
      dbg
      body={<Image src={mock.getRandomPic(400, 300)} css={{ opacity: 0.2 }} />}
    >
      <Text css={{ ...absXYCenter() }}>absXYCenter</Text>
      <Text css={{ color: "$blue500" }}>(no-specified-left-top)</Text>
      <Text css={{ left: 100, top: 100 }}>hello</Text>
      <Text css={{ left: 100, top: 250, h: 300, bg: "red" }}>overflow</Text>
    </Stack>
  );
};

//=====================================================================================================
// center should overlay the body
//=====================================================================================================

const baseStyle = {
  w: 160 * 2,
  h: 90 * 2,
  background: mock.getRandomColor(),
  ...absXYCenter(),
};
export const StackOverlay = () => {
  return (
    <Stack
      css={{ "*": { p: 0, m: 0 } }}
      dbg
      body={
        <Image
          src={mock.getRandomPic(400, 300)}
          css={{ opacity: 0.2, width: 400 }}
        />
      }
    >
      <Box style={{ ...baseStyle }}>hello</Box>
      <Box
        style={{ ...baseStyle, scale: 0.8, background: mock.getRandomColor() }}
      >
        hello
      </Box>
      <Box style={{ ...baseStyle, scale: 0.4 }}>hello</Box>
    </Stack>
  );
};
