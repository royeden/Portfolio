export default function wrapClassName(
  baseClassName: string,
  className?: string
): string {
  return `${baseClassName} ${className || ''}`;
}
