import { mock } from "@c3/test";
import { Image } from "../Image";
import React from "react";
import { styled } from "@collie-ui/common";
const Row = styled("div", { display: "flex" });

export default {
  component: Image,
  title: "atomic/Image",
};

export const _Image = () => (
  <Row>
    <Image
      blur="1px"
      loadingNode={
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "lightgrey",
          }}
        >
          loading
        </div>
      }
      src={
        "https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
      }
      css={{
        w: 100,
        aspectRatio: "1",
      }}
    />
  </Row>
);

export const RoundImage = () => {
  return (
    <Image
      src={mock.getRandomPic()}
      round
      css={{ w: 200, h: 40, img: { border: "1px solid blue" } }}
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
