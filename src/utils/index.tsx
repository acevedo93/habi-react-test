export const generateValues = (value: number) =>
  Array.apply(0, Array(value)).map((val, index) => index + 1);
