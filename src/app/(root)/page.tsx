import CtaSection from "@/components/sections/CtaSection";
import FaqSection from "@/components/sections/FaqSection";
import Hero from "@/components/sections/Hero";
import MapSection from "@/components/sections/MapSection";
import NumbersSection from "@/components/sections/NumbersSection";
import OfferSection from "@/components/sections/OfferSection";
import PriceSection from "@/components/sections/PriceSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";

export default function Home() {
  return (
    <>
        <Hero />
        <OfferSection />
        <NumbersSection />
        <WhyUsSection />
        <PriceSection />
        <CtaSection />
        <ReviewsSection />
        <FaqSection />
        <MapSection />
    </>
  );
}
