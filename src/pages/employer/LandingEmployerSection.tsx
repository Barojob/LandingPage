import { Container } from "../../components/Container";
import { EmployerAudienceHero } from "./EmployerAudienceHero";
import { EmployerBrandIntro } from "./EmployerBrandIntro";
import { EmployerFeatureDirectPick } from "./EmployerFeatureDirectPick";
import { EmployerFeatureLiveMap } from "./EmployerFeatureLiveMap";
import { EmployerFeatureSmartMatch } from "./EmployerFeatureSmartMatch";

export function LandingEmployerSection() {
  return (
    <section className="audience audience--employer" id="employer">
      <Container>
        <EmployerAudienceHero />
        <EmployerBrandIntro />
        <div className="features-stack">
          <EmployerFeatureSmartMatch />
          <EmployerFeatureDirectPick />
          <EmployerFeatureLiveMap />
        </div>
      </Container>
    </section>
  );
}
