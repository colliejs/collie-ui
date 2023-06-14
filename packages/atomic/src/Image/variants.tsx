import React from "react";
import { styled } from "@border-collie-js/react";
import { Image } from "./Image";

export const Icon = styled(Image, { objectFit: "contain" });
export const Avatar = styled(Image, {
  round: true,
  objectFit: "contain",
});
export const Banner = styled(Image, {
  objectFit: "cover",
});
