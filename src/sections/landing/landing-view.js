'use client';


import LandingTitle from "./landing-title";
import LandingBenefits from "./landing-benefits";
import LandingStatistics from "./landing-statistics";
import LandingHowItWorks from "./landing-how-it-works";

export default function LandingView() {
  return (
    <>
      <LandingTitle/>
      <LandingStatistics/>
      <LandingBenefits/>
      <LandingHowItWorks/>
    </>
  );
}
