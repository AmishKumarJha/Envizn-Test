import PrimaryButton from "../../common/PrimaryButton";

const FeatureHeader = () => {
  return (
    <div className="max-w-[620px] z-20 relative">

      <h2 className="text-[32px] md:text-[42px] lg:text-[50px] leading-[1.2] font-extrabold">
        Revolutionise Your Approach to Cold Calling and Get Closer to Your{" "}
        <span className="text-[#FF6A1A]">Dream Career and Financial Freedom!</span>
      </h2>

      <p className="mt-8 text-[#A8A8B4] text-lg leading-8">
        Embark on a transformative 21 day journey and
        discover the secrets to effective communication.
      </p>

      <div className="mt-10">
        <PrimaryButton>Book a Free Call</PrimaryButton>
      </div>

    </div>
  );
};

export default FeatureHeader;