import "./landing.css";
import { useLandingPageEffects } from "./hooks/useLandingPageEffects";
import { LandingEmployerSection } from "./LandingEmployerSection";
import { LandingFaq } from "./LandingFaq";
import { LandingFinalCta } from "./LandingFinalCta";
import { LandingFooter } from "./LandingFooter";
import { LandingHero } from "./LandingHero";
import { LandingNav } from "./LandingNav";
import { LandingPromise } from "./LandingPromise";
import { LandingTrust } from "./LandingTrust";
import { LandingWorkerSection } from "./LandingWorkerSection";

export default function LandingPage() {
  useLandingPageEffects();
  return (
    <>
      <LandingNav />
      <LandingHero />
      <LandingPromise />
      <LandingWorkerSection />
      <LandingEmployerSection />
      <LandingTrust />
      <LandingFaq />
      <LandingFinalCta />
      <LandingFooter />
    </>
  );
}
