import mentor from "../../../data/mentor";

const MentorHeader = () => {
  return (
    <div className="text-center">

      <h2 className="text-[64px] leading-none font-semibold text-white">

        {mentor.heading}{" "}

        <span className="text-[#FF6A20]">
          {mentor.highlight}
        </span>

      </h2>

      <p className="mt-6 text-[#B9B9B9] text-[24px]">
        {mentor.subtitle}
      </p>

    </div>
  );
};

export default MentorHeader;