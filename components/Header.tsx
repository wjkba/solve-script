"use client";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import NavLink from "./NavLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [{ text: "Exercises", href: "/exercises" }];

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="sticky top-0 z-50 mx-auto flex min-h-16 w-full max-w-[1440px] flex-wrap items-center justify-between gap-6 border-b border-[#3C3C3C] text-white bg-[#252526] px-4 py-4 text-base lg:min-h-20 lg:px-20 lg:py-0">
      <div className="flex items-center gap-4">
        <NavLink className="cursor-pointer font-bold" href="/">
          {/* <img
            width="90"
            height="30"
            src="ai-lab-logo.png"
            className="max-w-[5rem]"
            alt="logo"
          /> */}
          SolveScript
        </NavLink>

        <nav className="hidden md:block">
          <ul className="flex justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.text} className="mx-2">
                <NavLink href={link.href} className="block py-2 lg:py-4">
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <button className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <BiX size={32} /> : <BiMenu size={32} />}
      </button>

      <div className="hidden md:block">
        <VscAccount size={24} />
      </div>

      {isOpen && (
        <nav className="absolute left-0 top-full z-50 w-full border-b border-[#3C3C3C] bg-[#252526] pb-8 md:hidden">
          <ul className="flex flex-col items-center gap-4 text-xl">
            {navLinks.map((link) => (
              <li key={link.text}>
                <NavLink href={link.href}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
