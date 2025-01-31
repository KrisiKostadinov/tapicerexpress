import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";

import { getContactsInfo } from "@/app/contacts/data";

export default async function Contacts() {
  const contactsInfo = await getContactsInfo();

  return (
    <main className="min-h-screen py-10 space-y-10 max-md:px-5">
      <h1 className="text-3xl font-semibold text-center">
        {contactsInfo.title}
      </h1>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 container mx-auto">
        <article
          className="bg-white p-5 border rounded shadow w-full h-[200px] flex flex-col justify-center items-center"
          aria-labelledby="phone-title"
        >
          <PhoneIcon className="w-14 h-14" />
          <h2 id="phone-title" className="text-2xl font-semibold mb-5">
            Телефон
          </h2>
          <p className="text-xl">
            <a
              href={`tel:${contactsInfo.phoneNumber}`}
              title={`Обаждане на ${contactsInfo.phoneNumber}`}
            >
              {contactsInfo.phoneNumber}
            </a>
          </p>
        </article>

        <article
          className="bg-white p-5 border rounded shadow w-full h-[200px] flex flex-col justify-center items-center"
          aria-labelledby="email-title"
        >
          <MailIcon className="w-14 h-14" />
          <h2 id="email-title" className="text-2xl font-semibold mb-5">
            Имейл
          </h2>
          <p className="text-xl">
            <a
              href={`mailto:${contactsInfo.emailAddress}`}
              title={`Изпрати имейл на ${contactsInfo.emailAddress}`}
            >
              {contactsInfo.emailAddress}
            </a>
          </p>
        </article>

        <article
          className="bg-white p-5 border rounded shadow w-full h-[200px] flex flex-col justify-center items-center"
          aria-labelledby="address-title"
        >
          <LocateIcon className="w-14 h-14" />
          <h2 id="address-title" className="text-2xl font-semibold mb-5">
            Адрес
          </h2>
          <p className="text-xl">{contactsInfo.address}</p>
        </article>
      </section>
      <div className="flex justify-center">
        <a
          href={contactsInfo.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Отваряне на картата в Google Maps"
          aria-label="Отваряне на картата в Google Maps"
          className="w-full block"
        >
          <div className="py-10 shadow w-full text-white text-2xl text-center duration-100 bg-blue-500 hover:bg-blue-500/90">
            Отваряне на картата
          </div>
        </a>
      </div>
    </main>
  );
}