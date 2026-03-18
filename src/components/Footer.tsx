"use client";

import { useLanguage } from "@/lib/i18n";
import Logo from "@/components/Logo";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  // Maintain stable group order
  const groupKeys = ["Company", "Services", "Follow"] as const;

  return (
    <footer className="bg-[#141414] px-6 lg:px-12 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Logo variant="dark" width={150} />
            </div>
            <p className="text-white/40 font-sans font-light text-sm leading-relaxed">
              {f.tagline}
            </p>
          </div>

          {/* Links */}
          {groupKeys.map((key) => {
            const group = f.groups[key];
            return (
              <div key={key}>
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-6">
                  {group.label}
                </p>
                <ul className="space-y-3">
                  {group.links.map((link) => (
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
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/25 font-sans font-light text-xs">
          <p>© {new Date().getFullYear()} Ixora Living. {f.allRightsReserved}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">{f.privacyPolicy}</a>
            <a href="#" className="hover:text-white/60 transition-colors">{f.termsOfService}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
