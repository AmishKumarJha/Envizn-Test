import { FaPlay } from "react-icons/fa";

const SecondaryButton = ({ children }) => {
  return (
    <button className="flex items-center gap-4">

      <div
        className="
        w-14
        h-14
        rounded-full
        bg-[#23161C]
        flex
        justify-center
        items-center"
      >
        <FaPlay className="text-orange-500 ml-1" />
      </div>

      <span className="text-orange-400 text-lg font-semibold">
        {children}
      </span>

    </button>
  );
};

export default SecondaryButton;