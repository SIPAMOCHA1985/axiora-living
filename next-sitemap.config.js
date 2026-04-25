/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.ixora-living.com",
  generateRobotsTxt: true,
  alternateRefs: [
    { href: "https://www.ixora-living.com/en", hreflang: "en" },
    { href: "https://www.ixora-living.com/es", hreflang: "es" },
    { href: "https://www.ixora-living.com/pt", hreflang: "pt" },
  ],
};
