import { styled } from "@colliejs/react";
import { Atomic } from "../Atomic";
import React from "react";
import { useImageLoadingStatus } from "./useImageLoadingStatus";
export const StyledImage = styled(
  Atomic,
  {
    objectFit: "contain",
    objectPosition: "center",
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

const ImageContainer = styled(
  Atomic,
  {
    display: "inline-block",
    overflow: "hidden",
    maxWidth: "100%",
    w: "max-content",
  },
  { as: "u-img" }
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
    const { shape, fallback, loading, className, src, ...restProps } = props;
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
      <ImageContainer
        status={status}
        shape={shape}
        ref={ref}
        className={className}
      >
        {child}
      </ImageContainer>
    );
  }
);
Image.displayName = "UImage";
