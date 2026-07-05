import faq from "../../../data/faq";

const FAQHeader = () => {
  return (
    <div className="text-center mb-10">

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
        {faq.title}{" "}
        <span className="text-[#FF6A20]">{faq.highlight}</span>
      </h2>

      <p className="text-[#C5C5C5] text-lg mt-3">
        {faq.subtitle}
      </p>

    </div>
  );
};

export default FAQHeader;