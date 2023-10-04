'use client';


import LandingCTA from "./landing-cta";
import LandingTitle from "./landing-title";
import LandingBenefits from "./landing-benefits";
import LandingStatistics from "./landing-statistics";
import LandingTestimonial from "./landing-testimonial";
import LandingHowItWorks from "./landing-how-it-works";
import LandingSubscription from "./landing-subscription";
import LandingCertifications from "./landing-certifications";
import LandingPremiumQuality from "./landing-premium-quality";

export default function LandingView() {
  return (
    <>
      <LandingTitle/>
      <LandingStatistics/>
      <LandingBenefits/>
      <LandingHowItWorks/>
      <LandingPremiumQuality/>
      <LandingCertifications/>
      <LandingTestimonial/>
      <LandingCTA/>
      <LandingSubscription/>
    </>
  );
}
