import { styled } from "@stitches/react";
import React from "react";
import { spin } from "../src/spin";

export default {
  title: "Animation/others",
  component: () => {
    return <div></div>;
  },
};

const Box = styled("div", {});
const Row = styled("div", { display: "flex" });
export const Spin = () => (
  <Box
    css={{
      w: 100,
      h: 100,
      border: "1px solid red",
      animation: `${spin} 2000ms infinite`,
      borderBottom: "1px solid red",
    }}
  ></Box>
);

export const LoadingSpin = () => {
  return (
    <Row css={{ gap: 10 }}>
      <div
        style={{
          border: "3px solid hsla(185, 100%, 62%, 0.2)",
          borderTopColor: "#3cefff",
          // borderRadius: '50%',
          width: "3em",
          height: "3em",
          // animation: 'spin 1s linear infinite',
        }}
      ></div>
      <div
        style={{
          border: "3px solid hsla(185, 100%, 62%, 0.2)",
          borderTopColor: "#3cefff",
          borderRadius: "50%",
          width: "3em",
          height: "3em",
          // animation: 'spin 1s linear infinite',
        }}
      ></div>
      <div
        style={{
          border: "3px solid hsla(185, 100%, 62%, 0.2)",
          borderTopColor: "#3cefff",
          borderRadius: "50%",
          width: "3em",
          height: "3em",
          animation: `${spin} 1s linear infinite`,
        }}
      ></div>
    </Row>
  );
};
