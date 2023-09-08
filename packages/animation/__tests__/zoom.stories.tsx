import React from "react";
import { zoom } from "../src";

export default {
  title: "Animation/zoom",
  component: () => {
    return <div></div>;
  },
};

export const Zoom = () => {
  return (
    <>
      <div
        className="popup"
        style={{ width: 200, height: 200, background: "gray" }}
      ></div>
      {Object.keys(zoom).map((e, idx) => (
        <button
          key={idx}
          onClick={() => {
            zoom[e]({ targets: ".popup" });
          }}
        >
          {e}
        </button>
      ))}
    </>
  );
};
