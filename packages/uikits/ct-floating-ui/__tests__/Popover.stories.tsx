import { useState } from "react";
import { Popover } from "../src/Popover";

import { mock } from "@c3/test";
import { Row } from "../../../layout/src";
import React from "react";

export default {
  component: Popover,
  title: "uikits/ct-loating-ui/popover",
};

const Overlay = mock.getList();

export const PopoverX = () => {
  const [hoverVisible, setHoverVisible] = useState(false);
  const [clickVisible, setClickVisible] = useState(false);

  return (
    <Row css={{ gap: 50, mt: 200, fx: "center" }}>
      <Popover
        open={clickVisible}
        onOpenChange={setClickVisible}
        floating={Overlay}
        placement="bottom"
      >
        <button>click</button>
      </Popover>
      <Popover
        open={hoverVisible}
        onOpenChange={setHoverVisible}
        floating={Overlay}
        trigger={["hover"]}
      >
        <button>hover</button>
      </Popover>
    </Row>
  );
};
