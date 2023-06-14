import { Text } from "../../../atomic/src";
import { absXYCenter, flexCenter, pseudoArrow } from "@border-collie-ui/css";
import { Col, Row } from "../../../layout/src";
import { useState } from "react";
import { FloatingText, TextWithTooltip, Tooltip } from "../src";
import React from "react";

export default {
  component: Tooltip,
  title: "uikits/ct-loating-ui/tooltip",
};

export const TextWithTooltipDemo = () => {
  return (
    <Col css={{ gap: 40 }}>
      <TextWithTooltip dbg css={{ w: 100 }}>
        hello,worldhello,worldhello,world
      </TextWithTooltip>
      <TextWithTooltip dbg css={{ w: 500 }}>
        hello,worldhello,worldhello,world
      </TextWithTooltip>
    </Col>
  );
};

export const EllipseText = () => {
  const text = "hello,world,12345";
  return (
    <Row css={{ gap: 100, ...absXYCenter() }}>
      <Tooltip placement="top" floating={<FloatingText>{text}</FloatingText>}>
        <Text css={{ display: "inline-block", fontSize: 40 }}>{text}</Text>
      </Tooltip>

      <Tooltip
        placement="bottom"
        floating={<FloatingText>{text}</FloatingText>}
      >
        <Text
          css={{
            display: "inline-block",
            fontSize: 40,
          }}
        >
          {text}
        </Text>
      </Tooltip>
    </Row>
  );
};
