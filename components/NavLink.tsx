"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${className || ""} ${
        path.startsWith(href) ? "font-bold" : ""
      }`}
    >
      {children}
    </Link>
  );
}
