import Image from "next/image";

import { env, LOGO_IMAGE } from "@/constants";

export default function Logo() {
  return (
    <a
      href={"/"}
      aria-label={env.WEBSITE_TITLE || "Начална страница"}
    >
      <Image
        src={LOGO_IMAGE || `/logo.png`}
        alt={env.WEBSITE_TITLE || "Website Logo"}
        width={280}
        height={140}
        className="w-[160px] h-[80px] object-contain"
        priority
      />
    </a>
  );
}
