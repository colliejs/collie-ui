import config, { babelPlugin, extensions } from "../../scripts/rollup.config.mjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  ...config,
  plugins: [
    resolve({
      jsnext: true,
      extensions: extensions,
    }),
    babelPlugin,
  ],
};
