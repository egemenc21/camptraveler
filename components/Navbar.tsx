"use client";

import Image from "next/image";
import Link from "next/link";
import {NAV_LINKS} from "@/constants";
import Button from "./Button";
import {useEffect, useState} from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {isOpen && (
        <div className="flex flex-col items-center min-w-[70vw] z-[105] p-10 h-full w-full fixed left-0 top-0 opacity-90 bg-black  backdrop-blur-md rounded-lg">
          <ul className="flex flex-col items-center justify-center gap-10 text-xl h-full ">
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
      )}

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={changeIsOpen}
      />
    </nav>
  );
}

export default Navbar;
