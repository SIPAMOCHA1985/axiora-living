"use client";

import { useState } from "react";
import Link from "next/link";

const SERVICE_OPTIONS = [
  { value: "kitchen-remodel", label: "Complete Kitchen Remodel" },
  { value: "bathroom-renovation", label: "Luxury Bathroom Renovation" },
  { value: "design-consultation", label: "Design Consultation" },
  { value: "flooring", label: "Hardwood & Luxury Vinyl Flooring" },
];

const PROPERTY_TYPES = ["Single Family Home", "Condominium", "Townhouse", "Multi-Family", "Commercial"];

const TIMELINES = [
  { value: "asap", label: "As Soon as Possible" },
  { value: "1-3months", label: "1 – 3 Months" },
  { value: "3-6months", label: "3 – 6 Months" },
  { value: "6plus", label: "6+ Months" },
  { value: "flexible", label: "Flexible / Just Exploring" },
];

const STYLE_OPTIONS = [
  { value: "modern", label: "Modern & Minimalist" },
  { value: "transitional", label: "Transitional" },
  { value: "traditional", label: "Classic & Traditional" },
  { value: "contemporary", label: "Contemporary" },
  { value: "rustic", label: "Rustic & Warm" },
  { value: "not-sure", label: "Not Sure Yet" },
];

const BUDGET_OPTIONS = [
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-25k", label: "$10,000 – $25,000" },
  { value: "25k-50k", label: "$25,000 – $50,000" },
  { value: "50k-100k", label: "$50,000 – $100,000" },
  { value: "100k-plus", label: "$100,000+" },
  { value: "not-sure", label: "I Need Guidance" },
];

const HEAR_ABOUT = [
  "Google Search",
  "Instagram",
  "Pinterest",
  "Houzz",
  "Referral from Friend / Family",
  "Nextdoor",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  zip: string;
  propertyType: string;
  services: string[];
  squareFootage: string;
  timeline: string;
  style: string;
  budget: string;
  hearAbout: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  zip: "",
  propertyType: "",
  services: [],
  squareFootage: "",
  timeline: "",
  style: "",
  budget: "",
  hearAbout: "",
  message: "",
};

export default function EstimatePage() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleService(val: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(val)
        ? prev.services.filter((s) => s !== val)
        : [...prev.services, val],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.services.length || !form.budget) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        backgroundColor: "#FAF9F6",
        minHeight: "100vh",
        fontFamily: "var(--font-inter), Inter, sans-serif",
        color: "#1C1C1C",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#1C1C1C",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#FAF9F6",
            textDecoration: "none",
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "20px",
            letterSpacing: "4px",
            fontWeight: 500,
          }}
        >
          IXORA LIVING
        </Link>
        <Link
          href="/"
          style={{
            color: "#C9A96E",
            textDecoration: "none",
            fontSize: "11px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          ← Back to Site
        </Link>
      </header>

      {/* Hero Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #1C1C1C 0%, #2a2a2a 100%)",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#C9A96E",
            fontSize: "11px",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            marginBottom: "20px",
            fontWeight: 300,
          }}
        >
          Orange County, FL
        </p>
        <h1
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 500,
            color: "#FAF9F6",
            lineHeight: 1.2,
            margin: "0 0 16px",
          }}
        >
          Request Your Free Estimate
        </h1>
        <p
          style={{
            color: "#6B6B6B",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: "520px",
            margin: "0 auto 32px",
          }}
        >
          Tell us about your vision. A dedicated designer will follow up within 24 hours to schedule your
          complimentary in-home consultation.
        </p>
        <div
          style={{
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {["Free Consultation", "Licensed & Insured", "Orange County, FL"].map((badge) => (
            <span
              key={badge}
              style={{
                color: "#C9A96E",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: "#C9A96E", fontSize: "14px" }}>—</span> {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Form Container */}
      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "80px 40px",
        }}
      >
        {submitted ? (
          // Thank You State
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                border: "1px solid #C9A96E",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 32px",
                fontSize: "24px",
              }}
            >
              ✓
            </div>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "36px",
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "16px",
              }}
            >
              Thank You
            </h2>
            <p
              style={{
                color: "#6B6B6B",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: "400px",
                margin: "0 auto 40px",
              }}
            >
              We've received your estimate request. A designer will reach out within 24 hours to
              arrange your complimentary consultation.
            </p>
            <Link
              href="/"
              style={{
                display: "inline-block",
                backgroundColor: "#C9A96E",
                color: "#FAF9F6",
                padding: "14px 40px",
                textDecoration: "none",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Return to Ixora Living
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Section 1 */}
            <SectionTitle number="01" title="Your Information" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 40px", marginBottom: "48px" }}>
              <FieldGroup label="Full Name *">
                <Input
                  type="text"
                  placeholder="Alexandra Smith"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  required
                />
              </FieldGroup>
              <FieldGroup label="Email Address *">
                <Input
                  type="email"
                  placeholder="alex@example.com"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  required
                />
              </FieldGroup>
              <FieldGroup label="Phone Number *">
                <Input
                  type="tel"
                  placeholder="(407) 000-0000"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  required
                />
              </FieldGroup>
              <FieldGroup label="Zip Code">
                <Input
                  type="text"
                  placeholder="32836"
                  maxLength={5}
                  value={form.zip}
                  onChange={(e) => set("zip", e.target.value)}
                />
              </FieldGroup>
            </div>

            {/* Section 2 */}
            <SectionTitle number="02" title="Your Property" />
            <div style={{ marginBottom: "48px" }}>
              <FieldGroup label="Property Type">
                <Select value={form.propertyType} onChange={(e) => set("propertyType", e.target.value)}>
                  <option value="">Select property type</option>
                  {PROPERTY_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </Select>
              </FieldGroup>

              <div style={{ marginTop: "32px" }}>
                <Label>Services Interested In *</Label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginTop: "16px",
                  }}
                >
                  {SERVICE_OPTIONS.map((svc) => (
                    <CheckOption
                      key={svc.value}
                      label={svc.label}
                      checked={form.services.includes(svc.value)}
                      onChange={() => toggleService(svc.value)}
                    />
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "32px" }}>
                <FieldGroup label="Approximate Square Footage">
                  <Input
                    type="text"
                    placeholder="e.g. 250 sq ft, 1,200 sq ft"
                    value={form.squareFootage}
                    onChange={(e) => set("squareFootage", e.target.value)}
                  />
                </FieldGroup>
              </div>
            </div>

            {/* Section 3 */}
            <SectionTitle number="03" title="Your Vision" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 40px", marginBottom: "48px" }}>
              <FieldGroup label="Preferred Timeline">
                <Select value={form.timeline} onChange={(e) => set("timeline", e.target.value)}>
                  <option value="">Select timeline</option>
                  {TIMELINES.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </Select>
              </FieldGroup>
              <FieldGroup label="Design Style">
                <Select value={form.style} onChange={(e) => set("style", e.target.value)}>
                  <option value="">Select style</option>
                  {STYLE_OPTIONS.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </Select>
              </FieldGroup>
              <FieldGroup label="Estimated Budget *">
                <Select value={form.budget} onChange={(e) => set("budget", e.target.value)} required>
                  <option value="">Select budget range</option>
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b.value} value={b.value}>{b.label}</option>
                  ))}
                </Select>
              </FieldGroup>
              <FieldGroup label="How Did You Hear About Us?">
                <Select value={form.hearAbout} onChange={(e) => set("hearAbout", e.target.value)}>
                  <option value="">Select one</option>
                  {HEAR_ABOUT.map((h) => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </Select>
              </FieldGroup>
            </div>

            {/* Message */}
            <FieldGroup label="Tell Us About Your Project">
              <textarea
                rows={5}
                placeholder="Describe your space, what you love, what you'd like to change, any specific materials or ideas you have in mind..."
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid #E2DDD5",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  padding: "12px 0",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#1C1C1C",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  outline: "none",
                  resize: "none",
                  lineHeight: 1.7,
                }}
              />
            </FieldGroup>

            {/* Error */}
            {error && (
              <p
                style={{
                  color: "#8B3A3A",
                  fontSize: "13px",
                  marginTop: "24px",
                  fontWeight: 300,
                }}
              >
                {error}
              </p>
            )}

            {/* Submit */}
            <div style={{ marginTop: "48px" }}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  backgroundColor: loading ? "#A8864A" : "#C9A96E",
                  color: "#FAF9F6",
                  border: "none",
                  padding: "18px 40px",
                  fontSize: "11px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  transition: "background-color 0.2s ease",
                }}
              >
                {loading ? "Sending…" : "Request My Free Estimate"}
              </button>
              <p
                style={{
                  textAlign: "center",
                  color: "#6B6B6B",
                  fontSize: "12px",
                  marginTop: "16px",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                }}
              >
                No commitment required. We'll be in touch within 24 hours.
              </p>
            </div>
          </form>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #E2DDD5",
          padding: "32px 40px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#6B6B6B", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          IXORA LIVING · (407) 538-8810 · INFO@IXORA-LIVING.COM · ORANGE COUNTY, FL
        </p>
      </div>
    </div>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        marginBottom: "32px",
        paddingBottom: "20px",
        borderBottom: "1px solid #E2DDD5",
      }}
    >
      <span
        style={{
          color: "#C9A96E",
          fontSize: "11px",
          letterSpacing: "0.3em",
          fontWeight: 300,
        }}
      >
        {number}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "22px",
          fontWeight: 500,
          color: "#1C1C1C",
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: "#C9A96E",
        fontSize: "10px",
        letterSpacing: "0.4em",
        textTransform: "uppercase",
        marginBottom: "8px",
        fontWeight: 400,
      }}
    >
      {children}
    </p>
  );
}

function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        width: "100%",
        background: "transparent",
        border: "none",
        borderBottom: "1px solid #E2DDD5",
        padding: "12px 0",
        fontSize: "14px",
        fontWeight: 300,
        color: "#1C1C1C",
        fontFamily: "var(--font-inter), Inter, sans-serif",
        outline: "none",
        boxSizing: "border-box",
      }}
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      style={{
        width: "100%",
        background: "transparent",
        border: "none",
        borderBottom: "1px solid #E2DDD5",
        padding: "12px 0",
        fontSize: "14px",
        fontWeight: 300,
        color: "#1C1C1C",
        fontFamily: "var(--font-inter), Inter, sans-serif",
        outline: "none",
        cursor: "pointer",
        appearance: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A96E' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 8px center",
      }}
    />
  );
}

function CheckOption({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      onClick={onChange}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer",
        padding: "14px 16px",
        border: `1px solid ${checked ? "#C9A96E" : "#E2DDD5"}`,
        backgroundColor: checked ? "#FAF7F2" : "transparent",
        transition: "all 0.2s ease",
      }}
    >
      <div
        style={{
          width: "16px",
          height: "16px",
          border: `1px solid ${checked ? "#C9A96E" : "#E2DDD5"}`,
          backgroundColor: checked ? "#C9A96E" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.2s ease",
        }}
      >
        {checked && (
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path d="M1 3l3 3 5-5" stroke="#FAF9F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span style={{ fontSize: "13px", fontWeight: 300, color: "#1C1C1C", lineHeight: 1.4 }}>
        {label}
      </span>
    </label>
  );
}
