'use client';


import LandingTitle from "./landing-title";
import LandingBenefits from "./landing-benefits";
import LandingStatistics from "./landing-statistics";
import LandingHowItWorks from "./landing-how-it-works";
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
    </>
  );
}
