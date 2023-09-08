import { Dropdown } from "@collie-ui/ct-floating-ui";
import React from "react";

export type SelectProps<T> = {
  selected?: T;
  selectBox: JSX.Element;
  children: JSX.Element;
} & Omit<React.ComponentProps<typeof Dropdown>, "floating">;

export const Select = <T,>(props: SelectProps<T>) => {
  const { selectBox, children, ...restProps } = props;
  if (!React.isValidElement(children)) {
    throw new Error("Select children must be a valid react element");
  }

  return (
    <Dropdown floating={children} {...restProps}>
      {selectBox}
    </Dropdown>
  );
};
