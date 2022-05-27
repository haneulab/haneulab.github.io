module.exports = {
  /**type checks */
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  /**lint first then format ts and js files */
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  /**format json & md files */
  '**/*.(json|md)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
};
