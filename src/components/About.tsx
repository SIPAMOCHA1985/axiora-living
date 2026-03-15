const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "18", label: "Countries Served" },
  { value: "4", label: "Design Awards" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Image side */}
        <div className="relative">
          <div className="aspect-[3/4] bg-[#D6D0C5] relative overflow-hidden">
            {/* Replace with your actual image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/about.jpg')" }}
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#C9A96E]/10 border border-[#C9A96E]/30 -z-10" />
        </div>

        {/* Content side */}
        <div>
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-6">
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] mb-8 leading-tight">
            Design That Honors
            <br />
            How You Live
          </h2>
          <p className="text-[#6B6B6B] font-sans font-light leading-relaxed mb-6">
            Axiora Living was founded on a simple belief: a beautifully designed
            space has the power to improve the quality of everyday life. We
            combine classical principles of proportion and materiality with a
            deeply personal understanding of each client&apos;s world.
          </p>
          <p className="text-[#6B6B6B] font-sans font-light leading-relaxed mb-12">
            Our team of designers, artisans, and project managers collaborate
            across disciplines to bring interiors that are both functional and
            deeply considered — spaces where living feels effortless.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 pt-10 border-t border-[#E2DDD5]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl text-[#C9A96E] mb-1">{stat.value}</p>
                <p className="text-xs tracking-widest uppercase text-[#6B6B6B] font-sans">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
