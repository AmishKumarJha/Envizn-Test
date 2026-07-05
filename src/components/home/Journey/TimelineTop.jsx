import TimelineTopImage from "../../../assets/images/journey/timeline-top.png";

const TimelineTop = () => {
  return (
    <div className="mt-20 mb-24">
      <div className="flex justify-center">
        <img
          src={TimelineTopImage}
          alt="Journey Timeline"
          className="w-full max-w-[1200px] object-contain"
        />
      </div>
    </div>
  );
};

export default TimelineTop;