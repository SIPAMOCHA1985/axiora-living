"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your form backend (e.g. Resend, Formspree, or a Next.js API route)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        {/* Left */}
        <div>
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-sans mb-6">
            Let&apos;s Work Together
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
            Begin Your
            <br />
            Design Journey
          </h2>
          <p className="text-white/60 font-sans font-light leading-relaxed mb-12">
            Whether you have a clear vision or you&apos;re just beginning to imagine
            your dream space, we&apos;d love to hear from you. Book a complimentary
            30-minute consultation to get started.
          </p>

          <div className="space-y-6 text-white/60 font-sans font-light text-sm">
            <div>
              <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase mb-1">Email</p>
              <p>hello@ixoraliving.com</p>
            </div>
            <div>
              <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase mb-1">Studio</p>
              <p>12 Mayfair Square, London, W1K 1AA</p>
            </div>
            <div>
              <p className="text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase mb-1">Hours</p>
              <p>Monday – Friday, 9am – 6pm GMT</p>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div>
          {submitted ? (
            <div className="h-full flex items-center justify-center text-center py-20">
              <div>
                <p className="font-serif text-3xl text-white mb-4">Thank You</p>
                <p className="text-white/60 font-sans font-light">
                  We&apos;ll be in touch within 24 hours to arrange your consultation.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", label: "Your Name", type: "text", placeholder: "Alexandra Smith" },
                { name: "email", label: "Email Address", type: "email", placeholder: "alex@example.com" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 font-sans font-light text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white font-sans font-light text-sm focus:outline-none focus:border-[#C9A96E] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#1C1C1C]">Select a service</option>
                  <option value="full-design" className="bg-[#1C1C1C]">Full Interior Design</option>
                  <option value="room-refresh" className="bg-[#1C1C1C]">Room Refresh</option>
                  <option value="e-design" className="bg-[#1C1C1C]">E-Design Consultation</option>
                  <option value="bespoke" className="bg-[#1C1C1C]">Bespoke Furniture & Decor</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] font-sans mb-2">
                  Tell Us About Your Project
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Describe your space, style preferences, timeline..."
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
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
