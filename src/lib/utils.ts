/**
 * (notNull) Assert non-null value
 */
export function nn<T>(input: T) {
  if (input === null || typeof input === 'undefined') {
    throw new Error('Non-null value expected')
  }

  return input
}
