import TestRenderer from "react-test-renderer";
import { InfiniteLoading } from "../src";
import React from "react";
import { BaseListItemType } from "@collie-ui/layout";
import { noop } from "@c3/utils";
const data: any[] = [
  {
    id: 1,
    name: "FindingNothing222",
    active: true,
  },
];
describe("test cases", () => {
  it("should work ", () => {
    expect(0).toBe(0);
    const comp = TestRenderer.create(
      <InfiniteLoading
        onNextPage={noop}
        loading={false}
        hasMore={false}
        data={data}
        updateData={noop}
      >
        hello
      </InfiniteLoading>
    );
    expect(comp.toJSON()).toMatchInlineSnapshot(`
      <co-col
        class="baseStyle-Atomic-cCmDkm baseStyle-Box-dhzjXW baseStyle-Col-eVKEMs "
        css={
          {
            "alignItems": "center",
          }
        }
      >
        <co-ul
          class="baseStyle-Atomic-cCmDkm baseStyle-Box-dhzjXW baseStyle-StyledList-gNbevc  variants-static-direction-column-dUzzmp"
        />
        <div
          className="bottom-line"
          style={
            {
              "minHeight": 6,
              "width": "100%",
            }
          }
        />
      </co-col>
    `);
    console.log(comp.toJSON());
  });
});
