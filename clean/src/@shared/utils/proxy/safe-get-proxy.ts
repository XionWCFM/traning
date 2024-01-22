export const safeGetProxy = <T extends { [key: string]: unknown }>(obj: T) => {
  return new Proxy(obj, {
    get(target, name, reciver) {
      return Reflect.get(target, name, reciver);
    },
  });
};
