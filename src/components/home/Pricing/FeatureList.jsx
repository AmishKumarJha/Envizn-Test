import pricing from "../../../data/pricing";

const FeatureList = () => {
  return (
    <div className="space-y-4">

      {pricing.plan.features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3">
          <img src={pricing.plan.checkIcon} className="w-5 h-5" />
          <p className="text-base text-white">
            {feature}
          </p>
        </div>
      ))}

    </div>
  );
};

export default FeatureList;