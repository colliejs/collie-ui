import { useState } from "react";
import { Modal } from "./Modal";
import React from "react";

export type ModalControlledProps = Omit<
  React.ComponentProps<typeof Modal>,
  "visible" | "setVisible"
>;
export const ModalControlled: React.FC<ModalControlledProps> = (
  props: ModalControlledProps
) => {
  const [visible, setVisible] = useState(false);
  return <Modal {...props} visible={visible} setVisible={setVisible} />;
};
