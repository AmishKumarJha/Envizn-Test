import Container from "../../common/Container";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsSlider from "./TestimonialsSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-20 pb-40 relative overflow-hidden bg-[#09040A]">

      {/* Left Glow */}
      <div className="absolute left-[-250px] top-[250px] w-[600px] h-[600px] rounded-full bg-[#FF6A1A]/20 blur-[180px]" />

      {/* Right Glow */}
      <div className="absolute right-[-250px] top-[250px] w-[600px] h-[600px] rounded-full bg-[#FF6A1A]/15 blur-[180px]" />

      <Container>

        <TestimonialsHeader />

        <TestimonialsSlider />

      </Container>

    </section>
  );
};

export default Testimonials;