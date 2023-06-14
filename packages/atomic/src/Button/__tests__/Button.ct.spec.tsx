import { expect, test } from "@playwright/experimental-ct-react";
import { Button } from "../Button";
import { DebounceButton } from "./Case1";

test("Tag Name is BUTTON ", async ({ page, mount }) => {
  const component = await mount(<Button />);
  expect(await component.evaluate((x) => x.tagName)).toBe("BUTTON");
});

test("support As attribtues ", async ({ page, mount }) => {
  const component = await mount(<Button as="a" />);
  expect(await component.evaluate((x) => x.tagName)).toBe("A");
});

test("enable debounce ", async ({ mount }) => {
  const component = await mount(<DebounceButton />);
  await component.click();
  await component.click();
  await component.click();
  expect(component).not.toHaveText("3");
  expect(component).toHaveText("1");
});

test("disable debounce ", async ({ mount }) => {
  const component = await mount(<DebounceButton debounce={false} />);
  await component.click();
  await component.click();
  await component.click();
  expect(component).toHaveText("3");
});

//=====================================================================================================
// enable loading
// 1.show loading animation,
// 2. and disabled the button
//=====================================================================================================

test("enable loading ", async ({ page, mount }) => {
  const com = await mount(<Button loading />);
  expect(com.locator(".loading-icon")).toBeVisible();
  expect(com).toBeDisabled();
});

test("disable loading ", async ({ page, mount }) => {
  const com = await mount(<Button />);
  expect(com.locator(".loading-icon")).not.toBeVisible();
  expect(com).not.toBeDisabled();
});

//=====================================================================================================
// visual compare
//=====================================================================================================
test("variants-shape-round ", async ({ mount }) => {
  const com = await mount(<Button shape="round" css={{ w: 100, h: 40 }} />);
  expect(await com.screenshot()).toMatchSnapshot("button-shape-round.png");
});

test("variants-shape-rect ", async ({ mount }) => {
  const com = await mount(<Button shape="rect" css={{ w: 100, h: 40 }} />);
  expect(await com.screenshot()).toMatchSnapshot("button-shape-rect.png");
});
