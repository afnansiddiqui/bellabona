import { HeroSection } from "@/components/widgets/BellaBonaComponents/HeroSection";
import { LogosSection } from "@/components/shared/LogosSection";
import { StatsSection } from "@/components/widgets/BellaBonaComponents/StatsSection";
import { MealsSection } from "@/components/widgets/BellaBonaComponents/MealsSection";
import { PerkSection } from "@/components/widgets/BellaBonaComponents/PerkSection";
import { AppFeaturesSection } from "@/components/widgets/BellaBonaComponents/AppFeaturesSection";
import { CTABannerSection } from "@/components/shared/CTABannerSection";
import { StepsSection } from "@/components/widgets/BellaBonaComponents/StepsSection";
import { CalculatorSection } from "@/components/widgets/BellaBonaComponents/CalculatorSection";
import { TestimonialSection } from "@/components/widgets/BellaBonaComponents/TestimonialSection";
import { ContactSection } from "@/components/widgets/BellaBonaComponents/ContactSection";
import { SupportSection } from "@/components/widgets/BellaBonaComponents/SupportSection";
import { FaqSection } from "@/components/widgets/BellaBonaComponents/FaqSection";
import { fetchHomepageData } from "@/lib/Sanity/fetchHomepage";

export default async function Home() {
  const sanityData = await fetchHomepageData();

  return (
    <>
      <HeroSection data={sanityData?.heroSection} />
      <LogosSection data={sanityData?.logosSection} />
      <StatsSection data={sanityData?.statsSection} />
      <MealsSection data={sanityData?.mealsSection} />
      <PerkSection data={sanityData?.perkSection} />
      <AppFeaturesSection data={sanityData?.appFeaturesSection} />
      <CTABannerSection data={sanityData?.ctaBannerSection} />
      <StepsSection data={sanityData?.stepsSection} />
      <CalculatorSection data={sanityData?.calculatorSection} />
      <TestimonialSection data={sanityData?.testimonialSection} />
      <ContactSection data={sanityData?.contactSection} />
      <SupportSection data={sanityData?.supportSection} />
      <FaqSection data={sanityData?.faqSection} />
    </>
  );
}
