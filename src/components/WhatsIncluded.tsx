const included = [
  {
    icon: "✏️",
    title: "Professional Designer",
    description:
      "Work one-on-one with a certified interior designer dedicated to your project from start to finish.",
  },
  {
    icon: "📐",
    title: "3D Floor Plan Renderings",
    description:
      "See exactly how your space will look before any work begins — detailed 3D visualizations of your project.",
  },
  {
    icon: "🎨",
    title: "Custom Color Palettes",
    description:
      "Curated color combinations for walls, finishes, and accents tailored to your style and natural light.",
  },
  {
    icon: "🚪",
    title: "Cabinet Color Guidance",
    description:
      "Expert recommendations on cabinet colors, hardware finishes, and combinations that elevate your kitchen or bathroom.",
  },
  {
    icon: "🛒",
    title: "Sourcing Guidance",
    description:
      "We guide you on where to buy floors, cabinets, and materials — the best quality for your budget.",
  },
  {
    icon: "🏗️",
    title: "Demolition & Cleanup",
    description:
      "Full demolition service and debris removal included — we leave your space clean and ready for installation.",
  },
  {
    icon: "📋",
    title: "City Permits",
    description:
      "We handle all permit applications and approvals with the city so you don't have to worry about compliance.",
  },
  {
    icon: "💬",
    title: "Free Estimates",
    description:
      "No-cost consultations and project estimates — know exactly what to expect before committing to anything.",
  },
];

export default function WhatsIncluded() {
  return (
    <section id="included" className="py-28 px-6 lg:px-12 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
            Full Service
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Everything Included
          </h2>
          <p className="text-white/50 font-sans font-light max-w-xl mx-auto">
            From the first sketch to the final detail — we handle every step so
            you can focus on enjoying your new space.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {included.map((item) => (
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
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
