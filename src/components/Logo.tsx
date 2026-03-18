"use client";

interface LogoProps {
  /** "dark" = texto blanco sobre fondo oscuro (hero, footer, navbar transparente) */
  /** "light" = texto oscuro sobre fondo claro (navbar scrolled) */
  variant?: "dark" | "light";
  width?: number;
  className?: string;
}

export default function Logo({ variant = "dark", width = 200, className = "" }: LogoProps) {
  const text    = variant === "dark" ? "#FFFFFF"               : "#1C1C1C";
  const gold    = "#C9A96E";
  const goldDim = variant === "dark" ? "rgba(201,169,110,0.45)" : "rgba(201,169,110,0.55)";

  return (
    <svg
      width={width}
      viewBox="0 0 280 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ixora Living"
      role="img"
    >
      {/* ── TOP ORNAMENTAL ROW ── */}

      {/* Left diamond */}
      <path d="M28,35 L33,40 L28,45 L23,40 Z" fill={gold} />

      {/* Left thin line */}
      <line x1="37" y1="40" x2="116" y2="40" stroke={goldDim} strokeWidth="0.7" />

      {/* ── IXORA FLOWER MARK (centered at 140, 40) ── */}
      {/* Petal up */}
      <path
        d="M140,40 C138,33.5 138,28.5 140,27 C142,28.5 142,33.5 140,40"
        fill={gold}
      />
      {/* Petal right */}
      <path
        d="M140,40 C146.5,38 151.5,38 153,40 C151.5,42 146.5,42 140,40"
        fill={gold}
      />
      {/* Petal down */}
      <path
        d="M140,40 C138,46.5 138,51.5 140,53 C142,51.5 142,46.5 140,40"
        fill={gold}
      />
      {/* Petal left */}
      <path
        d="M140,40 C133.5,38 128.5,38 127,40 C128.5,42 133.5,42 140,40"
        fill={gold}
      />
      {/* Flower center dot */}
      <circle cx="140" cy="40" r="2.5" fill={gold} />

      {/* Right thin line */}
      <line x1="164" y1="40" x2="243" y2="40" stroke={goldDim} strokeWidth="0.7" />

      {/* Right diamond */}
      <path d="M252,35 L257,40 L252,45 L247,40 Z" fill={gold} />

      {/* ── WORDMARK ── */}
      <text
        x="138"
        y="95"
        fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
        fontSize="46"
        fontWeight="500"
        fill={text}
        textAnchor="middle"
        letterSpacing="12"
      >
        IXORA
      </text>

      {/* Divider line */}
      <line x1="75" y1="106" x2="202" y2="106" stroke={goldDim} strokeWidth="0.6" />

      {/* LIVING subtext */}
      <text
        x="136"
        y="126"
        fontFamily="'Inter', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="10.5"
        fontWeight="300"
        fill={gold}
        textAnchor="middle"
        letterSpacing="9"
      >
        LIVING
      </text>
    </svg>
  );
}
