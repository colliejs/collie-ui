const glob = require("glob");
const path = require("path");
const yue = require("@colliejs/vite");
const { mergeConfig } = require("vite");
const { collieConfig } = require("../collie-config.mjs");

const getStories = () =>
  glob.sync(`packages/**/*.stories.@(js|jsx|ts|tsx|mdx)`, {
    ignore: `packages/**/node_modules/**/*.stories.@(js|jsx|ts|tsx|mdx)`,
  });

/**
 * @type {import('@storybook/core/types').StorybookConfig}
 * @see https://storybook.js.org/docs/react/configure/overview
 */
module.exports = {
  stories: async list => [...getStories().map(e => `../${e}`)],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: "@storybook/react-vite",
  docs: {
    autodocs: true,
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      define: {
        global: "window",
      },
      plugins: [
        yue({
          index: path.resolve(__dirname, "../index.ts"),
          exclude: /dist\//,
          styledConfig: collieConfig,
        }),
      ],
      externals: ["ethers"],
    });
  },
};
