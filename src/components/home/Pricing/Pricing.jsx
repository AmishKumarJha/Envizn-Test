import Container from "../../common/Container";

import PricingHeader from "./PricingHeader";
import PricingCard from "./PricingCard";

import BgSpace from "../../../assets/images/pricing/bg-space.png";
import Stars from "../../../assets/images/pricing/stars.png";

const Pricing = () => {
  return (
    <section id="pricing" className="relative overflow-hidden py-20 bg-[#09040A]">

      {/* Background */}

      <img
        src={BgSpace}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      <img
        src={Stars}
        className="absolute top-0 right-0 w-[650px] opacity-60"
      />

      <div className="absolute inset-0 bg-[#09040A]/60" />

      <div className="relative z-10">

        <Container>

          <PricingHeader />

          <PricingCard />

        </Container>

      </div>

    </section>
  );
};

export default Pricing;