import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { fetchHomepageData } from "@/lib/Sanity/fetchHomepage";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sanityData = await fetchHomepageData();

  return (
    <>
      <Navbar 
        data={sanityData?.navbar} 
        globalLogoUrl={sanityData?.globalLogoUrl}
        globalLogoAlt={sanityData?.globalLogoAlt}
      />
      <main className="flex-1">{children}</main>
      <Footer data={sanityData?.footer} />
    </>
  );
}
