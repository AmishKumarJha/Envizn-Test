import { useState } from "react";

import faq from "../../../data/faq";

const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[20px] border border-white/15 bg-white/5 backdrop-blur-md overflow-hidden">

      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <h3 className="text-lg md:text-xl font-medium text-white">
          {item.question}
        </h3>

        <div className="w-10 h-10 rounded-lg bg-[#1C1B22] flex items-center justify-center shrink-0 ml-4">
          <img
            src={faq.logo}
            alt=""
            className={`w-4 transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {open && (
        <div className="px-6 pb-5">
          <p className="text-[#C7C7C7] text-base leading-7">
            {item.answer}
          </p>
        </div>
      )}

    </div>
  );
};
export default FAQItem;