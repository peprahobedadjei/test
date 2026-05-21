"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Pathways", href: "#pathways" },
  { label: "For Business", href: "#business" },
  { label: "Free Cohort", href: "#cohort" },
  { label: "Marketplace", href: "#marketplace" },
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
        scrolled ? "top-0" : "top-12.5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-[#53093a] font-bold text-xl tracking-tight">
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
                className="text-[#370627b3] text-sm font-medium hover:text-[#cd0e34] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/auth"
          className="bg-[#cd0e34] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#a80b2a] transition-colors"
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
}
