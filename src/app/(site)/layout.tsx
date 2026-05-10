import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { fetchHomepageData } from "@/lib/Sanity/fetchHomepage";
import { SmoothScroll } from '@/components/layout/SmoothScroll';

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sanityData = await fetchHomepageData();

  return (
    <SmoothScroll>
      <Navbar 
        data={sanityData?.navbar} 
        globalLogoUrl={sanityData?.globalLogoUrl}
        globalLogoAlt={sanityData?.globalLogoAlt}
      />
      <main className="flex-1">{children}</main>
      <Footer data={sanityData?.footer} />
    </SmoothScroll>
  );
}
