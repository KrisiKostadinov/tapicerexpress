import { NavbarItem as NavbarItemType } from "@/components/client/navbar/types";
import { NavbarItem } from "@/components/client/navbar/navbar-item";

type NavbarItemsProps = {
  navbarItems: NavbarItemType[];
};

export default function NavbarDesktopItems({ navbarItems }: NavbarItemsProps) {
  return (
    <nav>
      <ul className="flex gap-1">
        {navbarItems.length ? (
          navbarItems.map((navbarItem, index) => (
            <NavbarItem key={index} item={navbarItem} />
          ))
        ) : (
          <div>Няма елементи</div>
        )}
      </ul>
    </nav>
  );
}