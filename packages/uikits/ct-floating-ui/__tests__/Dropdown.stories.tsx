import { mock } from "@c3/test";
import { absXYCenter } from "@collie-ui/css";
import { Row } from "../../../layout/src";
import { Button, Link } from "../../../atomic/src";
import { Dropdown } from "../src";
import React from "react";
export default {
  component: Dropdown,
  title: "uikits/ct-loating-ui/Dropdown",
};

const Btn: React.FC = () => {
  return <button>button</button>;
};
const defaultArgs = {
  floating: mock.getList(),
};
export const ClickDropdown = () => {
  return (
    <Row css={{ ...absXYCenter(), gap: 40 }}>
      <Dropdown {...defaultArgs}>
        <div>
          <Btn>Button</Btn>
          <Button>ButtonOK</Button>
        </div>
      </Dropdown>
    </Row>
  );
};
