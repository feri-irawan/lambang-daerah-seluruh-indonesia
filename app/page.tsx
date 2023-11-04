import { generateUrls } from "@/utils/generateUrls";
import { getProvinces, getRegencies } from "@/utils/getContents";
import Link from "next/link";
import { redirect } from "next/navigation";

const navs = [
  { title: "Provinsi", url: "?tab=provinces" },
  { title: "Kabupaten / Kota", url: "?tab=regencies" },
];

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (
    !searchParams.tab ||
    !["provinces", "regencies"].includes((searchParams.tab as string) || "")
  )
    redirect(navs[0].url);

  let [provinces, regencies] = await Promise.all([
    getProvinces(),
    getRegencies(),
  ]);

  provinces = generateUrls(provinces, 80);
  regencies = generateUrls(regencies, 80, true);

  const data = searchParams.tab === "provinces" ? provinces : regencies;

  return (
    <>
      <nav className="sticky top-0 px-4 py-2 flex gap-3 bg-black bg-opacity-80 border-b backdrop-blur-sm">
        {navs.map(({ title, url }) => (
          <Link
            key={url}
            href={url}
            className={`px-3 py-2 inline-block rounded-lg hover:bg-gray-700 ${
              new URLSearchParams(url).get("tab") === searchParams.tab &&
              "bg-gray-700"
            }`}
          >
            {title}
          </Link>
        ))}
      </nav>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:p-8">
        {data.map((item) => (
          <div key={item.url} className="flex gap-4">
            <img
              src={item.url}
              alt={item.title}
              className="aspect-square object-contain"
              loading="lazy"
            />
            <div>
              <h2 className="text-md font-bold">{item.title}</h2>
              <p>{item.url}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
