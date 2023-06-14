import { expect, test } from "@playwright/experimental-ct-react";
import { Image } from "../Image";

test("Tag Name is img ", async ({ page, mount }) => {
  const component = await mount(<Image />);
  expect(await component.evaluate((x) => x.tagName)).toBe("IMG");
});

test.skip("doesnt support as ", async ({ page, mount }) => {
  const component = await mount(<Image as="a" />);
  expect(await component.evaluate((x) => x.tagName)).toBe("IMG");
});
