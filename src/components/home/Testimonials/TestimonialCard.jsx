import { FaPlay } from "react-icons/fa";

const TestimonialCard = ({ testimonial, active }) => {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[28px]
        transition-all
        duration-500
        ${active ? "scale-100" : "scale-90 opacity-70"}
      `}
    >
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-full h-[420px] object-cover"
      />

      <div className="absolute inset-0 bg-black/25"></div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">

        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
  <FaPlay className="text-white text-xl ml-1" />
</div>

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>

      {/* Text */}
      <div className="absolute bottom-8 left-8">

        <h3 className="text-white text-2xl font-bold">

          {testimonial.name}

        </h3>

        <p className="text-gray-300">

          {testimonial.role}

        </p>

      </div>

    </div>
  );
};

export default TestimonialCard;