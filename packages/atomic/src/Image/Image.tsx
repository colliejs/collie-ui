import { styled } from "@collie-ui/common";
import React from "react";
import { Atomic } from "../Atomic";
import { useImageLoadingStatus } from "./useImageLoadingStatus";
import type { URL } from "@collie-ui/common";

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
    objectFit: "cover",
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
      blur: {
        dynamic: px => ({ filter: `blur(${px})` }),
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

//===========================================================
// Image
//===========================================================
export type ImageProps = {
  fallbackNode?: React.ReactNode;
  loadingNode?: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof StyledImage>;

export const Image = React.forwardRef(
  (props: ImageProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      fallbackNode,
      loadingNode,
      className,
      src = "",
      ...restProps
    } = props;
    const status = useImageLoadingStatus(src as URL);

    const child =
      status === "loading" && loadingNode ? (
        loadingNode
      ) : status === "error" && fallbackNode ? (
        fallbackNode
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
