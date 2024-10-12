import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingNavbarNewicon } from "@/components/landing-navbar-newicon";
import { LandingFooter } from "@/components/landing-footer";
import { Footer } from "@/components/footer";

import "../../App.css";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingNavbarNewicon />
      <LandingHero />
      <LandingContent />
      <LandingFooter />
      <Footer />
    </div>
  );
};

export default LandingPage;
