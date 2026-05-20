"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Pathways", href: "#" },
  { label: "For Business", href: "#" },
  { label: "Free Cohort", href: "#" },
  { label: "Marketplace", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 bg-white duration-300 ${
        scrolled ? "top-0" : "top-[50px]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-[#370627] font-bold text-xl tracking-tight">
            Ascendency
          </span>
          <span className="text-gray-400 text-xs font-normal">
            by Because She Can
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-gray-700 text-sm font-medium hover:text-[#cd0e34] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#"
          className="bg-[#cd0e34] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#a80b2a] transition-colors"
        >
          Dashboard
        </Link>
      </nav>
    </header>
  );
}