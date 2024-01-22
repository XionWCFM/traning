export type SuccessStatus = "success";
export type ErrorStatus = "error";

export const tryCatch = <T = unknown, ErrorReturn = unknown>(
  tryFunc: () => T,
  catchDoing?: (error: unknown) => ErrorReturn,
):
  | { type: "error"; value: ErrorReturn | null }
  | { type: "success"; value: T } => {
  try {
    return {
      type: "success",
      value: tryFunc(),
    };
  } catch (e) {
    const result = catchDoing?.(e);
    return {
      type: "error",
      value: result ?? null,
    };
  }
};
