const TimelineCard = ({ item }) => {
  return (
    <div className="relative">

      {/* Timeline Dot */}
      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -top-6
          w-6
          h-6
          rounded-full
          bg-[#FF6A20]
          border-[5px]
          border-[#09040A]
          z-20
          shadow-[0_0_20px_rgba(255,106,32,0.8)]
        "
      />

      {/* Card */}
      <div
        className="
          group
          bg-[#09040A]
          border
          border-white/10
          rounded-[32px]
          px-12
          py-10
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-12
          transition-all
          duration-500
          hover:border-[#FF6A20]/40
          hover:shadow-[0_0_40px_rgba(255,106,32,0.12)]
        "
      >
        {/* Left */}
        <div className="flex-1 max-w-[600px]">

          <p className="text-[#FF6A20] text-xl font-semibold mb-4">
            {item.days}
          </p>

          <h2 className="text-white text-4xl leading-tight font-semibold mb-5">
            {item.title}
          </h2>

          <p className="text-[#B9B9B9] text-lg leading-8">
            {item.description}
          </p>

        </div>

        {/* Right */}
        <div className="flex-1 flex justify-end">

          <img
            src={item.image}
            alt={item.title}
            className="
              w-[520px]
              rounded-[22px]
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

        </div>

      </div>

    </div>
  );
};

export default TimelineCard;