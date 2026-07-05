import logo from "../../../assets/icons/logo.svg";
import { useState } from "react";
import { HiArrowRight, HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <header className="w-full flex justify-center pt-8 px-4 z-50 relative">
        <div className="w-full max-w-6xl h-20 rounded-full border border-[#2d2024] bg-[#12090d]/80 backdrop-blur-xl flex items-center px-8">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Sales Mastery"
              className="w-8 h-9 object-contain"
            />
            <h2 className="text-[22px] font-semibold tracking-tight text-white">
              Sales Mastery
            </h2>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex ml-24 gap-12 text-lg text-white">
            <a
              href="#testimonials"
              className="hover:text-orange-500 transition-colors"
            >
              Testimonials
            </a>

            <a
              href="#pricing"
              className="hover:text-orange-500 transition-colors"
            >
              Pricing
            </a>

            <a
              href="#faq"
              className="hover:text-orange-500 transition-colors"
            >
              FAQs
            </a>
          </nav>

          {/* Desktop Button */}
<div className="hidden lg:flex ml-auto relative rounded-full p-[2px] overflow-hidden">

  <div className="absolute inset-[-50%] animate-spin-border bg-[conic-gradient(from_0deg,transparent_0%,#FF6A1A_15%,transparent_30%)]" />

  <button className="relative z-10 bg-[#0a080e] border border-[#0a080e] px-8 py-4 rounded-full flex items-center gap-2">
    Enroll Now
    <HiArrowRight />
  </button>

</div>

          {/* Mobile Menu Button */}
          <button
            className="ml-auto lg:hidden text-3xl text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden mx-4 mt-4 rounded-3xl bg-[#12090d] border border-[#2d2024] p-6 space-y-3">

          <a
            href="#testimonials"
            className="block py-2 text-white hover:text-orange-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Testimonials
          </a>

          <a
            href="#pricing"
            className="block py-2 text-white hover:text-orange-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="block py-2 text-white hover:text-orange-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            FAQs
          </a>

          <button
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 transition text-white rounded-full py-3 flex items-center justify-center gap-2"
            onClick={() => setOpen(false)}
          >
            Enroll Now
            <HiArrowRight />
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;