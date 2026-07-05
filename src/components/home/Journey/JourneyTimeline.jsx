import journey from "../../../data/journey";
import TimelineCard from "./TimelineCard";

const JourneyTimeline = () => {
  return (
    <div className="relative mt-24">

      {/* Orange Timeline */}
      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-[-80px]
          bottom-0
          w-[3px]
          bg-[#FF6A20]
          rounded-full
        "
      />

      <div className="space-y-10">

        {journey.lessons.map((item) => (
          <TimelineCard
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </div>
  );
};

export default JourneyTimeline;