import { styled } from "@collie-ui/common";

export const Heading = styled("h1", {
  lineHeight: 1,
  variants: {
    kind: {
      h1Bold: {
        font: "700 32px/40px $fonts-title-font-family", //700 bold
      },

      h1Normal: {
        font: "500 32px/40px $fonts-title-font-family",//500 media
      },
      h1Light: {
        font: "300 32px/40px $fonts-title-font-family",
      },
      //h2
      h2Bold: {
        font: "700 24px/30px $fonts-title-font-family",//300 light
      },
      h2Normal: {
        font: "500 24px/30px $fonts-title-font-family",
      },
      h2Light: { font: "300 24px/30px $fonts-title-font-family" },
      //h3
      h3Bold: { font: "600 18px/24px $fonts-title-font-family" },
      h3Normal: { font: "500 18px/24px $fonts-title-font-family" },
      h3Light: { font: "300 18px/24px $fonts-title-font-family" },
    },
  },
});
