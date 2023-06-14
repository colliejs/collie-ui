import { mock } from "@c3/test";
import { Image, Text } from "../../../atomic/src";
import { useState } from "react";
import { BaseListItemType, List, RenderItem } from "../../src/List";
import { Row } from "../../src/Row";
import React from "react";

export default { title: "layout/List" };

type Item = {
  name: string;
  id: number;
  active: boolean;
  renderItem?: RenderItem<Item>;
};

const idata: Item[] = [
  {
    id: 1,
    name: "FindingNothing222",
    active: true,
    renderItem: (e) => {
      return <div>hello---1{e.name}</div>;
    },
  },
  {
    id: 2,
    name: "22112",
    active: false,
  },
  {
    id: 3,
    name: "3333",
    active: false,
  },
];

const ItemX: React.FC<Item> = (t: Item) => {
  const { active, ...restProps } = t;
  return (
    <Row active={active} {...restProps}>
      <Image css={{ w: 48, h: 48 }} src={mock.getRandomPic(32, 32)} />
      <Text>{t.name}</Text>
    </Row>
  );
};

export const Default = () => {
  const [data, setData] = useState(idata);
  return (
    <List<Item>
      data={data}
      renderItem={(e) => <ItemX {...e}></ItemX>}
      updateData={setData}
    />
  );
};
//=====================================================================================================
//List in Col
//=====================================================================================================
export const ListInCol = () => {
  const [data, setData] = useState(idata);
  return (
    <List
      data={data}
      renderItem={(e) => <ItemX {...e} />}
      updateData={setData}
    />
  );
};

//=====================================================================================================
//List in Row
//=====================================================================================================
export const ListInRow = () => {
  const [data, setData] = useState(idata);
  return (
    <List
      data={data}
      direction="row"
      renderItem={(e: Item) => <ItemX {...e} />}
      updateData={setData}
    />
  );
};

//=====================================================================================================
//
//=====================================================================================================
const colors = [
  mock.getRandomColor(),
  mock.getRandomColor(),
  mock.getRandomColor(),
];
export const CannotOverflow = () => {
  const [data, setData] = useState(idata);
  return (
    <List
      data={data}
      dbg
      css={{ w: 400, overflow: "hidden" }}
      direction="row"
      renderItem={(e: Item, i: number) => (
        <Row style={{ width: 300, height: 200, background: colors[i] }}></Row>
      )}
      updateData={setData}
    />
  );
};
export const OverflowIsWorkForNormalLayout = () => {
  return (
    <div style={{ width: 400, overflow: "hidden", display: "flex" }}>
      <div style={{ minWidth: 300, height: 200, background: colors[0] }}></div>
      <div style={{ minWidth: 300, height: 200, background: colors[1] }}></div>
      <div style={{ minWidth: 300, height: 200, background: colors[2] }}></div>
    </div>
  );
};
