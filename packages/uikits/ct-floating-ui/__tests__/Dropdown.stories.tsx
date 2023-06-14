import { mock } from "@c3/test";
import { absXYCenter } from "@border-collie-ui/css";
import { Row } from "../../../layout/src";
import { Button, Link } from "../../../atomic/src";
import { Dropdown } from "../src";
import React from "react";
export default {
  component: Dropdown,
  title: "uikits/ct-loating-ui/Dropdown",
};

const defaultArgs = {
  floating: mock.getList(),
};
export const ClickDropdown = () => {
  return (
    <Row css={{ ...absXYCenter(), gap: 40 }}>
      <Dropdown {...defaultArgs}>
        <Button>Button</Button>
      </Dropdown>
    </Row>
  );
};
