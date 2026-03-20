import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import SchemaOrg from "@/components/SchemaOrg";

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
  title: "Ixora Living | Kitchen & Bathroom Remodeling Orlando, FL",
  description:
    "Luxury kitchen, bathroom & floor remodeling in Orlando, FL. Licensed & insured. Free estimate. Call (689) 278-5555",
  keywords: [
    "kitchen remodeling orlando",
    "bathroom remodeling orlando fl",
    "luxury remodel orange county florida",
    "floor installation orlando",
    "kitchen renovation orlando",
    "bathroom renovation orlando",
    "Ixora Living",
  ],
  metadataBase: new URL("https://www.ixoraliving.com"),
  alternates: {
    canonical: "https://www.ixoraliving.com",
  },
  openGraph: {
    title: "Ixora Living | Remodeling Orlando FL",
    description:
      "Luxury kitchen & bath remodeling specialists in Orange County, Florida.",
    url: "https://www.ixoraliving.com",
    siteName: "Ixora Living",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ixora Living | Kitchen & Bathroom Remodeling Orlando, FL",
    description:
      "Luxury kitchen, bathroom & floor remodeling in Orlando, FL. Licensed & insured. Free estimate.",
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
        <SchemaOrg />
        <ClientProviders>
          {children}
        </ClientProviders>
        <script src="//code.tidio.co/pwvekx2f4bvhqv1yw0dxy1bx1pacmbea.js" async></script>
      </body>
    </html>
  );
}
