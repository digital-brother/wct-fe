'use client';


import LandingTitle from "./landing-title";
import LandingBenefits from "./landing-benefits";
import LandingStatistics from "./landing-statistics";
import LandingHowItWorks from "./landing-how-it-works";
import LandingPremiumQuality from "./landing-premium-quality";

export default function LandingView() {
  return (
    <>
      <LandingTitle/>
      <LandingStatistics/>
      <LandingBenefits/>
      <LandingHowItWorks/>
      <LandingPremiumQuality/>
    </>
  );
}
