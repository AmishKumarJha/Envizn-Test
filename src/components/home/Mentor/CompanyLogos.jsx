import mentor from "../../../data/mentor";

const CompanyLogos = () => {
  return (
    <div className="mt-14">

      <p className="text-white font-semibold text-lg mb-8">
        Bekend van:
      </p>

      <div className="flex items-center justify-between w-full">

        {mentor.logos.map((logo, index) => (
          <div
            key={index}
            className="w-[150px] flex justify-center"
          >
            <img
              src={logo}
              alt=""
              className="h-10 object-contain"
            />
          </div>
        ))}

      </div>

    </div>
  );
};

export default CompanyLogos;