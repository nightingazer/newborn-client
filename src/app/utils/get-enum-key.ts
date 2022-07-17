export function getEnumElemByValue<T extends { [key: string]: string | number }>(
  e: T,
  value: number | string
): T[keyof T] | null {
  const keys = Object.keys(e)
  const values = Object.values(e)
  const index = values.findIndex((val) => val === value)
  if (index === -1) return null
  return e[keys[index] as keyof T]
}
