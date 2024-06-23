export function arrayify(arr: unknown) {
  if (Array.isArray(arr)) {
    return arr;
  }
  return [arr];
}
