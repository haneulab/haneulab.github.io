import type { MergeClassesAction } from '@apptypes/libs.type';

export const mergeClasses: MergeClassesAction = (...args) => {
  return args.filter(Boolean).join(' ');
};
