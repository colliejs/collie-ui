import { Responsive } from "../src";
import { Box } from "../src/Box";

export default {
  title: "layout/Responsive",
};

//=====================================================================================================
// Responsive
//=====================================================================================================
const style = {
  w: 300,
  h: 101,
  // bg: mock.getRandomColor(),
  border: "1px solid lightgrey",
};

export const ResponsiveX = () => {
  return (
    <Responsive>
      <Box css={style}>111111</Box>
      <Box css={{ ...style }}>111111</Box>
      <Box css={{ ...style }}>111111</Box>
    </Responsive>
  );
};
