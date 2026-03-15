const footerLinks = {
  Company: ["About", "Services", "Portfolio", "Contact"],
  Services: ["Full Interior Design", "Room Refresh", "E-Design", "Bespoke"],
  Follow: ["Instagram", "Pinterest", "LinkedIn", "Houzz"],
};

export default function Footer() {
  return (
    <footer className="bg-[#141414] px-6 lg:px-12 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex flex-col leading-none mb-6">
              <span className="font-serif text-2xl tracking-widest text-white">AXIORA</span>
              <span className="text-[10px] tracking-[0.35em] text-[#C9A96E] uppercase font-sans font-light">
                Living
              </span>
            </div>
            <p className="text-white/40 font-sans font-light text-sm leading-relaxed">
              Crafting timeless interiors for the way you live.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-6">
                {group}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white font-sans font-light text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/25 font-sans font-light text-xs">
          <p>© {new Date().getFullYear()} Axiora Living. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
