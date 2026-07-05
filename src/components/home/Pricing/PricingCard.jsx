import pricing from "../../../data/pricing";

import FeatureList from "./FeatureList";
import CTAButton from "./CTAButton";

const PricingCard = () => {
  return (
    <div className="relative mt-12 rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-xl overflow-hidden">

      {/* Orange Glow */}
      <div className="absolute left-[-120px] bottom-[-120px] w-[450px] h-[450px] rounded-full bg-[#FF6A20] opacity-20 blur-[170px]" />

      {/* Blue Glow */}
      <div className="absolute right-[-120px] top-[-120px] w-[450px] h-[450px] rounded-full bg-[#4EA6FF] opacity-20 blur-[170px]" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 px-8 py-10 lg:px-12 lg:py-12">

        {/* LEFT */}
        <div className="flex flex-col justify-center items-center">

          <p className="text-lg mb-3">
            {pricing.plan.name}
          </p>

          <div className="flex items-start">
            <span className="text-3xl font-semibold mt-3">€</span>
            <span className="text-6xl font-bold">500</span>
            <span className="line-through text-xl text-white/60 mt-2 ml-2">
              {pricing.plan.oldPrice}
            </span>
          </div>

          <p className="mt-2 text-lg text-white/70">
            {pricing.plan.offer}
          </p>

          <div className="w-full h-px bg-white/10 my-6" />

          <CTAButton />

        </div>

        {/* RIGHT */}
        <FeatureList />

      </div>

    </div>
  );
};

export default PricingCard;