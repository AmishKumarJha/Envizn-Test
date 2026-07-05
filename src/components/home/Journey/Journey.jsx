import Container from "../../common/Container";

import JourneyHeader from "./JourneyHeader";
import TimelineTop from "./TimelineTop";
import JourneyTimeline from "./JourneyTimeline";

import BgWave from "../../../assets/images/journey/bg-wave.png";
import BgRibbon from "../../../assets/images/journey/bg-ribbons.png";
import BgCubes from "../../../assets/images/journey/bg-cubes.png";
import Stars from "../../../assets/images/journey/stars.png";

const Journey = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-40 bg-[#09040A]">

      {/* Stars */}
      <img
        src={Stars}
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          opacity-20
          pointer-events-none
          select-none
        "
      />

      {/* Top Metallic Wave */}
      <img
        src={BgWave}
        alt=""
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[1600px]
          opacity-20
          pointer-events-none
          blur-[1px]
        "
      />

      {/* Cubes */}
      <img
        src={BgCubes}
        alt=""
        className="
          absolute
          top-[280px]
          left-1/2
          -translate-x-1/2
          w-[1200px]
          opacity-12
          pointer-events-none
        "
      />

      {/* Bottom Ribbon */}
      <img
        src={BgRibbon}
        alt=""
        className="
          absolute
          bottom-[-200px]
          left-1/2
          -translate-x-1/2
          w-[1700px]
          opacity-15
          pointer-events-none
        "
      />

      {/* Orange Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,106,32,0.12),transparent_70%)]
        "
      />

      <div className="relative z-10">
        <Container>
          <JourneyHeader />
          <TimelineTop />
          <JourneyTimeline />
        </Container>
      </div>

    </section>
  );
};

export default Journey;