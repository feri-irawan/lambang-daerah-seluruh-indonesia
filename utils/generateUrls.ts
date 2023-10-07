import { Item } from "./getContents";

export function generateUrls(
  contents: Item[],
  size: number,
  isRegency?: boolean
): Item[] {
  return contents.map(({ title }, i) => ({
    title,
    url: `/${isRegency ? "regencies" : "provinces"}/${i + 1}/${size}`,
  }));
}
