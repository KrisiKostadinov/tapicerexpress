import Image from "next/image";

import { getImages } from "@/app/gallery/data";

export default async function Gallery() {
  const images = await getImages();

  return (
    <main className="min-h-full py-10 space-y-10">
      <h1 className="text-3xl font-semibold text-center">Галерия</h1>
      <div className="container mx-auto">
        {images.length ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-2 grid-cols-3 lg:grid-cols-4 gap-5">
            {images.map((image, index) => (
              <div
                className="bg-white border shadow rounded w-full h-[200px]"
                key={index}
              >
                <Image
                  src={image.url}
                  alt={process.env.WEBSITE_TITLE || ""}
                  width={300}
                  height={150}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border rounded text-center py-5 max-md:mx-5">
            Няма намерени снимки
          </div>
        )}
      </div>
    </main>
  );
}
