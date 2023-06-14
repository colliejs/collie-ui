import { mock } from "@c3/test";
import React from "react";
import { UImage } from "../../Image/UImage";

export default {
  component: UImage,
  title: "atomic/UImage",
};
const style = {
  w: 200,
  h: 40,
  border: "1px solid blue",
};

export const Loading = () => {
  return (
    <UImage
      src={
        "https://ipfs.io/ipfs/QmUbFC1tdNKzdbkb9pDhFhCEmDMquVs9A8nBwzRFDPgo2B"
      }
      shape="round"
      loading={<span>loading</span>}
      css={{ ...style }}
    />
  );
};

//global CSS should set role="button" show cursor: pointer
export const Error = () => {
  return (
    <div>
      <UImage
        shape="round"
        src={"http://bullmind.com"}
        fallback={<div style={{ textAlign: "center" }}>error</div>}
        css={{
          ...style,
        }}
      />
    </div>
  );
};
