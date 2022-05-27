export default function classCheck(
  classToCheck: string,
  destinationClass: string,
): boolean {
  return destinationClass.includes(classToCheck);
}
