import Container from "../../common/Container";
import MentorHeader from "./MentorHeader";
import MentorContent from "./MentorContent";

const Mentor = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-32">

      {/* Background */}
      <div className="absolute inset-0">
        {/* Top */}
        <div className="h-[36%] bg-[#0C0818]" />

        {/* Bottom */}
        <div className="h-[64%] bg-[#09040A]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <MentorHeader />
          <MentorContent />
        </Container>
      </div>

    </section>
  );
};

export default Mentor;