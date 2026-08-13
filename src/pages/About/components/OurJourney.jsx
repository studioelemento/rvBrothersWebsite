import {
  Box,
  Handshake,
  Rocket,
  Sprout,
  Target,
  TrendingUp,
} from "lucide-react";

import industrialImage from "../../../assets/business_industrial.png";
import toysImage from "../../../assets/business_toys.png";
import fmcgImage from "../../../assets/business_fmcg.png";
import distributionImage from "../../../assets/business_distribution.png";
import digitalImage from "../../../assets/business_digital.png";

import journeyBackground from "../../../assets/our-journey-bg.png";

export default function OurJourney() {
  const milestones = [
    {
      year: "2016",
      title: "Our Beginning",
      description:
        "Started operations with a focus on bearings, fasteners and industrial supplies, laying the foundation of our journey.",
      image: industrialImage,
      icon: Rocket,
    },
    {
      year: "2019",
      title: "Expanding Horizons",
      description:
        "Expanded into toys and collectibles, building a strong distribution network and broadening our product range.",
      image: toysImage,
      icon: Box,
    },
    {
      year: "2020",
      title: "Greenbae Launch",
      description:
        "Launched Greenbae, obtained FSSAI registration and trademark. Strengthened our infrastructure and business capabilities.",
      image: fmcgImage,
      icon: Sprout,
    },
    {
      year: "2021 – 2023",
      title: "Growth & Expansion",
      description:
        "Expanded across multiple marketplaces, added new categories and strengthened our pan-India distribution and fulfillment network.",
      image: distributionImage,
      icon: TrendingUp,
    },
    {
      year: "Present & Beyond",
      title: "Building the Future",
      description:
        "Continuously building a scalable commerce ecosystem, empowering businesses and creating long-term value across India.",
      image: digitalImage,
      icon: Handshake,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white text-slate-950">

      {/* =====================================================
          MOUNTAIN BACKGROUND
          ===================================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${journeyBackground})`,
          backgroundRepeat: "no-repeat",

          /*
           * CENTER HORIZONTALLY
           * Move image UP so it appears behind the
           * empty area and timeline.
           */
          backgroundPosition: "center 35%",

          /*
           * Large enough to cover the middle of
           * the entire journey section.
           */
          backgroundSize: "100% auto",

          /*
           * Light mountain like the reference.
           */
          opacity: 0.25,
        }}
      />

      {/* Soft white layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.35) 100%)",
        }}
      />

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

        {/* ===================================================
            HEADER AREA
            =================================================== */}
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_360px]">

          {/* LEFT */}
          <div>

            {/* Label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="text-sm font-bold tracking-[0.2em] text-blue-700">
                OUR JOURNEY
              </span>

              <div className="h-[2px] w-12 bg-blue-600" />
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Our Journey
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-500 sm:text-xl">
              From a strong beginning in 2016 to a diversified business
              consortium serving thousands of customers across India — our
              journey is built on trust, hard work and long-term partnerships.
            </p>
          </div>

          {/* =================================================
              PURPOSE CARD
              ================================================= */}
          <div className="rounded-3xl border border-slate-100 bg-white/95 p-7 shadow-xl shadow-slate-200/50 backdrop-blur-sm">

            <div className="flex items-start gap-5">

              {/* Icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Target size={30} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-bold leading-8 text-slate-950">
                  Driven by Purpose.
                  <br />
                  Focused on Growth.
                </h3>

                <p className="mt-6 text-base leading-8 text-slate-500">
                  Every milestone represents our commitment to quality,
                  customers and creating value.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ===================================================
            TIMELINE
            =================================================== */}
        <div className="relative mt-20">

          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-[95px] hidden border-t border-dashed border-blue-300 lg:block" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

            {milestones.map((milestone) => {
              const Icon = milestone.icon;

              return (
                <div
                  key={milestone.year}
                  className="relative flex flex-col"
                >

                  {/* =================================================
                      ICON
                      ================================================= */}
                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg shadow-blue-100 ring-1 ring-slate-100">

                    <Icon
                      size={40}
                      strokeWidth={1.8}
                    />

                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-20 mx-auto mt-5 hidden h-5 w-5 rounded-full border-4 border-blue-600 bg-white lg:block" />

                  {/* =================================================
                      CARD
                      ================================================= */}
                  <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-white/95 shadow-lg shadow-slate-200/40 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                    {/* Image */}
                    <div className="h-28 overflow-hidden bg-slate-100">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">

                      {/* Year */}
                      <h3 className="text-2xl font-bold text-blue-700">
                        {milestone.year}
                      </h3>

                      {/* Title */}
                      <h4 className="mt-2 text-lg font-bold text-slate-950">
                        {milestone.title}
                      </h4>

                      {/* Line */}
                      <div className="mt-4 h-[2px] w-9 bg-blue-600" />

                      {/* Description */}
                      <p className="mt-5 text-sm leading-6 text-slate-500">
                        {milestone.description}
                      </p>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            BOTTOM BAR
            =================================================== */}
        <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50/85 px-6 py-7 backdrop-blur-sm lg:px-10">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Main statement */}
            <div className="flex items-center gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <Target size={28} />
              </div>

              <p className="max-w-xl text-lg font-semibold leading-7 text-slate-900">
                Our journey is driven by one belief —
                <span className="text-blue-700">
                  {" "}
                  strong partnerships create extraordinary growth.
                </span>
              </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">

              {/* Experience */}
              <div className="flex items-center gap-3">
                <Handshake
                  size={26}
                  className="shrink-0 text-blue-600"
                />

                <div>
                  <p className="font-bold text-blue-700">
                    8+ Years
                  </p>

                  <p className="text-sm text-slate-500">
                    of Experience
                  </p>
                </div>
              </div>

              {/* Verticals */}
              <div className="flex items-center gap-3">
                <Box
                  size={26}
                  className="shrink-0 text-blue-600"
                />

                <div>
                  <p className="font-bold text-blue-700">
                    Multiple
                  </p>

                  <p className="text-sm text-slate-500">
                    Business Verticals
                  </p>
                </div>
              </div>

              {/* Pan India */}
              <div className="flex items-center gap-3">
                <TrendingUp
                  size={26}
                  className="shrink-0 text-blue-600"
                />

                <div>
                  <p className="font-bold text-blue-700">
                    Pan India
                  </p>

                  <p className="text-sm text-slate-500">
                    Presence
                  </p>
                </div>
              </div>

              {/* Trusted */}
              <div className="flex items-center gap-3">
                <Handshake
                  size={26}
                  className="shrink-0 text-blue-600"
                />

                <div>
                  <p className="font-bold text-blue-700">
                    Trusted by
                  </p>

                  <p className="text-sm text-slate-500">
                    Thousands
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}