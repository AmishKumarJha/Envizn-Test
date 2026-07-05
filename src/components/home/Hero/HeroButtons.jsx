import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";

const HeroButtons = () => {
  return (
    <motion.div

      initial={{ opacity: 0, y: 25 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ delay: 0.9 }}

      className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-6"
    >

      {/* Primary Button */}

      <button
        className="
        group
        h-[52px]
        px-7
        rounded-full
        bg-gradient-to-r
        from-[#FF6A1A]
        to-[#FF7A2A]
        text-white
        text-lg
        font-semibold
        shadow-[0_0_50px_rgba(255,106,26,.35)]
        flex
        items-center
        gap-2
        hover:scale-105
        transition-all
        duration-300"
      >

        Join the Challenge Now

        <HiArrowRight
          className="group-hover:translate-x-1 transition"
          size={18}
        />

      </button>

      {/* Watch Demo */}

      <button
        className="
        flex
        items-center
        gap-3
        group"
      >

        <div
          className="
          w-10
          h-10
          rounded-full
          bg-[#1D151A]
          border
          border-[#33252B]
          flex
          justify-center
          items-center
          group-hover:bg-orange-500
          transition"
        >

          <FaPlay className="ml-0.5 text-orange-400 group-hover:text-white" />

        </div>

        <span
          className="
          text-base
          font-semibold
          text-[#FF8A2A]
          group-hover:text-white
          transition"
        >
          Watch Demo
        </span>

      </button>

    </motion.div>
  );
};

export default HeroButtons;