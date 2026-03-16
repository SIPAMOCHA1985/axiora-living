"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Kitchens", "Bathrooms", "Floors"];

const projects = [
  // Kitchens
  { title: "Modern Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 1.jpg" },
  { title: "Classic Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 2.jpg" },
  { title: "Contemporary Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 3.jpg" },
  { title: "Luxury Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 4.jpg" },
  { title: "Open Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 5.jpg" },
  { title: "Designer Kitchen", category: "Kitchens", image: "/images/kitchens/kitcehn 6.jpg" },
  { title: "Elegant Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 7.jpg" },
  { title: "Minimalist Kitchen", category: "Kitchens", image: "/images/kitchens/kitcehn 8.jpg" },
  { title: "Bespoke Kitchen", category: "Kitchens", image: "/images/kitchens/kitcehn 9.jpg" },
  { title: "Premium Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 10.jpg" },
  { title: "Studio Kitchen", category: "Kitchens", image: "/images/kitchens/kitchen 14.jpg" },
  // Bathrooms
  { title: "Spa Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathroom 1.jpg" },
  { title: "Modern Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathroom 2.jpg" },
  { title: "Luxury Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathroom 3.jpg" },
  { title: "Classic Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathroom 4.jpg" },
  { title: "Designer Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathrooms 6.jpg" },
  { title: "Elegant Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathroom 10.jpg" },
  { title: "Suite Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathrooms 11.jpg" },
  { title: "Minimalist Bathroom", category: "Bathrooms", image: "/images/bathrooms/bathrooms 12.jpg" },
  // Floors
  { title: "Hardwood Floor", category: "Floors", image: "/images/floors/floors 1.jpg" },
  { title: "Marble Floor", category: "Floors", image: "/images/floors/floor 3.jpg" },
  { title: "Tile Floor", category: "Floors", image: "/images/floors/floors 4.jpg" },
  { title: "Designer Floor", category: "Floors", image: "/images/floors/floors 5.jpg" },
  { title: "Luxury Floor", category: "Floors", image: "/images/floors/floors 6.jpeg" },
  { title: "Pattern Floor", category: "Floors", image: "/images/floors/floors 7.jpeg" },
  { title: "Natural Floor", category: "Floors", image: "/images/floors/floors 8.jpeg" },
  { title: "Premium Floor", category: "Floors", image: "/images/floors/floors 9.jpeg" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-28 px-6 lg:px-12 bg-[#F0EDE6]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] mb-10">
            Selected Projects
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs tracking-widest uppercase px-6 py-2.5 border font-sans transition-all duration-300 ${
                  active === cat
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
          {filtered.map((project) => (
            <div
              key={project.image}
              className="group relative overflow-hidden bg-[#D6D0C5] aspect-[4/3]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase font-sans mb-1">
                  {project.category}
                </p>
                <h3 className="font-serif text-lg text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block text-sm tracking-widest uppercase px-10 py-4 border border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 font-sans"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
