function tryCatch<T, E extends Error, H>(
  tryFn: () => T,
  catchFn: (error: E) => H,
): T | H {
  try {
    return tryFn();
  } catch (error) {
    return catchFn(error as E);
  }
}
