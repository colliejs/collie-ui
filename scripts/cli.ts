import { run } from "@colliejs/shared";
import { $ } from "zx";

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
});
