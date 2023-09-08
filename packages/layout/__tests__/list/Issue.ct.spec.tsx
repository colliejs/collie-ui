import { expect, test } from "@playwright/experimental-ct-react";
import Issue from "./IssueForwardProps";
test("if ok should have active attribute ", async ({ page, mount }) => {
  const component = await mount(<Issue />);
  await component.locator("div:nth-child(1)").click();
  await expect(component.locator("div:nth-child(1)")).toHaveAttribute(
    "data-active",
    "true"
  );
  await component.locator("div:nth-child(2)").click();
  await expect(component.locator("div:nth-child(1)")).toHaveAttribute(
    "data-active",
    "false"
  );
});
