import React from "react";
import { Badge } from "../src/Badge";
export default { title: "ct/Badge" };

export const Basic = () => {
  return (
    <div>
      <Badge size="1" variant="red">
        Badge
      </Badge>
      <Badge size="2" variant="yellow">
        Badge
      </Badge>
      <Badge size="4" variant="lime">
        Badge
      </Badge>
    </div>
  );
};
