import { getServices } from "@/app/dashboard/services/data";
import { PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Services() {
  const services = await getServices("asc");

  return (
    <main className="min-h-screen container mx-auto py-10 max-sm:px-5">
      <h1 className="font-semibold text-center text-3xl sm:text-4xl md:text-7xl mb-10">
        Услуги
      </h1>
      {services.length ? (
        <ul className="grid lg:grid-cols-2 gap-5">
          {services.map((serivce, index) => (
            <li
              key={index}
              className="bg-white border shadow rounded-lg p-10 space-y-5"
            >
              <h2 className="font-semibold text-3xl sm:text-4xl">
                {serivce.title}
              </h2>
              <p className="text-muted-foreground">{serivce.description}</p>
              <ul className="flex flex-col gap-2">
                {serivce.steps.map((step, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Image
                      src={"/check-mark.png"}
                      alt="Check mark"
                      width={40}
                      height={40}
                      priority
                    />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <p>{serivce.endMessage}</p>
              <div>
                <Link
                  href={"/contacts"}
                  className="sm:w-fit text-white bg-primary hover:bg-secondary rounded-md text-lg flex items-center justify-center gap-5 py-4 px-6"
                  title="Поискайте оферта"
                >
                  <PhoneIcon />
                  <span>Поискайте оферта</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="bg-white rounded-md border shadow p-5">
          Няма намерени услуги
        </div>
      )}
    </main>
  );
}