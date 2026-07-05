import { HiArrowRight } from "react-icons/hi";

const PrimaryButton = ({ children }) => {
  return (
    <button
      className="
      bg-orange-500
      hover:bg-orange-600
      transition
      px-8
      py-4
      rounded-full
      flex
      items-center
      gap-2
      font-semibold
      text-white
      shadow-[0_0_35px_rgba(255,115,0,.35)]
      "
    >
      {children}

      <HiArrowRight />
    </button>
  );
};

export default PrimaryButton;