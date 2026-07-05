const SectionHeading = ({
  badge,
  title,
  subtitle,
  center = true,
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <span className="inline-flex px-5 py-2 rounded-full border border-orange-500/30 bg-white/5 text-white mb-6">
          {badge}
        </span>
      )}

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-[#A7A7B5] text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;