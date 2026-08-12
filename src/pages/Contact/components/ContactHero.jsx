import React from "react";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import contactHeroImg from "../../../assets/contact-hero-artwork.png";

export default function ContactHero() {
  const navigate = useNavigate();

  const goToBusinessEnquiry = () => {
    navigate("/contact");
  };

  const openWhatsApp = () => {
    console.log("WhatsApp button clicked");
  };

  return (
    <main className="relative min-h-[700px] overflow-hidden bg-white">

      {/* Main Hero Container */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="relative min-h-[700px] flex items-center">

          {/* Soft background glow */}
          <div className="pointer-events-none absolute right-[5%] top-[10%] z-0 hidden h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-[120px] lg:block"></div>

          {/* Right Side Artwork */}
          <div className="pointer-events-none absolute right-[-10%] top-0 z-10 hidden h-full w-[68%] items-center justify-center lg:flex">
            <img
              src={contactHeroImg}
              alt="RV Brothers products and distribution"
              className="w-full object-contain"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
              }}
            />
          </div>

          {/* Left Content */}
          <div className="relative z-20 w-full py-20 lg:w-[57%] lg:py-24">

            {/* Contact Us Label */}
            <div className="mb-7 flex items-center gap-5">
              <span className="text-sm font-bold tracking-[0.2em] text-blue-700">
                CONTACT US
              </span>

              <span className="h-px w-16 bg-blue-700"></span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-[#07143f] sm:text-6xl lg:text-[5rem]">
              Let&apos;s{" "}
              <span className="text-blue-700">
                Connect
              </span>
            </h1>

            {/* Small Divider */}
            <div className="mt-8 h-px w-12 bg-slate-200"></div>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Whether you&apos;re a distributor, retailer, manufacturer,
              institutional buyer, or customer, we&apos;d love to hear from
              you.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              {/* Business Enquiry Button */}
              <button
                type="button"
                onClick={goToBusinessEnquiry}
                className="group flex items-center justify-center gap-3 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800"
              >
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

                Business Enquiry
              </button>

              {/* WhatsApp Button */}
              <button
                type="button"
                onClick={openWhatsApp}
                className="flex items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-[#07143f] transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-green-50"
              >
                <MessageCircle className="h-5 w-5 text-green-500" />

                WhatsApp Us
              </button>

            </div>

            {/* Response Time */}
            <div className="mt-9 flex items-center gap-4">

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
              </div>

              <p className="text-sm text-slate-600 sm:text-base">
                We typically respond within{" "}
                <span className="font-bold text-blue-700">
                  24 hours
                </span>
              </p>

            </div>

          </div>

          {/* Mobile Image */}
          <div className="relative z-10 mt-10 flex w-full justify-center lg:hidden">
            <img
              src={contactHeroImg}
              alt="RV Brothers products and distribution"
              className="w-full max-w-[600px] object-contain"
            />
          </div>

        </div>

      </div>

    </main>
  );
}