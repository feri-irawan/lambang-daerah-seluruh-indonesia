import * as cheerio from "cheerio";

export type Item = {
  title: string;
  url: string;
};

/** Memparsing content menjadi object */
function parseContents(content: string, size?: number): Item[] {
  const $ = cheerio.load(content);
  const cards = $(".gallerybox");

  const items = cards
    .map((i, el) => {
      const image = $(el).find("img");
      let imageUrl: string[] | string = image.attr("src")?.split("-")!;
      let baseUrl = imageUrl![0].split("/").slice(0, -1).join("/");
      imageUrl = `${baseUrl}/${size || 150}px-${imageUrl![1]}`;

      return {
        url: imageUrl,
        title: image.attr("alt")!,
      };
    })
    .toArray();

  return items;
}

/** Mendapatkan object provinsi */
export async function getProvinces(size?: number) {
  const res = await fetch(
    "https://id.wikipedia.org/wiki/Daftar_lambang_provinsi_di_Indonesia"
  );

  const content = await res.text();

  return parseContents(content, size).slice(0, 38);
}

/** Mendapatkan object kabupaten/kota */
export async function getRegencies(size?: number) {
  const res = await fetch(
    "https://id.wikipedia.org/wiki/Daftar_lambang_kabupaten_dan_kota_di_Indonesia"
  );

  const content = await res.text();

  return parseContents(content, size).slice(0, 514);
}
