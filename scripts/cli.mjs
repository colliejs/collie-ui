#!/usr/bin/env tsx

import { run } from "@scriptbot/cli";
import { $ } from "zx";
// import { collieConfig } from "@collie-ui/common";

run({
  async release(option) {
    const { semver = "patch" } = option;
    await $`pnpm -r clean`;
    await $`pnpm -r build`;
    await $`git add .`;
    await $`git commit -m "chore: release"`;
    await $`lerna version ${semver} --conventional-commits --no-commit-hooks -y`;
    await $`pnpm -r publish ----report-summary`;
  },
  async makeTheme() {
    // await $`pnpm -r build`;
    // await $`pnpm -r make-theme`;
  },
});
