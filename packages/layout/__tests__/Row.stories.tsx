import { mock } from "@c3/test";
import { Row } from "../src/Row";
import React from "react";

export default {
  title: "layout/Row",
  component: Row,
};
const Space = () => {
  return <div style={{ height: 40, width: 20 }}></div>;
};
export const FX = () => {
  return (
    <>
      <title>space-between</title>
      <Row dbg fx="space-between">
        {mock.getRandElements()}
      </Row>
      <Row dbg fx="center">
        {mock.getRandElements()}
      </Row>
    </>
  );
};
export const FY = () => {
  return (
    <>
      <Row dbg fy="center" css={{ height: "80px" }}>
        {mock.getRandElements()}
      </Row>
      <Space />

      <Row dbg fy="flex-start" css={{ height: "80px" }}>
        {mock.getRandElements()}
      </Row>
      <Space />
      <Row dbg fy="flex-end" css={{ height: "80px" }}>
        {mock.getRandElements()}
      </Row>
    </>
  );
};
export const Gap = () => {
  return (
    <>
      <Row dbg gap={10}>
        {mock.getRandElements()}
      </Row>

      <Row dbg gap={20}>
        {mock.getRandElements()}
      </Row>
    </>
  );
};

export const OnClick = () => {
  return (
    <>
      <Row dbg onClick={() => alert("onClick")}>
        {mock.getRandElements()}
      </Row>
    </>
  );
};
