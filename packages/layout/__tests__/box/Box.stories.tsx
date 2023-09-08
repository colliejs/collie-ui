import React from "react";
import { Box } from "../../src/Box";
export default {
  component: <div></div>,
  title: "layout/box",
};

export const DBG = () => {
  return <Box dbg css={{ w: 100, h: 100 }} />;
};
