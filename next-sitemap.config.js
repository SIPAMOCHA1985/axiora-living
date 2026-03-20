/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.ixoraliving.com",
  generateRobotsTxt: true,
  alternateRefs: [
    { href: "https://www.ixoraliving.com/en", hreflang: "en" },
    { href: "https://www.ixoraliving.com/es", hreflang: "es" },
    { href: "https://www.ixoraliving.com/pt", hreflang: "pt" },
  ],
};
