import { defaultConfig } from "@colliejs/config";
//TODO: @collie-ui/common也使用这个配置
export const collieConfig = {
  ...defaultConfig,
  breakpoints: [0, 768],
  prefix: "co",
};
