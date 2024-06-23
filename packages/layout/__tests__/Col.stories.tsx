import React from "react";
import { Col } from "../src/Col";
import { mock, showtip } from "@c3/test";
import { css } from "@colliejs/core";
export default { title: "layout/Col" };
const baseStyle1 = {
  border: "1px solid lightgrey",
  ...showtip({ whiteSpace: "nowrap" }, "top"),
};

const MyCol = props => {
  const { ...restprops } = props;
  return (
    <Col
      {...restprops}
      dbg
      className={css({ ...baseStyle1 })}
      data-tip={props.fy}
    >
      {mock.getRandElements({ wMax: 2 })}
    </Col>
  );
};

//===========================================================
// test Atomic
//===========================================================
export const Basic = () => {
  return <Col dbg round css={{ w: 300, h: 300 }}></Col>;
};

//========================================================
//Gap
//=========================================================
export const Gap = () => {
  return (
    <div style={{ display: "flex" }}>
      <MyCol dbg gap={14}></MyCol>
      <Col dbg css={{ gap: 20 }}>
        {" "}
        {mock.getRandElements({ wMax: 2 })}
      </Col>
    </div>
  );
};

//==========================================================
// FX
//==========================================================
export const FX = () => {
  return (
    <>
      <Col fx={"stretch"}>{mock.getRandElements()}</Col>
      <Col fx={"center"}>{mock.getRandElements()}</Col>
      <Col fx={"flex-start"}>{mock.getRandElements()}</Col>
      <Col fx={"flex-end"}>{mock.getRandElements()}</Col>
    </>
  );
};

//=====================================================================================================
// FY
//=====================================================================================================

export const FY = () => {
  return (
    <div style={{ display: "flex", height: "40vh" }}>
      <MyCol fy="space-between"></MyCol>
      <MyCol fy="stretch"></MyCol>
      <MyCol fy="center"></MyCol>
      <MyCol fy="flex-start"></MyCol>
      <MyCol fy="flex-end"></MyCol>
    </div>
  );
};
