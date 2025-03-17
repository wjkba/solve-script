"use client";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [{ text: "Challenges", href: "/challenges" }];

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const isEditorPage = pathname.includes("/editor");

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#3C3C3C] bg-[#252526] px-4 py-2 text-base text-white`}
    >
      <div
        className={`${isEditorPage ? "max-w-none lg:px-10" : "lg:px-[9.75rem]"} mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-6`}
      >
        <div className="flex items-center gap-4">
          <Link className="cursor-pointer font-bold" href="/">
            SolveScript
          </Link>

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
          <nav className="absolute top-full left-0 z-50 w-full border-b border-[#3C3C3C] bg-[#252526] pb-8 md:hidden">
            <ul className="flex flex-col items-center gap-4 text-xl">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <NavLink href={link.href}>{link.text}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
