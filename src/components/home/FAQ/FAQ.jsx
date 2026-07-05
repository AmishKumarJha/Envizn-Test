import Container from "../../common/Container";
import FAQHeader from "./FAQHeader";
import FAQAccordion from "./FAQAccordion";

import Bg from "../../../assets/images/faq/bg.png";

const FAQ = () => {
  return (
    <section id="faq" className="relative overflow-hidden pt-12 pb-20 bg-[#09040A]">

      <img
        src={Bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
      />

      <div className="absolute inset-0 bg-black/45" />

      <Container className="relative z-10">

        <FAQHeader />

        <FAQAccordion />

      </Container>

    </section>
  );
};

export default FAQ;