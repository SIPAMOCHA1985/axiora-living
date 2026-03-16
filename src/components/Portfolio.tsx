"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

// Raw project data — categories and titles use English keys for stable filtering
const projectsData = [
  // Kitchens
  { titleKey: "Modern Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 1.jpg" },
  { titleKey: "Classic Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 2.jpg" },
  { titleKey: "Contemporary Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 3.jpg" },
  { titleKey: "Luxury Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 4.jpg" },
  { titleKey: "Open Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 5.jpg" },
  { titleKey: "Designer Kitchen", category: "Kitchens", image: "/images/kitchens/kitcehn 6.jpg" },
  { titleKey: "Elegant Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 7.jpg" },
  { titleKey: "Minimalist Kitchen", category: "Kitchens", image: "/images/kitchens/kitcehn 8.jpg" },
  { titleKey: "Bespoke Kitchen", category: "Kitchens", image: "/images/kitchens/kitcehn 9.jpg" },
  { titleKey: "Premium Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 10.jpg" },
  { titleKey: "Studio Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 14.jpg" },
  // Bathrooms
  { titleKey: "Spa Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathroom 1.jpg" },
  { titleKey: "Modern Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathroom 2.jpg" },
  { titleKey: "Luxury Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathroom 3.jpg" },
  { titleKey: "Classic Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathroom 4.jpg" },
  { titleKey: "Designer Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathrooms 6.jpg" },
  { titleKey: "Elegant Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathroom 10.jpg" },
  { titleKey: "Suite Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathrooms 11.jpg" },
  { titleKey: "Minimalist Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathrooms 12.jpg" },
  // Floors
  { titleKey: "Hardwood Floor", category: "Floors", image: "/images/floors/floors 1.jpg" },
  { titleKey: "Marble Floor", category: "Floors", image: "/images/floors/floor 3.jpg" },
  { titleKey: "Tile Floor", category: "Floors", image: "/images/floors/floors 4.jpg" },
  { titleKey: "Designer Floor", category: "Floors", image: "/images/floors/floors 5.jpg" },
  { titleKey: "Luxury Floor", category: "Floors", image: "/images/floors/floors 6.jpeg" },
  { titleKey: "Pattern Floor", category: "Floors", image: "/images/floors/floors 7.jpeg" },
  { titleKey: "Natural Floor", category: "Floors", image: "/images/floors/floors 8.jpeg" },
  { titleKey: "Premium Floor", category: "Floors", image: "/images/floors/floors 9.jpeg" },
];

// English category order to map against translated categories array
const categoryKeys = ["All", "Kitchens", "Bathrooms", "Floors"] as const;
type CategoryKey = typeof categoryKeys[number];

export default function Portfolio() {
  const { t } = useLanguage();
  const p = t.portfolio;

  const [activeKey, setActiveKey] = useState<CategoryKey>("All");

  const filtered =
    activeKey === "All"
      ? projectsData
      : projectsData.filter((pr) => pr.category === activeKey);

  const [lightbox, setLightbox] = useState<{ image: string; titleKey: string } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Map translated category label back to English key on click
  const handleCategoryClick = (idx: number) => {
    setActiveKey(categoryKeys[idx]);
  };

  return (
    <section id="portfolio" className="py-28 px-6 lg:px-12 bg-[#F0EDE6]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
            {p.sectionLabel}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] mb-10">
            {p.h2}
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {p.categories.map((cat, idx) => (
              <button
                key={categoryKeys[idx]}
                onClick={() => handleCategoryClick(idx)}
                className={`text-xs tracking-widest uppercase px-6 py-2.5 border font-sans transition-all duration-300 ${
                  activeKey === categoryKeys[idx]
                    ? "bg-[#C9A96E] border-[#C9A96E] text-white"
                    : "border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => {
            const translatedTitle =
              p.projectTitles[project.titleKey as keyof typeof p.projectTitles] ?? project.titleKey;
            return (
              <div
                key={project.image}
                onClick={() => setLightbox({ image: project.image, titleKey: project.titleKey })}
                className="group relative overflow-hidden bg-[#D6D0C5] aspect-[4/3] cursor-zoom-in"
              >
                <Image
                  src={project.image}
                  alt={translatedTitle}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase font-sans mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-lg text-white">{translatedTitle}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox */}
        {lightbox && (() => {
          const translatedTitle =
            p.projectTitles[lightbox.titleKey as keyof typeof p.projectTitles] ?? lightbox.titleKey;
          return (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light leading-none"
              >
                ×
              </button>
              <div
                className="relative max-w-5xl max-h-[85vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={lightbox.image}
                  alt={translatedTitle}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-serif text-lg">
                {translatedTitle}
              </p>
            </div>
          );
        })()}

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block text-sm tracking-widest uppercase px-10 py-4 border border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 font-sans"
          >
            {p.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
