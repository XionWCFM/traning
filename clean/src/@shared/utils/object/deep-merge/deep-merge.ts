import { DeepPartial } from '../../../types/deep-partial';

export const deepMerge = <T extends Record<string, any>>(
  target: T,
  source: DeepPartial<T>,
) => {
  for (let key of Object.keys(source)) {
    if (source[key] instanceof Object)
      //@ts-expect-error
      Object.assign(source[key], deepMerge(target[key], source[key]));
  }

  Object.assign(target || {}, source);
  return target;
};
