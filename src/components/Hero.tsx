"use client";

import { useLanguage } from "@/lib/i18n";
import { Language } from "@/lib/translations";

const flags: { code: Language; flag: string; label: string }[] = [
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "pt", flag: "🇧🇷", label: "Português" },
];

export default function Hero() {
  const { t, language, setLanguage } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1C1C1C]">
      {/* Background image placeholder — replace src with your actual hero image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-[#C9A96E] text-xs tracking-[0.5em] uppercase font-sans mb-6">
          {h.tagline}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
          {h.h1Line1}
          <br />
          <em className="not-italic text-[#C9A96E]">{h.h1Line2}</em>
        </h1>
        <p className="text-white/70 font-sans font-light text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
          {h.body}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="px-10 py-4 bg-[#C9A96E] text-white text-sm tracking-widest uppercase font-sans hover:bg-[#A8864A] transition-colors duration-300"
          >
            {h.cta1}
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border border-white text-white text-sm tracking-widest uppercase font-sans hover:bg-white hover:text-[#1C1C1C] transition-colors duration-300"
          >
            {h.cta2}
          </a>
        </div>
      </div>

      {/* Language flags */}
      <div className="relative z-10 mt-8 flex items-center gap-4">
        {flags.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            title={lang.label}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              language === lang.code ? "opacity-100 scale-110" : "opacity-40 hover:opacity-80"
            }`}
          >
            <span className="text-2xl">{lang.flag}</span>
            <span className={`text-[9px] tracking-widest uppercase font-sans ${
              language === lang.code ? "text-[#C9A96E]" : "text-white/50"
            }`}>{lang.label}</span>
          </button>
        ))}
      </div>

      {/* Payment badges */}
      <div className="relative z-10 mt-12 flex flex-wrap justify-center items-center gap-3 px-6">
        {h.paymentBadges.map((badge) => (
          <span
            key={badge}
            className="text-[10px] tracking-widest uppercase font-sans px-4 py-1.5 border border-white/20 text-white/50 hover:border-[#C9A96E]/50 hover:text-[#C9A96E] transition-colors duration-300"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-[0.3em] uppercase font-sans">{h.scroll}</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
