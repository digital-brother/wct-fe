'use client';
import LandingPage from "./pages";
import LandingHeader from "./landing-header";
import LandingTitle from "./landing-title";
import LandingDifference from "./landing-difference";
import LandingMedia from "./landing-media";
import LandingHealthier from "./landing-healthier";
import LandingWelcome from "./landing-welcome";

export default function LandingView() {
  return (
    <>
      <LandingHeader/>
      <LandingTitle/>
      <LandingDifference/>
      <LandingMedia/>
      <LandingHealthier/>
      <LandingWelcome/>
    </>
  );
}
