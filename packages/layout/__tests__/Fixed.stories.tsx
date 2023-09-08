import { mock } from "@c3/test";
import { flexCenter } from "@collie-ui/css";
import React from "react";
import { Fixed } from "../src/Fixed";
export default {
  component: Fixed,
  title: "layout/Fixed",
};

export const Basic = () => {
  return (
    <div>
      something on the ground
      <Fixed
        dbg
        css={{
          w: "100vw",
          h: "100vh",
          top: 0,
          opacity: 0.8,
          background: "black",
          ...flexCenter,
        }}
      >
        <div>{mock.getRandElements()}</div>
      </Fixed>
    </div>
  );
};
