import React from "react";
import { Button } from "../Button";

type Props = {
  debounce?: boolean;
};

export const DebounceButton: React.FC<Props> = (props) => {
  const [count, setCount] = React.useState(0);
  const onClick = React.useCallback(() => {
    setCount((x) => x + 1);
  }, []);
  return (
    <Button onClick={onClick} {...props}>
      {count}
    </Button>
  );
};

export default DebounceButton;
