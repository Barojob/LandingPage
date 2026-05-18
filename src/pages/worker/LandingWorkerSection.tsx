import { Container } from "../../components/Container";
import { WorkerAudienceHero } from "./WorkerAudienceHero";
import { WorkerBrandIntro } from "./WorkerBrandIntro";
import { WorkerFeatureCategory } from "./WorkerFeatureCategory";
import { WorkerFeatureJobAlert } from "./WorkerFeatureJobAlert";
import { WorkerFeatureLocation } from "./WorkerFeatureLocation";
import { WorkerFeatureMatchingScore } from "./WorkerFeatureMatchingScore";

export function LandingWorkerSection() {
  return (
    <section className="audience audience--worker" id="worker">
      <Container>
        <WorkerAudienceHero />
        <WorkerBrandIntro />
        <div className="features-stack">
          <WorkerFeatureLocation />
          <WorkerFeatureCategory />
          <WorkerFeatureMatchingScore />
          <WorkerFeatureJobAlert />
        </div>
      </Container>
    </section>
  );
}
