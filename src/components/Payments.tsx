"use client";

import { useLanguage } from "@/lib/i18n";

const cryptos = [
  { name: "Bitcoin", symbol: "BTC", color: "#F7931A" },
  { name: "Ethereum", symbol: "ETH", color: "#627EEA" },
  { name: "USDC", symbol: "USDC", color: "#2775CA" },
  { name: "USDT", symbol: "USDT", color: "#26A17B" },
  { name: "Solana", symbol: "SOL", color: "#9945FF" },
  { name: "Litecoin", symbol: "LTC", color: "#BFBBBB" },
];

export default function Payments() {
  const { t } = useLanguage();
  const p = t.payments;

  return (
    <section id="payments" className="py-28 px-6 lg:px-12 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
            {p.sectionLabel}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            {p.h2}
          </h2>
          <p className="text-white/50 font-sans font-light max-w-xl mx-auto">
            {p.subtitle}
          </p>
        </div>

        {/* Payment methods grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mb-px">
          {p.paymentMethods.map((method) => (
            <div key={method.category} className="bg-[#1C1C1C] p-8 hover:bg-[#252525] transition-colors duration-300">
              <span className="text-3xl mb-4 block">{method.icon}</span>
              <h3 className="font-serif text-lg text-white mb-4">{method.category}</h3>
              <ul className="space-y-2">
                {method.items.map((item) => (
                  <li key={item} className="text-white/50 font-sans font-light text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C9A96E] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Crypto section */}
        <div className="mt-px bg-[#141414] p-10 lg:p-14">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10">
            <div className="lg:w-1/3">
              <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
                {p.cryptoLabel}
              </p>
              <h3 className="font-serif text-3xl text-white mb-4">
                {p.cryptoH3Line1}
                <br />
                <span className="text-[#C9A96E]">{p.cryptoH3Line2}</span>
              </h3>
              <p className="text-white/50 font-sans font-light text-sm leading-relaxed">
                {p.cryptoDesc}
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-3 sm:grid-cols-6 gap-4">
              {cryptos.map((crypto) => (
                <div
                  key={crypto.symbol}
                  className="flex flex-col items-center gap-2 p-4 border border-white/10 hover:border-[#C9A96E]/50 transition-colors duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white font-sans"
                    style={{ backgroundColor: crypto.color + "33", border: `1px solid ${crypto.color}66` }}
                  >
                    <span style={{ color: crypto.color }}>{crypto.symbol.slice(0, 2)}</span>
                  </div>
                  <span className="text-white/60 text-[10px] tracking-widest uppercase font-sans group-hover:text-white/90 transition-colors">
                    {crypto.symbol}
                  </span>
                  <span className="text-white/30 text-[9px] font-sans">{crypto.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Financing CTA */}
        <div className="mt-px bg-[#C9A96E]/10 border border-[#C9A96E]/30 p-8 lg:p-12 text-center">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-4">
            {p.financingLabel}
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
            {p.financingH3}
          </h3>
          <p className="text-white/50 font-sans font-light mb-8 max-w-lg mx-auto">
            {p.financingDesc}
          </p>
          <a
            href="#contact"
            className="inline-block text-sm tracking-widest uppercase px-10 py-4 bg-[#C9A96E] text-white hover:bg-[#A8864A] transition-colors duration-300 font-sans"
          >
            {p.financingCta}
          </a>
        </div>
      </div>
    </section>
  );
}
