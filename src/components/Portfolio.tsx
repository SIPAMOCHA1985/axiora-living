const projects = [
  {
    title: "The Birchwood Residence",
    category: "Full Interior Design",
    location: "London, UK",
    image: "/images/portfolio-1.jpg",
    span: "col-span-1 md:col-span-2",
  },
  {
    title: "Studio Loft — Marais",
    category: "Room Refresh",
    location: "Paris, France",
    image: "/images/portfolio-2.jpg",
    span: "col-span-1",
  },
  {
    title: "Coastal Retreat",
    category: "Bespoke Furniture",
    location: "Amalfi, Italy",
    image: "/images/portfolio-3.jpg",
    span: "col-span-1",
  },
  {
    title: "The Pines — Master Suite",
    category: "E-Design",
    location: "New York, USA",
    image: "/images/portfolio-4.jpg",
    span: "col-span-1",
  },
  {
    title: "Kensington Townhouse",
    category: "Full Interior Design",
    location: "London, UK",
    image: "/images/portfolio-5.jpg",
    span: "col-span-1 md:col-span-2",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-6 lg:px-12 bg-[#F0EDE6]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C]">
            Selected Projects
          </h2>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`${project.span} group relative overflow-hidden bg-[#D6D0C5] aspect-[4/3] cursor-pointer`}
            >
              {/* Image placeholder — replace with next/image when real photos are available */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase font-sans mb-1">
                  {project.category} · {project.location}
                </p>
                <h3 className="font-serif text-xl text-white">{project.title}</h3>
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
