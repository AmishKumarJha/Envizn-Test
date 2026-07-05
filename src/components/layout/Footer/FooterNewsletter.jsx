import footer from "../../../data/footer";

import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const FooterNewsletter = () => {
  return (
    <div className="flex flex-col items-end">

      <div className="border-2 border-white rounded-full p-1.5 flex w-full max-w-[420px]">
        <input
          placeholder="Lorem@e-mail.com"
          className="flex-1 bg-transparent outline-none px-5 text-base placeholder:text-white"
        />
        <button className="bg-[#09040A] rounded-full px-6 py-2.5 text-base">
          Sign Up Now
        </button>
      </div>

      <div className="flex items-center gap-2 mt-8">
        <img src={footer.logo} alt="" className="h-6 w-auto" />
        <span className="text-lg font-semibold text-white">Sales Mastery</span>
      </div>

      <p className="text-base mt-4">
        {footer.email}
      </p>

      <div className="flex gap-5 text-2xl mt-6">
        <FaTelegramPlane />
        <FaInstagram />
        <FaTwitter />
      </div>

    </div>
  );
};

export default FooterNewsletter;