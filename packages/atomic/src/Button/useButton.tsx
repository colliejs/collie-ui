import React, { useCallback, useState } from "react";

export type UseLoadingBtnOption = {
  useLoading: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
};

export const useLoadingButton = (option: UseLoadingBtnOption) => {
  const { useLoading, onClick: _onClick } = option;
  const [loading, setLoading] = useState(false);

  const onClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      try {
        useLoading && setLoading(true);
        await _onClick?.(e);
      } finally {
        useLoading && setLoading(false);
      }
    },
    [_onClick, useLoading]
  );
  const disabled = loading;
  return { loading, onClick, disabled } as const;
};
