import { motion } from "framer-motion";
import HeroStats from "./HeroStats";
import HeroButtons from "./HeroButtons";
import { FaPlay } from "react-icons/fa";
import stars from "../../../assets/images/star.jpg";
import heroVideo from "../../../assets/images/hero-video.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#09040A] ">

      {/* ---------------- BACKGROUND ---------------- */}

      {/* Orange Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#FF6A1A]/20 blur-[220px]" />

      {/* Stars */}
      <img
        src={stars}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />

      {/* CSS Grid */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">

        <div
          className="
            absolute
            inset-0
            [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)]
            [background-size:90px_90px]
            [transform:perspective(1000px)_rotateX(78deg)]
            origin-top
            top-[140px]
            scale-[2]
          "
        />

      </div>

      {/* ---------------- CONTENT ---------------- */}

      <div className="relative max-w-[1200px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center pt-8"
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#5b3f2f] bg-[#2b1c19] px-6 py-3">

            <span>⚡</span>

            <span className="text-lg">
              Limited Seats
            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-10 font-extrabold text-white leading-[1.05]">

            <span className="block text-[32px] md:text-[46px] 
            lg:text-[64px]">

              Guarantee your first sales

            </span>

            <span className="block mt-3 text-[32px] md:text-[46px] lg:text-[64px]">

              job and{" "}

              <span className="text-[#FF6A1A]">
                start earning
              </span>

              {" "}hard

            </span>

            <span className="block mt-3 text-[32px] md:text-[46px] lg:text-[64px]">

              earned cash in{" "}

              <span className="text-[#FF6A1A]">
                21 days.
              </span>

            </span>

          </h1>

          {/* Subtitle */}

          <p className="mt-10 max-w-[760px] mx-auto text-[#A8A8B4] text-lg md:text-xl leading-9">

            Discover Elite Sales Strategies, Transform Your Mindset,
            and Make Every Moment Count in Your Path to Sales Mastery!

          </p>

          <HeroStats />

          <HeroButtons />

        </motion.div>

        {/* ---------------- VIDEO ---------------- */}

        <motion.div

          initial={{ opacity:0, y:80 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}

          transition={{ duration:.8 }}

          className="mt-24 flex justify-center"

        >

          <div className="relative rounded-[30px] overflow-hidden border border-[#2c2326] shadow-2xl">

            <img

              src={heroVideo}

              alt="Hero"

              className="w-full max-w-[1050px]"

            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-black/30" />

            {/* Play Button */}

            <div className="absolute inset-0 flex justify-center items-center">

              <button
                className="
                w-28
                h-28
                rounded-full
                bg-white/10
                backdrop-blur-md
                border
                border-white/10
                flex
                justify-center
                items-center
                hover:scale-110
                transition"
              >

                <div className="w-20 h-20 rounded-full bg-white/20 flex justify-center items-center">

                  {/* ▶ */}
                  <FaPlay className="ml-1 text-white text-2xl" />

                </div>

              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;