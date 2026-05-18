import { LandingEmployerSection } from "./employer/LandingEmployerSection";
import { LandingFaq } from "./LandingFaq";
import { LandingFinalCta } from "./LandingFinalCta";
import { LandingFooter } from "./LandingFooter";
import { LandingHero } from "./LandingHero";
import { LandingNav } from "./LandingNav";
import { LandingPromise } from "./LandingPromise";
import { LandingWorkerSection } from "./worker/LandingWorkerSection";
import { useLandingPageEffects } from "../utils/useLandingPageEffects";
import "./landing.css";

export default function LandingPage() {
  useLandingPageEffects();
  return (
    <>
      <LandingNav />
      <LandingHero />
      <LandingPromise />
      <LandingWorkerSection />
      <LandingEmployerSection />
      <LandingFaq />
      <LandingFinalCta />
      <LandingFooter />
    </>
  );
}
