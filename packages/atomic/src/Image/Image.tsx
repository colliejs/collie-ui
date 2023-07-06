import { styled } from "@colliejs/react";
import React from "react";
import { Atomic } from "../Atomic";
import { useImageLoadingStatus } from "./useImageLoadingStatus";
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

//===========================================================
// Image
//===========================================================
export type ImageProps = React.ComponentProps<typeof StyledImage> & {
  fallback?: React.ReactNode;
  loading?: React.ReactNode;
};
export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (props, ref) => {
    const { fallback, loading, className, src, ...restProps } = props;
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
      <StyledImageContainer
        status={status}
        ref={ref}
        className={className}
      >
        {child}
      </StyledImageContainer>
    );
  }
);
Image.displayName = "Image";
