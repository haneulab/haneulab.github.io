export const cls: (...strs: string[]) => string = (...strs) => {
  return strs.filter(Boolean).join(' ');
};
