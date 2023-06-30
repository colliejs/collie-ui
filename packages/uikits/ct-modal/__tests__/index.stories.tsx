// import { Button } from "@collie-ui/atomic"; //TODO:为什么这样引入button就渲染不对
import { abs } from "../../../css/src/layout";
import { Box } from "../../../layout/src";
import { styled } from "@border-collie-js/react";
import React from "react";
import { Button } from "../../../atomic/src/Button";
import { StyledMask as _Mask } from "../src/BaseModal";
import { ModalControlled } from "../src/ModalControlled";
export default { title: "uikits/Modal" };

const Mask = styled(_Mask, {
  background: "rgba(0,0,0,0.9)",
  color: "white",
});
export const MyModal: React.FC = (props) => {
  return (
    <div>
      <ModalControlled
        mask={<Mask />}
        body={
          <Box css={{ w: 400, h: 300, background: "rgba(0,0,0,0.9)" }}>
            hello,world
          </Box>
        }
        cancelBtn={
          <Button css={{ ...abs({ top: 10, left: 100 }) }}>cancel</Button>
        }
        closeBtn={
          <Button css={{ ...abs({ top: 10, left: 10 }) }}>close</Button>
        }
      >
        <Button>open</Button>
      </ModalControlled>
    </div>
  );
};
