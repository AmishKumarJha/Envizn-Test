import consultation from "../../../assets/icons/consultation.gif";
import barChart from "../../../assets/icons/bar-chart.gif";
import community from "../../../assets/icons/community.gif";

import FeatureCard from "./FeatureCard";

const cards = [
  {
    icon: community,

    title:
      "Exclusive Access to Elite Training by Rebien Ghazali",

    description:
      "Immerse yourself in top-notch training curated by Rebien Ghazali, the Sales King himself. Gain insights, techniques and proven strategies that guarantee success in the competitive world of sales.",
  },

  {
    icon: barChart,

    title:
      "Secure your future with a guaranteed, High-income sales job.",

    description:
      "Upon course completion, land a high-paying sales job at a prestigious Dutch agency. We don't just train; we ensure your success by providing real job opportunities.",
  },

  {
    icon: consultation,

    title:
      "Stay Motivated and Connected through our Community.",

    description:
      "Foster a sense of community. Join forces with like-minded individuals, share experiences, and receive ongoing support to guarantee your success.",
  },
];

const FeatureCards = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-10 mt-24">
      {cards.map((card, index) => (
        <FeatureCard
          key={index}
          {...card}
        />
      ))}
    </div>
  );
};

export default FeatureCards;