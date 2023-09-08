import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import glob from "glob";
import { mergeConfig } from "vite";
import Inspect from "vite-plugin-inspect";

const xpath = "packages/atomic/src/Image/__tests__/**";
import yue from "@colliejs/vite";
import { collieConfig } from "../collie-config.mjs";

const getStories = () =>
  glob.sync(`${xpath}/*.stories.@(js|jsx|ts|tsx|mdx)`, {
    ignore: `packages/**/node_modules/**/*.stories.@(js|jsx|ts|tsx|mdx)`,
  });
const config: StorybookConfig = {
  stories: [...getStories().map(e => `../${e}`)],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    console.log("====>", path.resolve(__dirname, "../index.ts"));
    return mergeConfig(config, {
      define: {
        global: "window",
      },
      // root: root,
      plugins: [
        Inspect(),
        yue({
          index: path.resolve(__dirname, "../index.ts"),
          exclude: /(dist\/)/,
          styledConfig: collieConfig,
          styledComponentCssFile: "dist/styledComponent.css",
          styledElementCssFile: "dist/styledElement.css",
        }),
      ],
      externals: ["ethers"],
    });
  },
};
export default config;
