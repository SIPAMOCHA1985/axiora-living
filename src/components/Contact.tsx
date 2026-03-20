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
