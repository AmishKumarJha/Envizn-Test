import mentor from "../../../data/mentor";

const MentorHeader = () => {
  return (
    <div className="text-center px-4">

      <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-white">
        {mentor.heading}{" "}
        <span className="text-[#FF6A20]">{mentor.highlight}</span>
      </h2>

      <p className="mt-4 text-[#B9B9B9] text-base md:text-lg">
        {mentor.subtitle}
      </p>

    </div>
  );
};

export default MentorHeader;