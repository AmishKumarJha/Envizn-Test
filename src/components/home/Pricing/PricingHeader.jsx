import pricing from "../../../data/pricing";

const PricingHeader = () => {
  return (
    <div className="text-center">

      <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold">
        <span className="text-[#FF6A20]">{pricing.heading}</span>{" "}
        {pricing.highlight}
        <br />
        {pricing.heading2}
      </h2>

      <p className="mt-5 text-[#B9B9B9] text-lg max-w-2xl mx-auto leading-relaxed">
        {pricing.subtitle}
      </p>

    </div>
  );
};

export default PricingHeader;