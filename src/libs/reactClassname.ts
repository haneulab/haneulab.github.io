/**
 * local interfaces & types
 */
type ReactClassnameAction = (...args: string[]) => string;
const reactClassname: ReactClassnameAction = (...args) =>
  args.filter(Boolean).join(' ');
export default reactClassname;
