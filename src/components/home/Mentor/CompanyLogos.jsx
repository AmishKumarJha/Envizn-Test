import mentor from "../../../data/mentor";

const CompanyLogos = () => {
  return (
    <div className="mt-8 lg:mt-14">

      <p className="text-white font-semibold text-base lg:text-lg mb-5 lg:mb-8">
        Bekend van:
      </p>

      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-4 w-full">

        {mentor.logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center shrink-0"
          >
            <img
              src={logo}
              alt=""
              className="h-6 md:h-8 lg:h-10 w-auto object-contain"
            />
          </div>
        ))}

      </div>

    </div>
  );
};

export default CompanyLogos;