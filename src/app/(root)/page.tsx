import CtaSection from "@/components/sections/CtaSection";
import Hero from "@/components/sections/Hero";
import OfferSection from "@/components/sections/OfferSection";
import PriceSection from "@/components/sections/PriceSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";

export default function Home() {
  return (
    <>
        <Hero />
        <OfferSection />
        <WhyUsSection />
        <PriceSection />
        <CtaSection />
        <ReviewsSection />
    </>
  );
}
