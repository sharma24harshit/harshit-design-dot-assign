"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const links = [
  "WHO WE SERVE",
  "SOLUTIONS",
  "RESOURCES",
  "ABOUT US",
  "CONTACT US",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="relative border-b border-transparent px-3 sm:px-5 sm:py-2.5 lg:border-0 lg:px-8 lg:py-2">
      <div className="flex items-center justify-between gap-3">
        <div className="shrink-0 cursor-pointer">
          <Image
            src="/logo.svg"
            alt="logo"
            width={80}
            height={80}
            className="h-8 w-auto sm:h-9 md:h-10 lg:h-12 xl:h-[4.25rem]"
            priority
          />
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3 lg:gap-5">
          <ul className="hidden items-center gap-3 font-bold text-color lg:flex lg:gap-4 text-xs lg:text-sm xl:gap-5 xl:text-base lg:mr-6 2xl:mr-12">
            {links.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="whitespace-nowrap transition-opacity hover:opacity-70"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-4">
            <Image
              src="/search.svg"
              alt="search"
              width={30}
              height={30}
              className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 xl:h-[30px] xl:w-[30px]"
              priority
            />
            <p className="flex items-center gap-1 font-bold text-color text-[11px] sm:gap-1.5 sm:text-xs lg:text-sm xl:text-base">
              IND
              <Image
                src="/dropDownArrow.svg"
                alt="dropdown arrow"
                width={13}
                height={9}
                className="h-2 w-auto opacity-90"
                priority
              />
            </p>
            <p className="flex items-center gap-1 font-bold text-color text-[11px] sm:gap-1.5 sm:text-xs lg:text-sm xl:text-base">
              ENGLISH
              <Image
                src="/dropDownArrow.svg"
                alt="dropdown arrow"
                width={13}
                height={9}
                className="h-2 w-auto opacity-90"
                priority
              />
            </p>
          </div>

          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-color lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="nav-menu"
        className={`absolute left-0 right-0 top-full z-50 border-t border-neutral-200 bg-white shadow-lg transition-[visibility,opacity] duration-200 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-0 px-3 py-2 text-xs font-bold text-color sm:px-4 sm:text-sm">
          {links.map((label) => (
            <li key={label} className="border-b border-neutral-100 last:border-0">
              <a
                href="#"
                className="block py-2.5 transition-colors hover:bg-neutral-50 sm:py-3"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
