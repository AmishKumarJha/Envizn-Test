import pricing from "../../../data/pricing";

const CTAButton = () => {
  return (
    <button
      className="
      mt-6
      bg-[#FF6A20]
      hover:bg-[#ff7b39]
      transition
      rounded-full
      px-8
      py-3
      font-semibold
      text-base
      shadow-[0_0_40px_rgba(255,106,32,.35)]
      "
    >
      {pricing.plan.button}
    </button>
  );
};

export default CTAButton;