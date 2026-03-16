"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { Language } from "@/lib/translations";

const languages: { code: Language; display: string }[] = [
  { code: "en", display: "EN" },
  { code: "es", display: "ES" },
  { code: "pt", display: "PT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { label: t.navbar.services, href: "#services" },
    { label: t.navbar.whatsIncluded, href: "#included" },
    { label: t.navbar.portfolio, href: "#portfolio" },
    { label: t.navbar.about, href: "#about" },
    { label: t.navbar.payments, href: "#payments" },
    { label: t.navbar.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FAF9F6]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-serif text-2xl tracking-widest text-[#1C1C1C] group-hover:text-[#C9A96E] transition-colors">
            IXORA
          </span>
          <span className="text-[10px] tracking-[0.35em] text-[#C9A96E] uppercase font-sans font-light">
            Living
          </span>
        </Link>

        {/* Desktop links + language switcher */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm tracking-widest uppercase text-[#6B6B6B] hover:text-[#C9A96E] transition-colors font-sans font-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language switcher */}
          <div className="flex items-center gap-0 font-sans text-[11px] tracking-widest">
            {languages.map((lang, idx) => (
              <span key={lang.code} className="flex items-center">
                {idx > 0 && (
                  <span className="text-[#6B6B6B]/40 mx-1.5 select-none">|</span>
                )}
                <button
                  onClick={() => setLanguage(lang.code)}
                  className={`uppercase transition-colors hover:text-[#C9A96E] ${
                    language === lang.code
                      ? "text-[#C9A96E] font-medium"
                      : "text-[#6B6B6B]"
                  }`}
                >
                  {lang.display}
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block text-sm tracking-widest uppercase px-6 py-2.5 border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white transition-all duration-300 font-sans"
        >
          {t.navbar.bookConsult}
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#1C1C1C] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[#1C1C1C] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[#1C1C1C] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-t border-[#E2DDD5] px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-[#6B6B6B] hover:text-[#C9A96E] transition-colors font-sans"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm tracking-widest uppercase px-6 py-2.5 border border-[#C9A96E] text-[#C9A96E] text-center hover:bg-[#C9A96E] hover:text-white transition-all duration-300 font-sans"
          >
            {t.navbar.bookConsult}
          </a>

          {/* Mobile language switcher */}
          <div className="flex items-center justify-center gap-0 font-sans text-[11px] tracking-widest pt-2 border-t border-[#E2DDD5]">
            {languages.map((lang, idx) => (
              <span key={lang.code} className="flex items-center">
                {idx > 0 && (
                  <span className="text-[#6B6B6B]/40 mx-1.5 select-none">|</span>
                )}
                <button
                  onClick={() => { setLanguage(lang.code); setMenuOpen(false); }}
                  className={`uppercase transition-colors hover:text-[#C9A96E] ${
                    language === lang.code
                      ? "text-[#C9A96E] font-medium"
                      : "text-[#6B6B6B]"
                  }`}
                >
                  {lang.display}
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
