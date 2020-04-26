export default function wrapClassName(
  baseClassName: string,
  className?: string
): string {
  return `${baseClassName} ${baseClassName}__${className || ''}`;
}
