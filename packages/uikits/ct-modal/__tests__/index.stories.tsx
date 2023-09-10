import { Box } from "@collie-ui/layout";
import { styled } from "@collie-ui/common";
import React from "react";
import { Button } from "@collie-ui/atomic";
import { ModalProvider, Modal, useModalCtx } from "../src/index";
import "./index.css";
export default { title: "uikits/Modal" };

const CloseBtn = () => {
  const { onHide } = useModalCtx();
  return <button onClick={onHide}>close</button>;
};
const TriggerBtn = () => {
  const { onShow } = useModalCtx();
  return <button onClick={onShow}>show</button>;
};
const ModalWrapper1 = () => {
  const { visible } = useModalCtx();
  return (
    visible && (
      <Modal defaultHidden>
        <div style={{ padding: 50, background: "black" }}>
          <p>hello</p>
          <CloseBtn />
        </div>
      </Modal>
    )
  );
};
const ModalWrapper2 = () => {
  const { visible } = useModalCtx();
  return (
    <Modal style={{ top: 100 }} defaultHidden >
      <div style={{ padding: 50, background: "black" }}>
        <p>hello</p>
        <CloseBtn />
      </div>
    </Modal>
  );
};
export const MyModal1: React.FC = props => {
  return (
    <div>
      <ModalProvider>
        <TriggerBtn />
        <ModalWrapper1 />
      </ModalProvider>
    </div>
  );
};
export const MyModal2: React.FC = props => {
  return (
    <div>
      <ModalProvider>
        <TriggerBtn />
        <ModalWrapper2 />
      </ModalProvider>
    </div>
  );
};
