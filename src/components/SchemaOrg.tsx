const schema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
  name: "Ixora Living",
  url: "https://www.ixoraliving.com",
  telephone: "+1-689-278-5555",
  email: "hello@ixoraliving.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Orlando",
    addressRegion: "FL",
    addressCountry: "US",
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
  priceRange: "$$",
  areaServed: [
    "Orlando",
    "Winter Park",
    "Dr. Phillips",
    "Windermere",
    "Lake Nona",
    "Orange County FL",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Kitchen Remodeling Orlando FL" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Bathroom Remodeling Orlando FL" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Flooring Installation Orlando FL" },
      },
    ],
  },
};

export default function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
