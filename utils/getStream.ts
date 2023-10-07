export async function getStream(url: string) {
  const res = await fetch("https:" + url);
  return await res.blob();
}
