import Image from "next/image";
import Link from "next/link";

import { env, LOGO_IMAGE } from "@/constants";

export default function Logo() {
  return (
    <Link
      href={"/"}
      aria-label={env.WEBSITE_TITLE || "Начална страница"}
      prefetch={false}
    >
      <Image
        src={LOGO_IMAGE || `/logo.png`}
        alt={env.WEBSITE_TITLE || "Website Logo"}
        width={160}
        height={80}
        className="w-[80px] h-[40px] object-contain"
        priority
      />
    </Link>
  );
}
