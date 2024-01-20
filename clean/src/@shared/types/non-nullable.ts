export type NonNullable<T> = T extends null | undefined ? never : T;

export const nonNullable = <T>(value: T): value is NonNullable<T> => {
  return value !== null && value !== undefined;
};
