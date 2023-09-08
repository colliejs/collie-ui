import React, { useState } from "react";
import { BaseListItemType, List, ListPropsWithoutRef } from "../../src";

//FIXME:如果props没有传递下去，就会导致List组件添加的属性丢失
//调用方认为没有毛病，但是实际上每个组件都必须传递props下去，否则就会导致属性丢失

export type Item = {
  id: number;
  active: boolean;
};
const _data: Item[] = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: false },
];

//FooItem didn't forward props leading to click event and active attribute lost
const NotForwardProps: React.FC = () => {
  return <div>foo</div>;
};

const Item = (props) => {
  const [x, setX] = useState(false);
  return <NotForwardProps />;
};
const Issue: React.FC = () => {
  const [data, setData] = useState(_data);
  return <List data={data} updateData={setData} item={Item}></List>;
};
export default Issue;
