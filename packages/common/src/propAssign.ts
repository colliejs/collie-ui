export function isNil(value: unknown) {
  return value === null || value === undefined;
}

export const propAssign = (prop: string, value: unknown) => {
  if (isNil(value)) {
    return {};
  }
  return {
    [prop]: value,
  };
};
