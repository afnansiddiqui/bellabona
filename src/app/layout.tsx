import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { fetchHomepageData } from "@/lib/Sanity/fetchHomepage";
import { constructMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const sanityData = await fetchHomepageData();
  return constructMetadata({
    title: sanityData?.title,
    description: sanityData?.metaDescription,
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BellaBona",
              "url": "https://bellabona.com",
              "logo": "https://bellabona.com/logo-bellabona.svg",
              "description": "B2B office lunch delivery service.",
              "sameAs": [
                "https://www.linkedin.com/company/bellabona"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}

