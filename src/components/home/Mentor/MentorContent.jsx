import mentor from "../../../data/mentor";
import CompanyLogos from "./CompanyLogos";

const MentorContent = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mt-14">

      {/* LEFT */}
      <div className="max-w-[650px] mx-auto lg:mx-0">

        {mentor.paragraphs.map((para, index) => (
          <p
            key={index}
            className="text-[#ECECEC] text-base md:text-lg leading-relaxed mb-6"
          >
            {para}
          </p>
        ))}

        <CompanyLogos />

      </div>

      {/* RIGHT */}
      <div className="flex justify-center lg:justify-end items-start">
        <img
          src={mentor.image}
          alt="Mentor"
          className="w-full max-w-[380px] lg:max-w-[420px] rounded-xl object-cover"
        />
      </div>

    </div>
  );
};

export default MentorContent;