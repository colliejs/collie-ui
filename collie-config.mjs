import { defaultConfig } from "@colliejs/core";
import _ from "lodash";

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
      "primary-selected-hover-color":"#aed4fc", //有问题?
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

      //===========================================================
      // background color
      //===========================================================
      "primary-background-color":"#ffffff",
      "primary-background-hover-color":"#dcdfec", //Use as hover color for primary background color
      "grey-background-color":"#f6f7fb",
      "allgrey-background-color":"#f6f7fb",

      //Inverted background color (opposite of primary background color)
      "inverted-color-background":"#323338",
      "disabled-background-color":"#ecedf5",
      "secondary-background-color":"#ffffff", ///FIXME:???


      //===========================================================
      // Text color
      //===========================================================
      "primary-text-color": colors.mudBlack, //#323338 //Use for default text color
      "secondary-text-color": colors.asphalt, //#676879//Use when you need text with lesser importance
      "disabled-text-color": colors.asphalt, //#676879
      "primary-text-on-primary": colors.snowWhite,//white
      "text-color-on-inverted": colors.snowWhite,
      "text-color-on-primary": colors.snowWhite,
      "secondary-text-on-secondary-color":"#676879",
      "placeholder-color": colors.asphalt, //#676879
      "link-color": colors.linkColor, //#1f76c2
      "icon-color": colors.asphalt, //#676879
      "icon-color-hover": colors.wolfGray,


      //===========================================================
      // border color
      //===========================================================
      "ui-border-color": "#c3c6d4", //Border color for ui elements and components (Button, Input...)
      "layout-border-color": "#d0d4e4",//Border color for general layout and separators (Leftpane, Menu Divider...)



      //background
      "dark-background-color": colors.riverstoneGray,
      "dark-background-on-secondary-color": colors.riverstoneGray,
      "dialog-background-color": colors.snowWhite,
      "modal-background-color": colors.snowWhite,
      "main-nav-background-color": colors.surface,


      "private-color": colors.private,
      "shareable-color": colors.purple,

      "dark-color": colors.mudBlack,



    },
    shadows:{
      "box-shadow-xs": "0 4px 6px -4px rgb(0 0 0 / 10%)",
      "box-shadow-small": "0 4px 8px rgb(0 0 0 / 20%)",
      "box-shadow-medium": "0 6px 20px rgb(0 0 0 / 20%)",
      "box-shadow-large": "0 15px 50px rgb(0 0 0 / 30%)"
    },

    fonts: {
      //===========================================================
      // font family
      //===========================================================
      "font-family": "Figtree,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "title-font-family": "Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",

      "smoothing-webkit": "antialiased",
      "smoothing-moz": "grayscale",
      //===========================================================
      // font-weight
      //===========================================================
      "weight-very-light": 200,
      "weight-light": 300,
      "weight-normal": 400,
      "weight-bold": 500,
      //===========================================================
      // font-size
      //===========================================================
      "size-10": "14px",
      "size-20": "14px",
      "size-30": "16px",
      "size-40": "18px",
      "size-50": "24px",
      "size-60": "30px",
      "line-height-10": "18px",
      "line-height-20": "24px",
      "line-height-30": "24px",
      "line-height-40": "24px",
      "line-height-50": "32px",
      "line-height-60": "42px",
      // "size-h1":var(size-60);
      // "size-h2":var(size-50);
      // "size-h3":var(size-50);
      // "size-h4":var(size-40);
      // "size-h5":var(size-30);
      // "size-general-label":var(size-20);
      // "size-paragraph":var(size-30);
      // "size-subtext":var(size-10);
      // "line-height-h1":var(line-height-60);
      // "line-height-h2":var(line-height-50);
      // "line-height-h3":var(line-height-50);
      // "line-height-h4":var(line-height-40);
      // "line-height-h5":var(line-height-30);
      // "line-height-general-label":var(line-height-20);
      // "line-height-paragraph":var(line-height-30);
      // "line-height-subtext":var(line-height-10);
      // "h1":var(weight-bold) var(size-h1)/var(line-height-h1) var(--title-font-family);
      // "h2":var(weight-bold) var(size-h2)/var(line-height-h2) var(--title-font-family);
      // "h3":var(weight-light) var(size-h3)/var(line-height-h3) var(--title-font-family);
      // "h4":var(weight-bold) var(size-h4)/var(line-height-h4) var(--title-font-family);
      // "h5":var(weight-bold) var(size-h5)/var(line-height-h5) var(family);
      // "general-label":var(weight-normal) var(size-general-label)/var(line-height-general-label) var(family);
      // "paragraph":var(weight-normal) var(size-paragraph)/var(line-height-paragraph) var(family);
      // "subtext":var(weight-normal) var(size-subtext)/var(line-height-subtext) var(family);
      "h1-bold": "700 32px/40px Poppins,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "h1-normal": "500 32px/40px Poppins,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "h1-light": "300 24px/40px Poppins,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "h2-bold": "700 24px/30px Poppins,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "h2-normal": "500 24px/30px Poppins,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "h2-light": "300 18px/30px Poppins,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "h3-bold": "600 18px/24px Poppins,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "h3-normal": "500 18px/24px Poppins,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "h3-light": "300 18px/24px Poppins,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "text-medium-bold": "600 16px/22px Figtree,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "text-medium-normal": "400 16px/22px Figtree,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "text-small-bold": "600 14px/20px Figtree,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
      "text-small-normal": "400 14px/20px Figtree,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif",
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
      small: "8px",
      medium: "16px",
      large: "24px",
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
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
      7: "27px",
      8: "35px",
      9: "59px",
      "size-10": "14px",
      "size-20": "14px",
      "size-30": "16px",
      "size-40": "18px",
      "size-50": "24px",
      "size-60": "30px",
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
      small: "4px",
      medium: "8px",
      big: "16px",
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
} );
