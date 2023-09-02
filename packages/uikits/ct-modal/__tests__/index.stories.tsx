import { Box } from "@collie-ui/layout";
import { styled } from "@collie-ui/common";
import React from "react";
import { Button } from "@collie-ui/atomic";
import { StyledMask as _Mask, Modal } from "../src";
import { useModal } from "../src";
export default { title: "uikits/Modal" };

const Mask = styled(_Mask, {
  background: "rgba(0,244,0,0.1)",
  color: "red",
});

export const MyModal: React.FC = props => {
  const { visible, show, hide, ref } = useModal();
  console.log("visible", visible);
  return (
    <div>
      {
        <Modal mask={Mask} ref={ref} visible={visible}>
          <div style={{ padding: 50, background: "black" }}>
            <p>hello</p>
            <button
              onClick={() => {
                console.log("click close");
                hide();
              }}
            >
              close
            </button>
          </div>
        </Modal>
      }
      <Button onClick={show}>open</Button>
    </div>
  );
};
