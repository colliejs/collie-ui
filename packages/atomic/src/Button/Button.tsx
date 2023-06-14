import { LoadingOutlined } from "@ant-design/icons";
import { styled } from "@border-collie-js/react";
import _ from "lodash";
import React, { ButtonHTMLAttributes, useCallback, useMemo } from "react";
import { Atomic } from "../Atomic";

export type ButtonProps = {
  loading?: boolean;
  loadingIcon?: JSX.Element;
  preventDefault?: boolean;
  debounce?: number | boolean;
  disabled?: boolean;
} & React.ComponentProps<typeof StyledButton>;

export const StyledButton = styled(
  Atomic,
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&[disabled]": {
      cursor: "not-allowed",
    },
  },
  { as: "button" }
);

export const Button: React.ForwardRefExoticComponent<ButtonProps> =
  React.forwardRef((props, ref) => {
    const {
      preventDefault,
      onClick,
      loading,
      loadingIcon,
      children,
      disabled,
      debounce: _debounce = 400,
      ...restProps
    } = props;
    const debounce: number =
      typeof _debounce === "boolean" ? (_debounce ? 400 : 0) : _debounce;

    const handleClick = useCallback(
      async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (preventDefault) {
          e.preventDefault();
        }
        if (loading) {
          return;
        }
        await onClick?.(e);
      },
      [loading, onClick, preventDefault]
    );

    const DebouncedClick = useMemo(
      () =>
        debounce > 0
          ? _.debounce(handleClick, debounce, {
              leading: true,
              trailing: false,
            })
          : handleClick,
      [debounce, handleClick]
    );

    return (
      <StyledButton
        onClick={DebouncedClick}
        disabled={disabled || loading}
        ref={ref}
        {...restProps}
      >
        {loading &&
          (loadingIcon || <LoadingOutlined className="loading-icon" />)}
        {children}
      </StyledButton>
    );
  });

Button.displayName = "Button";
