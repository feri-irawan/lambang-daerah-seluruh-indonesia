export default function handleIndex(
  min: number,
  max: number,
  index: string | number
) {
  let i = Number(index) - 1 || 0;
  i = Math.min(max - 1, i);
  i = Math.max(min - 1, i);

  return i;
}
