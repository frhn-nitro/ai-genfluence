import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingNavbarNewicon } from "@/components/landing-navbar-newicon";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingNavbarNewicon />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
