import faq from "../../../data/faq";
import FAQItem from "./FAQItem";

const FAQAccordion = () => {
  return (
    <div className="max-w-[1000px] mx-auto space-y-4">

      {faq.items.map((item, index) => (

        <FAQItem

          key={index}

          item={item}

        />

      ))}

    </div>
  );
};

export default FAQAccordion;