import { Placement } from "@floating-ui/react-dom-interactions";
import { Row } from "../../../layout/src";
import React from "react";
import { BaseFloating } from "../src/BaseFloating";
export default {
  component: <div></div>,
  title: "uikits/ct-loating-ui/float",
};

const placments = ["top", "bottom", "left", "right"] as Placement[];

export const Basic = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Row css={{ gap: 100, mt: 100, ml: 100 }}>
      {placments.map((e, idx) => (
        <BaseFloating
          key={idx}
          open={visible}
          onOpenChange={setVisible}
          floating={<div>tooltip abc defghk aaa</div>}
          placement={e}
        >
          <button>{e}</button>
        </BaseFloating>
      ))}
    </Row>
  );
};

export const TriggerX = () => {
  const [hoverVisible, setHoverVisible] = React.useState(false);
  const [clickVisible, setClickVisible] = React.useState(false);

  return (
    <Row css={{ gap: 100, mt: 100, ml: 100 }}>
      <BaseFloating
        open={hoverVisible}
        onOpenChange={setHoverVisible}
        floating={<div>tooltip</div>}
        trigger={"hover"}
      >
        <button>hover</button>
      </BaseFloating>
      <BaseFloating
        open={clickVisible}
        onOpenChange={setClickVisible}
        floating={<div>tooltip</div>}
        trigger={"click"}
      >
        <button>click</button>
      </BaseFloating>
    </Row>
  );
};
