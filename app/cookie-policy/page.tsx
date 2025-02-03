import { getSettings } from "@/app/dashboard/settings/data";
import { formatDate } from "@/lib/utils";

const heading = "font-semibold text-2xl";
const ulList = "ml-10 list-decimal flex flex-col gap-2";

export default async function CookiePrivacy() {
  const settings = await getSettings();

  return (
    <main className="container mx-auto px-5 py-5 sm:py-10">
      <h1 className="mb-5 sm:mb-10 font-semibold text-2xl text-center">
        Политика на бисквитки
      </h1>
      <div className="bg-white border rounded space-y-5 p-5 sm:p-10">
        <p>
          Последна актуализация:{" "}
          {settings.companyData?.updatedAt &&
            formatDate(settings.companyData?.updatedAt)}
        </p>
        <p>
          Тази Политика за бисквитките обяснява какви бисквитки използваме на
          нашия уебсайт за тапицерски услуги, както и целта, за която те се
          използват. Сайтът не събира потребителски данни, като използването на
          бисквитки е насочено единствено към осигуряване на основната
          функционалност и подобряване на потребителското изживяване.
        </p>
        <h2 className={heading}>1. Какво представляват бисквитките?</h2>
        <p>
          Бисквитките са малки текстови файлове, които се съхраняват на
          устройството Ви (компютър, таблет или смартфон) при посещение на
          уебсайт. Те позволяват на сайта да "запомни" вашите действия и
          предпочитания (като език или регион) за определен период от време,
          така че да не се налага да ги въвеждате отново при всяко посещение.
        </p>
        <h2 className={heading}>2. Какви бисквитки използваме?</h2>
        <p>
          Нашият уебсайт използва само необходимите бисквитки, които са от
          съществено значение за правилната работа на сайта. Те се използват за:
        </p>
        <ul className={ulList}>
          <li>Поддържане на сесията Ви по време на посещението;</li>
          <li>Обезпечаване на основната функционалност и навигация в сайта.</li>
        </ul>
        <p>
          Забележка: Нашият сайт не използва аналитични, маркетингови или
          рекламни бисквитки, нито събира информация за потребителските
          дейности, тъй като не се извършва събиране на потребителски данни.
        </p>
        <h2 className={heading}>3. Управление и изтриване на бисквитките</h2>
        <p>
          Можете да контролирате и/или изтривате бисквитките според
          предпочитанията си чрез настройките на браузъра. Обърнете внимание, че
          деактивирането на необходимите бисквитки може да повлияе негативно на
          работата на сайта и да ограничи функционалността му. Някои връзки към
          ръководства за управление на бисквитките по най-популярните браузъри:
        </p>
        <ul className={ulList}>
          <li>
            <a
              href="https://policies.google.com/technologies/cookies?hl=bg"
              className="text-primary"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection"
              className="text-primary"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
              className="text-primary"
            >
              Microsoft Edge
            </a>
          </li>
          <li>
            <a
              href="https://help.apple.com/safari/mac/8.0/en.lproj/sfri11471.html"
              className="text-primary"
            >
              Safari
            </a>
          </li>
        </ul>
        <h2 className={heading}>4. Промени в тази политика</h2>
        <p>
          Можем да обновяваме тази Политика за бисквитките от време на време.
          Всички промени ще бъдат публикувани на тази страница с актуализирана
          дата на последна промяна. Препоръчваме Ви периодично да проверявате
          тази страница за да сте запознати с последните актуализации.
        </p>
        <h2 className={heading}>5. Контакт</h2>
        <p>
          Ако имате въпроси или коментари относно нашата Политика за
          бисквитките, моля, свържете се с нас на:
        </p>
        <ul className={ulList}>
          <li>Имейл: {settings.companyData?.emailAddress}</li>
          <li>Телефон: {settings.companyData?.phoneNumber}</li>
          <li>Адрес: {settings.companyData?.physicalAddress}</li>
        </ul>
        <p>
          С използването на нашия уебсайт, вие се съгласявате с нашата Политика
          за бисквитките. Ако не сте съгласни с използването на необходимите
          бисквитки, моля, настройте браузъра си съответно или се свържете с нас
          за допълнителна информация.
        </p>
      </div>
    </main>
  );
}
