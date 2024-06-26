import { run } from "@colliejs/shared";
import { $ } from "zx";
import { createTheme } from "@colliejs/core";
import config from "../collie.config";

run({
  async release(option: { version?: string } = {}) {
    const { version = "patch" } = option;

    if (version.startsWith("pre")) {
      await $`lerna version ${version}  --preid beta --conventional-commits --no-commit-hooks -y`;
      await $`pnpm -r publish --tag beta ----report-summary --no-git-checks`;
    } else {
      await $`lerna version ${version} --conventional-commits --no-commit-hooks -y`;
      await $`pnpm -r publish ----report-summary --no-git-checks`;
    }
  },
  async createTheme() {
    createTheme(config.css.prefix, config.css.theme);
    await $`pnpm -r build`;
    // await $`pnpm -r build`;
    // await $`pnpm -r make-theme`;
  },
});
