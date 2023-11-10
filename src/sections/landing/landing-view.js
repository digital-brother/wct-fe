'use client';
import LandingPage from "./pages";
import V3 from "./landing-title";
import LandingHeader from "./landing-header";
import LandingTitle from "./landing-title-v2";
import LandingDifference from "./landing-difference";
import LandingMedia from "./landing-media";
import LandingHealthier from "./landing-healthier";

export default function LandingView() {
  return (
    <>
      {/*<LandingPage/>*/}
      <LandingHeader/>
      <LandingTitle/>
      <LandingDifference/>
      <LandingMedia/>
      <LandingHealthier/>
      {/*<V3/>*/}
    </>
  );
}
