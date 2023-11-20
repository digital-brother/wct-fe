import Box from '@mui/material/Box';
import LandingHeader from "@/app/landing/landing-header";
import LandingTitle from "@/app/landing/landing-title";
import LandingDifference from "@/app/landing/landing-difference";
import LandingMedia from "@/app/landing/landing-media";
import LandingHealthier from "@/app/landing/landing-healthier";
import LandingWelcome from "@/app/landing/landing-welcome";

export default function HomePage() {
  return (
    <Box>
        <LandingHeader/>
        <LandingTitle/>
        <LandingDifference/>
        <LandingMedia/>
        <LandingHealthier/>
        <LandingWelcome/>
    </Box>
  );
}
