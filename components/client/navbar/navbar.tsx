import { getNavbarItems } from "@/components/client/navbar/data";
import Logo from "@/components/client/navbar/logo";
import NavbarDesktopItems from "@/components/client/navbar/navbar-desktop-items";
import NavbarMobileItems from "@/components/client/navbar/navbar-mobile-items";

export default async function Navbar() {
  const navbarItems = await getNavbarItems();

  return (
    <div className="bg-white h-16 border-b w-full sticky top-0 z-40">
      <div className="container mx-auto h-full flex justify-between items-center max-md:px-5">
        <Logo />
        <div className="hidden md:block">
          <NavbarDesktopItems navbarItems={navbarItems} />
        </div>
        <div className="block md:hidden">
          <NavbarMobileItems navbarItems={navbarItems} />
        </div>
      </div>
    </div>
  );
}