import { ChevronRight, MailIcon, Map, MapPin, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { LOGO_DARK_IMAGE } from "@/constants";
import { getContactsInfo } from "@/app/contacts/data";

export default async function Footer() {
  const contactsInfo = await getContactsInfo();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sticky">
      <div className="bg-black max-md:px-5 max-md:pt-5 pt-10">
        <ul className="container mx-auto pb-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <li>
            <h2 className="text-white mb-5 text-2xl font-semibold">
              Тапицерски услуги
            </h2>
            <Link href={"/"} className="block my-5">
              <Image
                src={LOGO_DARK_IMAGE}
                alt=""
                width={600}
                height={200}
                className="max-w-sm:px-5 sm:max-w-[300px]"
              />
            </Link>
            <p className="text-white">
              Освежете своята мека мебел с нашите професионални тапицерски
              услуги.
            </p>
          </li>
          <li>
            <h2 className="text-white mb-5 text-2xl font-semibold">Услуги</h2>
            <ul className="text-white flex flex-col gap-5">
              <li>
                <Link href={"/services"} className="flex gap-2">
                  <ChevronRight />
                  <span>Тапициране на столове</span>
                </Link>
              </li>
              <li>
                <Link href={"/services"} className="flex gap-2">
                  <ChevronRight />
                  <span>Тапициране на канапета</span>
                </Link>
              </li>
              <li>
                <Link href={"/services"} className="flex gap-2">
                  <ChevronRight />
                  <span>Тапициране на дивани</span>
                </Link>
              </li>
              <li>
                <Link href={"/services"} className="flex gap-2">
                  <ChevronRight />
                  <span>Тапициране на таборетки</span>
                </Link>
              </li>
              <li>
                <Link href={"/services"} className="flex gap-2">
                  <ChevronRight />
                  <span>Тапициране на фотьойли</span>
                </Link>
              </li>
              <li>
                <Link href={"/services"} className="flex gap-2">
                  <ChevronRight />
                  <span>Тапициране на кухненски ъгли</span>
                </Link>
              </li>
              <li>
                <Link href={"/services"} className="flex gap-2">
                  <ChevronRight />
                  <span>Тапициране на антикварни мебели</span>
                </Link>
              </li>
              <li>
                <Link href={"/services"} className="flex gap-2">
                  <ChevronRight />
                  <span>Показване на всички</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="text-white mb-5 text-2xl font-semibold">Правни</h2>
            <ul className="text-white flex flex-col gap-5">
              <li>
                <Link href={"/cookie-policy"} className="flex gap-2">
                  <ChevronRight />
                  <span>Политика на бисквитките</span>
                </Link>
              </li>
              <li>
                <Link href={"/privacy-policy"} className="flex gap-2">
                  <ChevronRight />
                  <span>Политика на поверителност</span>
                </Link>
              </li>
              <li>
                <Link href={"/terms"} className="flex gap-2">
                  <ChevronRight />
                  <span>Общи условия</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="text-white mb-5 text-2xl font-semibold">Контакти</h2>
            <ul className="text-white flex flex-col gap-4">
              <li>
                <a href={`tel:${process.env.WEBSITE_PHONE}`} className="flex gap-2">
                  <PhoneIcon />
                  <span>{process.env.WEBSITE_PHONE}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${process.env.WEBSITE_EMAIL}`} className="flex gap-2">
                  <MailIcon />
                  <span>{process.env.WEBSITE_EMAIL}</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <Map />
                  <span>{contactsInfo.city}</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <MapPin />
                  <span>{contactsInfo.physicalAddress}</span>
                </a>
              </li>
              <li>
                <a href="/contacts#google-map" className="flex gap-2">
                  <ChevronRight />
                  <span>Google Map</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="text-white bg-black/90 py-5 flex flex-wrap justify-center">
        <span className="text-center">
          &copy; {currentYear} Всички права запазени.
        </span>
        <span>
          Уеб дизайн & изработка -{" "}
          <a href="https://krisidev.com">krisidev.com</a>
        </span>
      </div>
    </footer>
  );
}
