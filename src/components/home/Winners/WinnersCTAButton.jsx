import winners from "../../../data/winners";

const WinnersCTAButton = () => {
  return (
    <button
      className="
      bg-[#FF6A20]
      hover:bg-[#ff7b39]
      transition
      rounded-full
      px-8
      py-4
      font-semibold
      text-lg
      shadow-[0_0_50px_rgba(255,106,32,.4)]
      "
    >
      {winners.button}
    </button>
  );
};

export default WinnersCTAButton;