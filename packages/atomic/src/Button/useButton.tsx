import { useSwitch } from "@c3/react";
import React, { useCallback } from "react";

export type UseBtnOption = {
  useLoading: boolean;
};

export const useButton = (
  btn: JSX.Element,
  option: UseBtnOption
): JSX.Element => {
  const { useLoading } = option;
  const [loading, showLoading, hideLoading] = useSwitch(false);

  const onClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      try {
        useLoading && showLoading();
        await btn.props.onClick?.(e);
      } finally {
        useLoading && hideLoading();
      }
    },
    [btn.props, hideLoading, showLoading, useLoading]
  );

  return React.cloneElement(btn, {
    loading,
    onClick,
  });
};
