import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import strip from "@rollup/plugin-strip";
import path from "path";
import { fileURLToPath } from "url";
import collieRollup from "@colliejs/rollup";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const babelConfigFile = path.join(__dirname, "../babel.config.cjs");

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
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15,
      __DEV__: process.env.NODE_ENV === "development",
    }),

    resolve({
      jsnext: true,
      extensions: extensions,
    }),
    collieRollup({ include: /src\/*/ }),
    commonjs(),
    json(),
    babel({ babelHelpers: "bundled", extensions, configFile: babelConfigFile }),
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
    "@metamask/detect-provider",
    /@colliejs\//,
    /@c3\//,
    /@babel\//,
    /@rollup\//,
    /@collie-ui\//,

    /node:*/,
    "ethers",
    "react",
    "@stitches/react",
    "playwright",
    "@playwright/test",
  ],
};

export default config;
