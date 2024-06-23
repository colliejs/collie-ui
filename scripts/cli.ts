#!/usr/bin/env tsx
import { run } from "@colliejs/shared";
import { $ } from "zx";
import { createTheme } from "@colliejs/core";
// import { collieConfig } from "@collie-ui/common";
import config from "../collie.config";

run({
  async release(option: { semver?: string } = {}) {
    const { semver = "patch" } = option;
    await $`pnpm -r clean`;
    await $`pnpm -r build`;
    await $`git add .`;
    // await $`git commit -m "chore: release"`;
    await $`lerna version ${semver} --conventional-commits --no-commit-hooks -y`;
    await $`pnpm -r publish ----report-summary --no-git-checks`;
  },
  async createTheme() {
    createTheme(config.css.prefix, config.css.theme);
    await $`pnpm -r build`;
    // await $`pnpm -r build`;
    // await $`pnpm -r make-theme`;
  },
});
