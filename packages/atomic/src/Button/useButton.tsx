import { useSwitch } from "@c3/react";
import React, { useCallback } from "react";

export type UseLoadingBtnOption = {
  useLoading: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
};

export const useLoadingButton = (option: UseLoadingBtnOption) => {
  const { useLoading, onClick: _onClick } = option;
  const [loading, showLoading, hideLoading] = useSwitch(false);

  const onClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      try {
        useLoading && showLoading();
        await _onClick?.(e);
      } finally {
        useLoading && hideLoading();
      }
    },
    [_onClick, hideLoading, showLoading, useLoading]
  );
  const disabled = loading;
  return { loading, onClick, disabled } as const;
};
