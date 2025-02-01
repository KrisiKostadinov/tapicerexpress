export default function Header() {
  return (
    <header className="bg-white">
      <div className="w-full h-full">
        <h1 className="uppercase text-center text-4xl lg:text-7xl font-extrabold z-10 py-10 sm:py-20">
          <span className="text-primary">Тапицерски</span>{" "}
          <span className="text-secondary">услуги</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-center pb-20">
          Освежете своята мека мебел с нашите професионални тапицерски услуги.
          Претапициране, ремонт и реставрация на дивани, фотьойли, столове и
          други мебели. Висококачествени материали и персонализирани решения за
          всеки интериор.
        </p>
      </div>
    </header>
  );
}
