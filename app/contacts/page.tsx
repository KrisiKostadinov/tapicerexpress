import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";

import { getContactsInfo } from "@/app/contacts/data";
import { Button } from "@/components/ui/button";

export default async function Contacts() {
  const contactsInfo = await getContactsInfo();

  return (
    <main className="bg-white min-h-screen py-10 space-y-10 max-md:px-5">
      <h1 className="text-3xl font-semibold text-center">
        {contactsInfo.websiteTitle}
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
          <p className="text-xl">{contactsInfo.physicalAddress}</p>
        </article>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23621.75585729732!2d23.101145552715863!3d42.26316271727147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aae824073f9ac1%3A0x400a01269bf51c0!2z0JTRg9C_0L3QuNGG0LA!5e0!3m2!1sbg!2sbg!4v1738416727090!5m2!1sbg!2sbg"
        width="100%"
        height="600"
        loading="lazy"
        id="google-map"
      ></iframe>
    </main>
  );
}
