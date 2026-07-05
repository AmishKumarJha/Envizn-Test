import journey from "../../../data/journey";

const JourneyHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14">
      <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-white">
        Your Journey to{" "}
        <span className="text-[#FF6A20]">Sales Mastery</span> Unveiled
      </h2>

      <p className="mt-5 text-[#B9B9B9] text-lg leading-8 max-w-2xl mx-auto">
        {journey.description}
      </p>
    </div>
  );
};

export default JourneyHeader;