import footer from "../../../data/footer";
import { FiArrowRight } from "react-icons/fi";

const FooterTop = () => {
  return (
    <div className="text-center py-14">

      <div className="flex items-center justify-center gap-3 mb-8">
  <img src={footer.logo} alt="" className="h-12 w-auto" />
  <span className="text-3xl font-semibold text-white">Sales Mastery</span>
</div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold whitespace-pre-line">
        {footer.title}
      </h2>

      <p className="mt-4 text-lg max-w-xl mx-auto">
        {footer.subtitle}
      </p>

      <button className="mt-6 bg-[#09040A] px-7 py-3 rounded-full flex items-center gap-2 mx-auto text-base">
        Enroll Now
        <FiArrowRight />
      </button>

    </div>
  );
};

export default FooterTop;