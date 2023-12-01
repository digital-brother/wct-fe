import Box from '@mui/material/Box';
import LandingHeader from "@/app/landing/landing-header";
import LandingTitle from "@/app/landing/landing-title";
import LandingDifference from "@/app/landing/landing-difference";
import LandingMedia from "@/app/landing/landing-media";
import LandingHealthier from "@/app/landing/landing-healthier";
import LandingWelcome from "@/app/landing/landing-welcome";
import LandingHowItWorks from "@/app/landing/landing-howitworks";
import LandingPremiumQuality from "@/app/landing/landing-premiumquality";
import LandingSatisfiedSupplement from "@/app/landing/landing-satisfiedsupplement";
import LandingPersonalizedPlans from "@/app/landing/landing-personalizedplans";

export default function HomePage() {
    return (
        <Box>
            <LandingHeader/>
            <LandingTitle/>
            <LandingDifference/>
            <LandingMedia/>
            <LandingHealthier/>
            <LandingWelcome/>
            <LandingHowItWorks/>
            <LandingPremiumQuality/>
            <LandingSatisfiedSupplement/>
            <LandingPersonalizedPlans/>
        </Box>
    );
}
