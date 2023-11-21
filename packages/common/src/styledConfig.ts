import { defaultConfig } from "@colliejs/core";
import _ from "lodash";
import { CollieConfig } from "@colliejs/react";


const colors = {
  basicBlue: "#0085ff",
  primary: "#0085ff",
  primaryHover: "#0071d9",
  linkColor: "#1f76c2",
  gainsboro: "#e1e1e1",
  snowWhite: "#fff",
  darkBlue: "#0071d9",
  success: "#00ca72",
  purple: "#a358df",
  error: "#e44258",
  private: "#f65f7c",
  share: "#a358df",
  surface: "#292f4c",
  wolfGray: "#c5c7d0",
  mudBlack: "#323338",
  dark: "#323338",
  riverstoneGray: "#f5f6f8",
  uiGrey: "#e6e9ef",
  asphalt: "#676879",
  higlight: "#dff0ff",
};

export const collieConfig = _.merge(defaultConfig, {
  theme: {
    colors: {


    },
    shadows: {
      "box-shadow-xs": "0 4px 6px -4px rgb(0 0 0 / 10%)",
      "box-shadow-small": "0 4px 8px rgb(0 0 0 / 20%)",
      "box-shadow-medium": "0 6px 20px rgb(0 0 0 / 20%)",
      "box-shadow-large": "0 15px 50px rgb(0 0 0 / 30%)"
    },

    fonts: {
      "font-family": "Figtree,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "title-font-family": "Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "number-font-family":"",
      "cn-font-family":"",
    },
    fontWeights: {
      "weight-very-light": 200,
      "weight-light": 300,
      "weight-normal": 400,
      "weight-bold": 500,
    },
    letterSpacings: {},
    fontSizes: {
      "xs": "12px",
      "sm": "14px",
      "md": "16px",
      "lg": "18px",
      "xl": "24px",
      "xxl": "30px",
    },
    lineHeights: {
      "sm": 1,
      "md": 1.2,
      "lg": 1.4,
    },

    space: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      xxl: "48px",
      xxxl: "64px",
    },
    sizes: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      xxl: "48px",
      xxxl: "64px",
    },

    //radius
    radii: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      xxl: "48px",
      xxxl: "64px",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
  },
  // media: {
  // bp1: "(min-width: 520px)",
  // bp2: "(min-width: 900px)",
  // bp3: "(min-width: 1200px)",
  // bp4: "(min-width: 1800px)",
  // motion: "(prefers-reduced-motion)",
  // hover: "(any-hover: hover)",
  // dark: "(prefers-color-scheme: dark)",
  // light: "(prefers-color-scheme: light)",
  // },
} as const satisfies CollieConfig);
