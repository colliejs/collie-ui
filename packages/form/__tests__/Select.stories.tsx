import { isEmpty } from "@c3/utils";
import { Text } from "@collie-ui/atomic";
import { BaseListItemType, List } from "@collie-ui/layout";
import React, { useState } from "react";
import { Select } from "../src/Select/Select";

export default {
  title: "form/select",
  component: Select,
};
type Item = {
  name: string;
  value: string | number;
  id: number;
  active?: boolean;
};
const config: Item[] = [
  { id: 1, name: "name1", value: 1, active: true },
  { id: 2, name: "name2", value: 2 },
  { id: 3, name: "name3", value: 3 },
  { id: 4, name: "name4", value: 4 },
];

export const StyledSelect: React.FC = () => {
  const [selected, setSelected] = useState<Item>({} as Item);
  const [data, setData] = useState(config);
  return (
    <Select
      selected={selected}
      selectBox={
        isEmpty(selected) ? (
          <textarea>select </textarea>
        ) : (
          <Text>{selected.name}</Text>
        )
      }
    >
      <List
        data={data}
        updateData={setData}
        renderItem={(e: Item) => (
          <Text name={e.name} value={e.value} style={{ height: 40 }}>
            {e.name}
          </Text>
        )}
      />
    </Select>
  );
};

export const StandSelector = () => {
  return (
    <select>
      <option>1</option>
      <option>1</option>
      <option>2</option>
    </select>
  );
};
