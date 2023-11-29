export const isEmpty = (target?: Record<string, any> | any[] | string) => {
  if (!target) return true;
  if (target instanceof Object) return Object.entries(target).length === 0;
  return target.length === 0;
};
