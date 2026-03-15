const services = [
  {
    number: "01",
    title: "Full Interior Design",
    description:
      "End-to-end design service covering space planning, material selection, furniture sourcing, and project management — delivering a cohesive vision from concept to completion.",
  },
  {
    number: "02",
    title: "Room Refresh",
    description:
      "A focused transformation of individual spaces. We reimagine your room with curated furniture, lighting, textiles, and accessories without a full renovation.",
  },
  {
    number: "03",
    title: "E-Design Consultations",
    description:
      "Remote design packages that include mood boards, floor plans, and a shopping list tailored to your style and budget — wherever you are.",
  },
  {
    number: "04",
    title: "Bespoke Furniture & Decor",
    description:
      "Custom-made pieces designed exclusively for your space. From statement sofas to art installations, we source and commission work that's uniquely yours.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 lg:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
              What We Offer
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C]">
              Our Services
            </h2>
          </div>
          <p className="text-[#6B6B6B] font-sans font-light max-w-sm leading-relaxed">
            Every project is approached with the same dedication to craft, detail,
            and the lives of the people who inhabit the space.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[#E2DDD5]">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-[#FAF9F6] p-10 lg:p-14 group hover:bg-[#F0EDE6] transition-colors duration-300"
            >
              <span className="text-[#C9A96E] font-serif text-4xl mb-6 block opacity-60">
                {service.number}
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
