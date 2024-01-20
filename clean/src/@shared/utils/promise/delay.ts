export const delay = (ms: MilliSeconds) =>
  new Promise((res) => setTimeout(res, ms));
