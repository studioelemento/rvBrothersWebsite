import React from "react";
import { Users, MapPin, Package, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import panIndiaArtwork from "../../../assets/pan-india-map-only.png";

const stats = [
  {
    icon: Users,
    number: "28+",
    label: "States & UTs",
  },
  {
    icon: MapPin,
    number: "300+",
    label: "Cities Served",
  },
  {
    icon: Package,
    number: "10K+",
    label: "Business Partners",
  },
];

export default function PanIndiaPresence() {
  const navigate = useNavigate();

  // One Network → Businesses page
  const handleNetworkClick = () => {
    navigate("/businesses");
  };

  // Head Office → Google Maps
  const handleHeadOfficeClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Delhi,India",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="overflow-hidden bg-slate-50 px-6 py-8 lg:px-12 lg:py-10 xl:px-20">
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            MAIN TWO-COLUMN LAYOUT
        ===================================================== */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">

          {/* =====================================================
              LEFT SIDE
          ===================================================== */}
          <div className="min-w-0">

            {/* Section Label */}
            <div className="flex items-center gap-5">
              <span className="text-sm font-bold tracking-[0.2em] text-blue-600">
                OUR PRESENCE
              </span>

              <span className="h-[2px] w-14 bg-blue-600" />
            </div>

            {/* Small Divider */}
            <div className="mt-5 h-[2px] w-14 bg-blue-600" />

            {/* Main Heading */}
            <h2 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-[#07143f] sm:text-6xl lg:text-[62px]">
              Pan India
              <br />
              <span className="text-blue-600">
                Operations
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              From metros to emerging markets, we work with partners and
              customers across India, delivering value, reliability and trust.
            </p>

            {/* =================================================
                STATISTICS
            ================================================= */}
            <div className="mt-10 grid max-w-[600px] grid-cols-3">

              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className={`min-w-0 px-5 ${
                      index === 0
                        ? "pl-0"
                        : "border-l border-slate-200"
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-100 bg-[#eef2ff]">
                      <Icon
                        className="h-7 w-7 text-blue-600"
                        strokeWidth={2}
                      />
                    </div>

                    {/* Number */}
                    <div className="mt-5 text-4xl font-extrabold leading-none text-[#07143f]">
                      {stat.number}
                    </div>

                    {/* Label */}
                    <div className="mt-3 text-sm leading-5 text-slate-600">
                      {stat.label}
                    </div>
                  </div>
                );
              })}

            </div>

            {/* =================================================
                HEAD OFFICE
            ================================================= */}
            <button
              type="button"
              onClick={handleHeadOfficeClick}
              aria-label="Open Head Office location in Google Maps"
              className="group mt-10 flex h-[124px] w-full max-w-[650px] items-center gap-5 rounded-2xl border border-slate-100 bg-white px-7 py-5 text-left shadow-[0_15px_40px_-20px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600"
            >

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-[#eef2ff] transition-colors duration-300 group-hover:border-white group-hover:bg-white">
                <MapPin
                  className="h-7 w-7 text-blue-600"
                  strokeWidth={2}
                />
              </div>

              {/* Text */}
              <div className="min-w-0">

                <h3 className="text-lg font-bold text-[#07143f] transition-colors duration-300 group-hover:text-white">
                  Head Office
                </h3>

                <p className="mt-1 text-base font-semibold text-slate-600 transition-colors duration-300 group-hover:text-blue-50">
                  Delhi, India
                </p>

                <p className="mt-1 text-sm text-slate-500 transition-colors duration-300 group-hover:text-blue-100">
                  Serving businesses across India
                </p>

              </div>
            </button>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}
          <div className="flex min-w-0 flex-col items-center">

            {/* =================================================
                INDIA MAP IMAGE
            ================================================= */}
            <div className="flex w-full items-center justify-center">
              <img
                src={panIndiaArtwork}
                alt="Pan India operations network"
                className="mx-auto h-auto w-full max-w-[650px] object-contain"
              />
            </div>

            {/* =================================================
                ONE NETWORK CARD
            ================================================= */}
            <button
              type="button"
              onClick={handleNetworkClick}
              aria-label="Explore our business network"
              className="group -mt-4 flex h-[124px] w-full max-w-[650px] items-center gap-5 rounded-2xl border border-slate-100 bg-white px-7 py-5 text-left shadow-[0_15px_40px_-20px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600"
            >

              {/* Globe Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] transition-colors duration-300 group-hover:bg-white">
                <Globe2
                  className="h-7 w-7 text-blue-600"
                  strokeWidth={2}
                />
              </div>

              {/* Card Text */}
              <div className="min-w-0">

                <h3 className="text-lg font-bold text-[#07143f] transition-colors duration-300 group-hover:text-white">
                  One network. One commitment.
                </h3>

                <p className="mt-1 text-sm text-slate-600 transition-colors duration-300 group-hover:text-blue-50">
                  Nationwide reach. Personal touch.
                </p>

              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}