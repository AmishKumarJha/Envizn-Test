import winners from "../../../data/winners";

const WinnersHeader = () => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
        <span className="text-[#FF6A20]">{winners.heading}</span>{" "}
        {winners.heading2}
      </h2>

      <p className="mt-4 text-[#B9B9B9] text-lg leading-8">
        {winners.subtitle}
      </p>
    </div>
  );
};

export default WinnersHeader;