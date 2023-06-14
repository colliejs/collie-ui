//@ts-ignore
globalThis.CSS = { supports: () => true };
globalThis.matchMedia = () => {
  return { matches: true };
};
