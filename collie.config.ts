import { defaultConfig, type CollieConfig } from "@colliejs/config";
export default {
  build: {
    entry: "src/index.tsx",
    alias: { "@src": "/src" },
    include: ["src/**/*.tsx", "src/**/*.ts"],
    exclude: [
      "node_modules/**/*",
      "dist/**/*",
      "**/*.stories.tsx",
      "**/__tests__/**/*",
    ],
  },
  css: {
    ...defaultConfig,
    breakpoints: [320, 768],
    prefix: "co",
    layername: "collie-ui",
    theme: {},
  },
} as const satisfies CollieConfig;
