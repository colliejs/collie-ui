import React from "react";
import { Abs } from "../src/Abs";
import { css } from "@colliejs/core";
export default { component: Abs, title: "layout/abs" };

export const Basic = () => {
  return (
    <div
      style={{
        border: "1px solid red",
        width: 400,
        height: 400,
        position: "relative",
      }}
    >
      <Abs
        className={css({ top: 100, left: 100, border: "1px solid green" })}
      >
        here...
      </Abs>
    </div>
  );
};
