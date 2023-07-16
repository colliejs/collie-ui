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
      //===========================================================
      // primary-color:
      //===========================================================
      "primary-color": colors.basicBlue, //#0085ff Use this to emphasise main ui components (Button, Input...)
      "primary-selected-color": colors.higlight, //#dff0ff
      "primary-hover-color": colors.darkBlue,
      "primary-selected-hover-color": "#aed4fc", //有问题?
      //===========================================================
      // positive color
      // Use when you want to indicate sometime positive (success, completion of something...)
      //===========================================================
      "positive-color": colors.success,//#00ca72
      "positive-color-hover": "#00a25b",
      "positive-color-selected": "#bbdbc9",
      "positive-color-selected-hover": "#b5cec0",

      //===========================================================
      // negative color
      // Use when you want to indicate sometime negative (error, failure of something...)
      //===========================================================
      "negative-color": colors.error,//#d83a52
      "negative-color-hover": "#b63546",
      "negative-color-selected": "#f4c3cb",
      "negative-color-selected-hover": "#ecb7bf",

      //===========================================================
      // warning color
      // Use when you want to indicate sometime warning (severity, alert, caution...)
      //===========================================================
      "warning-color": "#ffcb00",
      "warning-color-hover": "#eaaa15",
      "warning-color-selected": "#fceba1",
      "warning-color-selected-hover": "#f2d973",
      "dark-color": colors.mudBlack,//#323338

      //===========================================================
      // background color
      //===========================================================
      "background-primary": "#ffffff",
      "background-hover": "#dcdfec", //Use as hover color for primary background color
      "background-grey": "#f6f7fb",
      "background-dark": "#676879", //#323338
      "background-dark-on-secondary": colors.riverstoneGray,//#f5f6f8

      //ui
      "background-dialog": colors.snowWhite,
      "background-modal": colors.snowWhite,
      "background-main-nav": colors.surface,

      //Inverted background color (opposite of primary background color)
      "background-inverted": "#323338",
      "background-disabled": "#ecedf5",
      "background-color": "#ffffff", ///FIXME:???


      //===========================================================
      // Text color
      //===========================================================
      "text-primary": colors.mudBlack, //#323338 //Use for default text color
      "text-secondary": colors.asphalt, //#676879//Use when you need text with lesser importance
      "text-disabled": colors.asphalt, //#676879
      "text-on-inverted": colors.snowWhite,
      "text-on-primary": colors.snowWhite,
      "text-secondary-on-secondary": "#676879",
      "placeholder": colors.asphalt, //#676879
      "link": colors.linkColor, //#1f76c2

      //===========================================================
      // icon
      //===========================================================
      "icon": colors.asphalt, //#676879
      "icon-hover": colors.wolfGray,


      //===========================================================
      // border color
      //===========================================================
      "ui-border-color": "#c3c6d4", //Border color for ui elements and components (Button, Input...)
      "layout-border-color": "#d0d4e4",//Border color for general layout and separators (Leftpane, Menu Divider...)



      //background




      "private-color": colors.private,
      "shareable-color": colors.purple,




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
      1: "12px",
      2: "14px",
      3: "16px",
      4: "18px",
      5: "20px",
      6: "22px",
      7: "28px",
      8: "36px",
      9: "60px",
      "xs": "12px",
      "sm": "14px",
      "md": "16px",
      "lg": "18px",
      "xl": "24px",
      "xxl": "30px",
    },
    lineHeights: {
      "line-height-10": "18px",
      "line-height-20": "24px",
      "line-height-30": "24px",
      "line-height-40": "24px",
      "line-height-50": "32px",
      "line-height-60": "42px",
      "sm": 1,
      "md": 1.2,
      "lg": 1.4,
    },

    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "64px",
      9: "80px",
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      xxl: "48px",
      xxxl: "64px",
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "64px",
      9: "80px",
    },

    //radius
    radii: {
      1: "4px",
      2: "6px",
      3: "8px",
      4: "12px",
      round: "50%",
      pill: "9999px",
      //=========//
      sm: "4px",
      md: "8px",
      lg: "16px",
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
