import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ixora Living | Interior Design & Home Decor",
  description:
    "Ixora Living crafts timeless interiors that reflect your personality. Explore our design services, portfolio, and bespoke home decor collections.",
  keywords: ["interior design", "home decor", "luxury living", "bespoke interiors", "Ixora Living"],
  metadataBase: new URL("https://www.ixoraliving.com"),
  alternates: {
    canonical: "https://www.ixoraliving.com",
  },
  openGraph: {
    title: "Ixora Living | Interior Design & Home Decor",
    description:
      "Ixora Living crafts timeless interiors that reflect your personality. Explore our design services, portfolio, and bespoke home decor collections.",
    url: "https://www.ixoraliving.com",
    siteName: "Ixora Living",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ixora Living | Interior Design & Home Decor",
    description:
      "Ixora Living crafts timeless interiors that reflect your personality. Explore our design services, portfolio, and bespoke home decor collections.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <ClientProviders>
          {children}
        </ClientProviders>
        <script src="//code.tidio.co/pwvekx2f4bvhqv1yw0dxy1bx1pacmbea.js" async></script>
      </body>
    </html>
  );
}
