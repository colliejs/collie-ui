import { noop } from "@c3/utils";
import React from "react";
import { createContext } from "react";

const defaultModalValue: {
  onShow: () => void;
  onHide: () => void;
  visible: boolean;
  ref: React.MutableRefObject<HTMLDivElement | null>;
} = { onShow: noop, onHide: noop, visible: false, ref: { current: null } };

export const modalCtx = createContext(defaultModalValue);

export const useModalCtx = () => {
  const ctx = React.useContext(modalCtx);
  if (!ctx) {
    throw new Error("useModalCtx must be used within a ModalProvider");
  }
  return ctx;
};
