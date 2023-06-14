// import { mock } from '@c3/test';
import { rand } from "@c3/utils";
// import { Image } from "../../atomic/src/Image";
import { Image } from "@border-collie-ui/atomic";
import _ from "lodash";
import React from "react";
import { GridControlled } from "../src/Grid";

export default {
  title: "layout/Grid",
};
const mockx = {
  getRandomPic: (width = 160 * 6, height = 90 * 6) => {
    return `https://picsum.photos/id/${rand(10, 100)}/${width}/${height}.jpg`;
  },
};

//=====================================================================================================
// NGrid
// 指定列数，自动计算轨道的宽度（和内容一样宽）
//=====================================================================================================
type Item = {
  id: number;
  img: string;
  active: boolean;
};

const data: Item[] = _.times(5, (e) => ({
  id: e,
  img: mockx.getRandomPic(),
  active: false,
}));

export const GridX3 = () => {
  return (
    <GridControlled
      css={{
        gridTemplateColumns: "repeat(3, auto)",
        placeContent: "center",
        gap: 40,
      }}
      initialData={data}
      renderItem={(e: Item) => (
        <Image css={{ w: 160, h: 90 }} round src={e.img}></Image>
      )}
    ></GridControlled>
  );
};

export const GridX1 = () => {
  const data = _.times(5, (e) => ({
    id: e,
    active: false,
    img: mockx.getRandomPic(),
  }));
  return (
    <GridControlled
      dbg
      css={{
        gridTemplateColumns: "repeat(auto-fill, minmax(auto,auto))",
        placeContent: "center",
        gap: 40,
      }}
      initialData={data}
      renderItem={(e: Item) => (
        <Image css={{ w: 160, h: 90 }} src={e.img}></Image>
      )}
    ></GridControlled>
  );
};

export const Grid2 = () => {
  const data = _.times(5, (e) => ({
    id: e,
    img: mockx.getRandomPic(),
    active: false,
  }));
  return (
    <GridControlled
      dbg
      cols={3}
      css={{
        gap: 40,
      }}
      initialData={data}
      renderItem={(e: Item) => (
        <Image css={{ w: "100", h: 90 }} fill src={e.img}></Image>
      )}
    ></GridControlled>
  );
};
