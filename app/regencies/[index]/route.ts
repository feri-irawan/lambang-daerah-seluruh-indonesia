import { generateUrls } from "@/utils/generateUrls";
import { getRegencies } from "@/utils/getContents";
import handleSize from "@/utils/handleSize";
import { NextResponse } from "next/server";

export async function GET(
  _: any,
  { params: { index: size } }: { params: { index: string } }
) {
  // Mendapatkan semua url asli
  const contents = await getRegencies();

  // Membuat url pengganti
  const urls = generateUrls(contents, handleSize(size), true);

  // Mengembalikan daftar url
  return NextResponse.json(urls);
}
