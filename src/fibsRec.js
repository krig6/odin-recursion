export const fibsRec = (n) => {
  if (n === 0) return []
  if (n === 1) return [0]
  if (n === 2) return [0, 1]

  let sequence = fibsRec(n - 1)

  return [...sequence, sequence[sequence.length - 1] + sequence[sequence.length - 2]]
}
