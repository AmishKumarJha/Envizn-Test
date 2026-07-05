import Container from "../../common/Container";

import BackgroundEffects from "./BackgroundEffects";
import BenefitsBg from "../../../assets/images/benefits-bg.png";
import FeatureHeader from "./FeatureHeader";
import FloatingAvatars from "./FloatingAvatars";
import FeatureCards from "./FeatureCards";

const Features = () => {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 bg-[#09040A]">

      {/* Background Image */}
      <img
        src={BenefitsBg}
        alt="Benefits Background"
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-full
          h-full
          object-cover
          object-bottom
          opacity-90
          pointer-events-none
          select-none
          -z-10
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09040A]/10 via-[#09040A]/20 to-[#09040A] -z-10" />

      {/* Existing Background Effects */}
      <BackgroundEffects />

      {/* Content */}
      <div className="relative z-20">
        <Container>

          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-20">

            <FeatureHeader />

            <FloatingAvatars />

          </div>

          {/* Bottom Section */}
          <div className="mt-24">

            <FeatureCards />

          </div>

        </Container>
      </div>

    </section>
  );
};

export default Features;