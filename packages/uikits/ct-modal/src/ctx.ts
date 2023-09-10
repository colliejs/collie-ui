import { AnimeInstance } from "@collie-ui/animation";
import React from "react";
import { createContext } from "react";
const noop = async () => {
  return undefined;
};
const defaultModalValue: {
  onShow: () => Promise<AnimeInstance[] | undefined>;
  onHide: () => Promise<AnimeInstance[] | undefined>;
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
