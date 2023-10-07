import { getProvinces } from "@/utils/getContents";
import { getStream } from "@/utils/getStream";
import handleIndex from "@/utils/handleIndex";
import handleSize from "@/utils/handleSize";

export async function GET(
  _: any,
  { params: { index, size } }: { params: { index: string; size: string } }
) {
  // Mendapatkan semua url asli
  const contents = await getProvinces(handleSize(size));

  // Mengatur index agar tidak kurang dari 1 dan tidak lebih dari 38
  let i = handleIndex(1, 38, index);

  // Mendapatkan blob url berdasarkan index
  const { url } = contents.at(i)!;
  const blob = await getStream(url);

  // Mengembalikan gambar
  return new Response(blob, { headers: { "Content-Type": "image/png" } });
}
