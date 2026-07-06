import logo from "../../../assets/icons/logo.svg";
import { useState } from "react";
import { HiArrowRight, HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full flex justify-center pt-8 px-4">
        <div className="w-full max-w-6xl h-20 rounded-full border border-[#2d2024] bg-[#12090d]/80 backdrop-blur-xl flex items-center px-8">

          <div className="flex items-center gap-4">
            <img src={logo} alt="Sales Mastery" className="w-8 h-9 object-contain" />
            <h2 className="text-[22px] font-semibold tracking-tight text-white">Sales Mastery</h2>
          </div>

          <nav className="hidden lg:flex ml-24 gap-12 text-lg">
            <a href="#testimonials">Testimonials</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQs</a>
          </nav>

          <div className="hidden lg:flex ml-auto relative rounded-full p-[2px] overflow-hidden">
            <div className="absolute inset-[-50%] animate-spin-border bg-[conic-gradient(from_0deg,transparent_0%,#FF6A1A_15%,transparent_30%)]" />
            <button className="relative z-10 bg-[#140c28] border border-[#3c2c63] px-8 py-4 rounded-full flex items-center gap-2">
              Enroll Now
              <HiArrowRight />
            </button>
          </div>

          <div className="ml-auto lg:hidden relative rounded-full p-[2px] overflow-hidden">
            <div className="absolute inset-[-50%] animate-spin-border bg-[conic-gradient(from_0deg,transparent_0%,#FF6A1A_15%,transparent_30%)]" />
            <button
              className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#12090d] text-3xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <HiX /> : <HiMenu />}
            </button>
          </div>

        </div>
      </header>

      {open && (
        <div className="lg:hidden mx-4 mt-4 rounded-3xl bg-[#12090d] border border-[#2d2024] p-6">
          <a href="#testimonials" className="block py-3" onClick={() => setOpen(false)}>Testimonials</a>
          <a href="#pricing" className="block py-3" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#faq" className="block py-3" onClick={() => setOpen(false)}>FAQs</a>
          <button className="mt-4 w-full bg-orange-500 rounded-full py-3">Enroll Now</button>
        </div>
      )}
    </>
  );
};

export default Navbar;