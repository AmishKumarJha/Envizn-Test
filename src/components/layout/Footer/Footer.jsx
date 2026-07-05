import Container from "../../common/Container";

import FooterTop from "./FooterTop";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-[#FF612B] text-white">

      <Container>

        <FooterTop />

        <hr className="border-white/30 my-10" />

        <div className="grid lg:grid-cols-2 gap-16">

          <FooterLinks />

          <FooterNewsletter />

        </div>

        <FooterBottom />

      </Container>

    </footer>
  );
};

export default Footer;