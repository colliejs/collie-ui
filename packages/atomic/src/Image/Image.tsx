import { styled } from "@collie-ui/common";
import React from "react";
import { Atomic } from "../Atomic";
import { useImageLoadingStatus } from "./useImageLoadingStatus";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "co-img-container": JSX.IntrinsicElements["div"];
    }
  }
}

export const StyledImage = styled(
  Atomic,
  {
    objectPosition: "center",
    w: "100%",
    h: "100%",
    flexShrink: 0,
    maxWidth: "100%",
    variants: {
      cover: {
        true: {
          objectFit: "cover",
        },
      },
      contain: {
        true: {
          objectFit: "contain",
        },
      },
      fill: {
        true: {
          objectFit: "fill",
        },
      },
    },
  },
  { as: "img" }
);
const StyledImageContainer = styled(
  Atomic,
  {
    display: "inline-block",
    overflow: "hidden",
  },
  { as: "co-img-container" }
);
export type Debug<T> = { [K in keyof T]: T[K] };

type x = Debug<React.ComponentProps<typeof StyledImageContainer>>;

//===========================================================
// Image
//===========================================================
export type ImageProps = {
  fallback?: React.ReactNode;
  loading?: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof StyledImage>;

export const Image = React.forwardRef(
  (props: ImageProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { fallback, loading, className, src = "", ...restProps } = props;
    const status = useImageLoadingStatus(src);

    const child =
      status === "loading" && loading ? (
        loading
      ) : status === "error" && fallback ? (
        fallback
      ) : (
        <StyledImage src={src} {...restProps} />
      );
    return (
      <StyledImageContainer ref={ref} className={className}>
        {child}
      </StyledImageContainer>
    );
  }
);
Image.displayName = "Image";
