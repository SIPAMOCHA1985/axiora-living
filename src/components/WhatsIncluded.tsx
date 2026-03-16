"use client";

import { useLanguage } from "@/lib/i18n";

export default function WhatsIncluded() {
  const { t } = useLanguage();
  const w = t.whatsIncluded;

  return (
    <section id="included" className="py-28 px-6 lg:px-12 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
            {w.sectionLabel}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            {w.h2}
          </h2>
          <p className="text-white/50 font-sans font-light max-w-xl mx-auto">
            {w.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {w.items.map((item) => (
            <div
              key={item.title}
              className="bg-[#1C1C1C] p-8 hover:bg-[#252525] transition-colors duration-300 group"
            >
              <span className="text-3xl mb-5 block">{item.icon}</span>
              <h3 className="font-serif text-lg text-white mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/50 font-sans font-light text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block text-sm tracking-widest uppercase px-10 py-4 border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white transition-all duration-300 font-sans"
          >
            {w.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
