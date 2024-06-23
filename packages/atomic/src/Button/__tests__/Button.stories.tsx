import { wait } from "@collie-ui/common";
import { Text } from "../../../src/Text";
import { Button } from "../Button";
import { useLoadingButton } from "../useButton";
import React from "react";
export default {
  title: "atomic/Button",
};
const defaultStyle = {
  w: 100,
  h: 50,
  border: "1px solid green",
};

export const NormalButton = () => <Button>normal button</Button>;

export const BigButton = () => {
  return (
    <div>
      <Button css={defaultStyle}>BigButton-1</Button>
    </div>
  );
};
export const RoundButton = () => {
  return (
    <div>
      <Button
        shape="round"
        css={{ w: 100, h: 50, border: "1px solid red" }}
      >
        BigButton-1
      </Button>
    </div>
  );
};

export const OnHoverButton = () => (
  <Button
    css={defaultStyle}
    onMouseEnter={() => {
      alert("click");
    }}
  >
    hello
  </Button>
);
export const ButtonAsLink = () => (
  <Button as="a" href="http://www.baidu.com" css={defaultStyle}>
    baidu.com
  </Button>
);
export const TestUseButton = () => {
  return useLoadingButton(
    <Button
      css={{
        w: 100,
        h: 40,
        children: "click2loading",
      }}
    >
      <Text>clickme12</Text>
    </Button>,
    {
      useLoading: true,
    },
  );
};

export const LoadingButton = () => {
  return useLoadingButton(
    <Button
      onClick={async () => {
        console.log("222");
        await wait(10000);
      }}
      css={{
        w: 100,
        h: 40,
        children: "click2loading",
        cursor: "copy",
      }}
    >
      <Text>clickme12</Text>
    </Button>,
    {
      useLoading: true,
    },
  );
};
