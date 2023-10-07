export default function handleSize(size: string) {
  return Math.max(24, Number(size) || 150);
}
