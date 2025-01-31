import Image from "next/image";

export default function Header() {
  return (
    <header className="relative h-[400px]">
      <div className="text-white container mx-auto w-full h-full flex flex-col items-center justify-center gap-5 max-md:px-5">
        <h1 className="text-4xl font-bold z-10">Тапицерски услуги</h1>
        <p className="max-w-xl text-center z-10 sm:text-lg">
          Освежете своята мека мебел с нашите професионални тапицерски услуги.
          Претапициране, ремонт и реставрация на дивани, фотьойли, столове и
          други мебели. Висококачествени материали и персонализирани решения за
          всеки интериор.
        </p>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/40 z-0"></div>
          <Image
            src="/home-header.webp"
            alt="Tapicerски услуги"
            width={1980}
            height={1200}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </header>
  );
}
