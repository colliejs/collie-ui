import React from "react";
import { Atomic } from "../src/Atomic";
export default {
  title: "atomic/Atomic",
};

export const Variants = () => {
  return (
    <div style={{ display: "flex" }}>
      <Atomic round css={{ border: "1px solid red", width: 100, height: 50 }} />
      <Atomic shape="rect" css={{ border: "1px solid red", w: 100, h: 20 }} />
    </div>
  );
};
export const Circle = () => {
  return <Atomic circle="100px" dbg />;
};
export const Square = () => {
  return <Atomic square="100px" dbg />;
};
export const Disabled = () => {
  return <Atomic disabled circle="100px" dbg />;
};

export const ActiveProp = () => {
  return (
    <Atomic
      css={{ border: "1px solid red", w: 100, h: 50 }}
      active={true}
      hidden
    />
  );
};
