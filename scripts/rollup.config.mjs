import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import strip from "@rollup/plugin-strip";
import path from "path";
import { fileURLToPath } from "url";
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const extensions = [".js", ".jsx", ".ts", ".tsx"];
const babelConfigFile = path.join(__dirname, "../babel.config.cjs");
export const babelPlugin = babel({
  babelHelpers: "bundled",
  extensions,
  configFile: babelConfigFile,
});

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.mjs",
      format: "es",
    },
    {
      file: "dist/index.cjs",
      format: "cjs",
    },
  ],
  plugins: [
    replace({
      preventAssignment: true,
      __DEV__: process.env.NODE_ENV === "development",
    }),
    postcss({
      extract: "index.css", // Extract all CSS to this file
      minimize: true, // Minify the CSS
      plugins: [
        postcssImport(), // Handle @import in CSS files
      ],
    }),

    resolve({
      jsnext: true,
      extensions: extensions,
    }),
    commonjs(),
    json(),
    babelPlugin,
    strip({ include: /src\/.*\.[mc]?[jt]sx?$/ }),
  ],
  external: [
    "react",
    "react-dom",
    "lodash",
    "react/jsx-runtime",
    "react-dom/client",
    "picomatch",
    "lodash",
    "@ant-design/icons",
    "npmlog",
    "resolve",
    "dayjs",
    "ethers",
    /@colliejs\//,
    /@babel\//,
    /@rollup\//,
    /@collie-ui\//,

    /node:*/,
    "react",
    "playwright",
    "@playwright/test",
  ],
};

export default config;
