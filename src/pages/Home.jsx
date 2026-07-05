import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/home/Hero/Hero";
import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonials";
import Journey from "../components/home/Journey/Journey";
import Mentor from "../components/home/Mentor/Mentor";
import Pricing from "../components/home/Pricing/Pricing";
import Winners from "../components/home/Winners/Winners";
import FAQ from "../components/home/FAQ/FAQ";
import Footer from "../components/layout/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-[#09040A] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Journey />
      <Mentor />
      <Pricing />
      <Winners />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;