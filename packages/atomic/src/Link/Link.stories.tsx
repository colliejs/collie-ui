import React from "react";
import { Link } from "./Link";
export default {
  component: Link,
  title: "atomic/Link",
};

export const Default = () => <Link href="https://www.baidu.com">clickme</Link>;
export const Underline = () => (
  <Link href="https://www.baidu.com" underline>
    underline
  </Link>
);
