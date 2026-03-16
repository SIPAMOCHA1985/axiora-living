"use client";

import { useLanguage } from "@/lib/i18n";

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="py-28 px-6 lg:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
              {s.sectionLabel}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C]">
              {s.h2}
            </h2>
          </div>
          <p className="text-[#6B6B6B] font-sans font-light max-w-sm leading-relaxed">
            {s.subtitle}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[#E2DDD5]">
          {s.items.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] p-10 lg:p-14 group hover:bg-[#F0EDE6] transition-colors duration-300"
            >
              <span className="text-[#C9A96E] font-serif text-4xl mb-6 block opacity-60">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl text-[#1C1C1C] mb-4 group-hover:text-[#C9A96E] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#6B6B6B] font-sans font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
