import React from "react";
import { slides } from "../src";

export default {
  title: "Animation/slide",
  component: () => {
    return <div></div>;
  },
};

export const Slide = () => {
  return (
    <>
      <div
        className="popup"
        style={{ width: 200, height: 200, background: "gray" }}
      ></div>
      {Object.keys(slides).map((e, idx) => (
        <button
          key={idx}
          onClick={() => {
            slides[e]({ targets: ".popup" });
          }}
        >
          {e}
        </button>
      ))}
    </>
  );
};
