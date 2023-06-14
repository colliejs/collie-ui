import { mock } from "@c3/test";
import { Image } from "../Image";
import React from "react";
import { Row } from "../../../../layout/src/Row";

export default {
  component: Image,
  title: "atomic/Image",
};

export const _Image = () => (
  <Row>
    <Image
      src={mock.getRandomPic()}
      css={{
        w: 100,
        aspectRatio: "1",
      }}
    ></Image>
    <Image
      src={mock.getRandomPic()}
      css={{
        w: 100,
        aspectRatio: "1",
      }}
    />
  </Row>
);

export const RoundButton = () => {
  return (
    <Image
      src={mock.getRandomPic()}
      shape="round"
      css={{ w: 200, h: 40, border: "1px solid blue" }}
    />
  );
};

//global CSS should set role="button" show cursor: pointer
export const RoleAsButton = () => {
  return (
    <Image
      src={mock.getRandomPic()}
      css={{ w: 200, h: 40, border: "1px solid blue" }}
      role="button"
    />
  );
};
