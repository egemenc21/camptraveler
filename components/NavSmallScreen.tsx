import React from 'react';
import {NAV_LINKS} from "@/constants";
import Link from "next/link";
import Image from "next/image";

function NavSmallScreen({changeIsOpen}: {changeIsOpen: () => void}) {
  return (
    <div
      className="flex flex-col items-center min-w-[70vw] z-[105] p-10 h-full w-full fixed left-0 top-0 opacity-90 bg-black  backdrop-blur-md rounded-lg">
      <ul
        className="flex flex-col items-center justify-center gap-10 text-xl h-full ">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}

        <Image
          src="close.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={changeIsOpen}
        />
      </ul>
    </div>
  );
}

export default NavSmallScreen;