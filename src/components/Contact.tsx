"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // fail silently — user sees no change, can retry
    }
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        {/* Left */}
        <div>
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-6">
            {c.sectionLabel}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
            {c.h2Line1}
            <br />
            {c.h2Line2}
          </h2>
          <p className="text-white/60 font-sans font-light leading-relaxed mb-12">
            {c.body}
          </p>

          <div className="space-y-6 text-white/60 font-sans font-light text-sm">
            <div>
              <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase mb-1">
                {c.emailLabel}
              </p>
              <p>hello@ixoraliving.com</p>
            </div>
            <div>
              <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase mb-1">
                {c.studioLabel}
              </p>
              <p>Orange County, FL 32836</p>
            </div>
            <div>
              <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase mb-1">
                {c.hoursLabel}
              </p>
              <p>{c.hoursValue}</p>
            </div>
          </div>

          <a
            href="https://wa.me/16892785555?text=Hello%2C%20I%27m%20interested%20in%20your%20interior%20design%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 px-6 py-3 border border-[#C9A96E] text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-sans hover:bg-[#C9A96E] hover:text-white transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Right — form */}
        <div>
          {submitted ? (
            <div className="h-full flex items-center justify-center text-center py-20">
              <div>
                <p className="font-serif text-3xl text-white mb-4">{c.thankYouTitle}</p>
                <p className="text-white/60 font-sans font-light">{c.thankYouSubtitle}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">
                  {c.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Alexandra Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 font-sans font-light text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">
                  {c.emailFieldLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 font-sans font-light text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                />
              </div>

              {/* Phone + Zip */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">
                    {c.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(407) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 font-sans font-light text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">
                    {c.zipLabel}
                  </label>
                  <input
                    type="text"
                    name="zip"
                    placeholder="32836"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    maxLength={5}
                    pattern="[0-9]{5}"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 font-sans font-light text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">
                  {c.serviceLabel}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white font-sans font-light text-sm focus:outline-none focus:border-[#C9A96E] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#1C1C1C]">
                    {c.selectPlaceholder}
                  </option>
                  {c.serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#1C1C1C]">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">
                  {c.budgetLabel}
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white font-sans font-light text-sm focus:outline-none focus:border-[#C9A96E] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#1C1C1C]">—</option>
                  {c.budgetOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#1C1C1C]">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">
                  {c.messageLabel}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={c.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 font-sans font-light text-sm focus:outline-none focus:border-[#C9A96E] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full py-4 bg-[#C9A96E] text-white text-sm tracking-widest uppercase font-sans hover:bg-[#A8864A] transition-colors duration-300"
              >
                {c.submitButton}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
