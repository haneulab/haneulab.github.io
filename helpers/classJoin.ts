export default function classJoin(...args: string[]): string {
  return args.filter(Boolean).join(' ');
}
