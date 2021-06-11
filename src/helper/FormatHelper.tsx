export const shortenString = (
  str: string,
  f1: number,
  f2: number,
  f3: number,
  f4: number
): string => {
  return str.substring(f1, f2) + "..." + str.substr(f3, f4);
};
