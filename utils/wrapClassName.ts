export default function wrapClassName(
  baseClassName: string,
  className?: string
): string {
  return className
    ? `${baseClassName} ${baseClassName}__${className}`
    : baseClassName;
}
