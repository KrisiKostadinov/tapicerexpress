import Link from "next/link";

import { getServices } from "@/app/dashboard/services/data";

export default async function Dashboard() {
  const services = await getServices("desc");

  return (
    <>
      <h1 className="text-2xl font-semibold">Табло</h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <li className="bg-white p-5 rounded-md border shadow text-2xl font-semibold">
          <Link
            href={"/dashboard/services"}
            className="text-2xl font-semibold flex justify-between items-center"
          >
            <span>Услуги</span>
            <span>({services.length})</span>
          </Link>
        </li>
        <li className="bg-white p-5 rounded-md border shadow text-2xl font-semibold">
          <Link
            href={"/dashboard/settings"}
            className="text-2xl font-semibold flex justify-between items-center"
          >
            <span>Настройки</span>
          </Link>
        </li>
      </ul>
    </>
  );
}