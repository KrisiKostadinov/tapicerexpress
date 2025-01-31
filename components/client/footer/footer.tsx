export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 text-white bg-black py-5 flex flex-wrap justify-center gap-5">
      <p className="text-center">&copy; {currentYear} Всички права запазени.</p>
      <p>Уеб дизайн & изработка - <a href="https://krisidev.com">krisidev.com</a></p>
    </footer>
  );
}