import mentor from "../../../data/mentor";
import CompanyLogos from "./CompanyLogos";

const MentorContent = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-20 items-start mt-24">

      {/* LEFT */}

      <div className="max-w-[650px]">

        {mentor.paragraphs.map((para, index) => (

          <p
            key={index}
            className="text-[#ECECEC] text-[22px] leading-[1.8] mb-12"
          >
            {para}
          </p>

        ))}

        <CompanyLogos />

      </div>

      {/* RIGHT */}

      <div className="flex justify-end items-start">

        <img
          src={mentor.image}
          alt="Mentor"
          className="w-full max-w-[470px] rounded-xl object-cover"
        />

      </div>

    </div>
  );
};

export default MentorContent;