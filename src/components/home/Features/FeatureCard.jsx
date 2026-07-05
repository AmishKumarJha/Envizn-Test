const FeatureCard = ({
  icon,
  title,
  description,
}) => {
  return (
    <div
      className="
      group
      relative
      rounded-[28px]
      border
      border-white/15
      bg-[#2A1616]/50
      backdrop-blur-xl
      p-8
      transition-all
      duration-500
      hover:border-[#FF6A1A]/50
      hover:-translate-y-2
      hover:shadow-[0_20px_60px_rgba(255,106,26,.15)]
      "
    >
      {/* Icon */}

      <img
        src={icon}
        alt=""
        className="w-16 h-16 object-contain"
      />

      {/* Title */}

      <h3 className="mt-8 text-[24px] leading-8 font-semibold text-white">
        {title}
      </h3>

      {/* Divider */}

      <div className="mt-6 h-px bg-white/10" />

      {/* Description */}

      <p className="mt-6 text-[#B3B3BE] leading-8 text-lg">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;