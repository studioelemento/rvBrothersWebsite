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

  // =====================================================
  // ONE NETWORK
  // =====================================================
  const handleNetworkClick = () => {
    navigate("/businesses");
  };

  // =====================================================
  // HEAD OFFICE
  // =====================================================
  const handleHeadOfficeClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Delhi,India",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="
        overflow-hidden
        bg-slate-50
        px-4
        py-12

        sm:px-6
        sm:py-14

        lg:px-12
        lg:py-16

        xl:px-20
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* =====================================================
            MAIN LAYOUT

            Mobile  : Single column
            Desktop : Two columns
        ===================================================== */}
        <div
          className="
            grid
            grid-cols-1
            items-center

            gap-10

            lg:grid-cols-2
            lg:gap-12

            xl:gap-16
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="min-w-0">

            {/* =================================================
                SECTION LABEL
            ================================================= */}
            <div
              className="
                flex
                items-center
                gap-3

                sm:gap-5
              "
            >
              <span
                className="
                  text-xs
                  font-bold
                  tracking-[0.18em]
                  text-blue-600

                  sm:text-sm
                  sm:tracking-[0.2em]
                "
              >
                OUR PRESENCE
              </span>

              <span
                className="
                  h-[2px]
                  w-10
                  shrink-0
                  bg-blue-600

                  sm:w-14
                "
              />
            </div>

            {/* =================================================
                SMALL DIVIDER
            ================================================= */}
            <div
              className="
                mt-4
                h-[2px]
                w-10
                bg-blue-600

                sm:mt-5
                sm:w-14
              "
            />

            {/* =================================================
                MAIN HEADING
            ================================================= */}
            <h2
              className="
                mt-5
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-[#07143f]

                sm:mt-6
                sm:text-5xl

                md:text-6xl

                lg:text-[58px]
                xl:text-[62px]
              "
            >
              Pan India
              <br />
              <span className="text-blue-600">
                Operations
              </span>
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================= */}
            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-7
                text-slate-600

                sm:mt-6
                sm:text-lg
                sm:leading-8
              "
            >
              From metros to emerging markets, we work with partners and
              customers across India, delivering value, reliability and trust.
            </p>

            {/* =================================================
                STATISTICS
            ================================================= */}
            <div
              className="
                mt-8
                grid
                w-full
                max-w-[600px]
                grid-cols-3

                sm:mt-10
              "
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className={`
                      min-w-0
                      px-2

                      sm:px-4

                      lg:px-5

                      ${
                        index !== 0
                          ? "border-l border-slate-200"
                          : ""
                      }
                    `}
                  >

                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-blue-100
                        bg-[#eef2ff]

                        sm:h-14
                        sm:w-14
                      "
                    >
                      <Icon
                        className="
                          h-5
                          w-5
                          text-blue-600

                          sm:h-7
                          sm:w-7
                        "
                        strokeWidth={2}
                      />
                    </div>

                    {/* Number */}
                    <div
                      className="
                        mt-4
                        text-3xl
                        font-extrabold
                        leading-none
                        text-[#07143f]

                        sm:mt-5
                        sm:text-4xl
                      "
                    >
                      {stat.number}
                    </div>

                    {/* Label */}
                    <div
                      className="
                        mt-2
                        max-w-[110px]
                        text-xs
                        leading-5
                        text-slate-600

                        sm:mt-3
                        sm:text-sm
                      "
                    >
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
              className="
                group
                mt-8
                flex
                min-h-[108px]
                w-full
                max-w-[650px]
                items-center
                gap-4
                rounded-2xl
                border
                border-slate-100
                bg-white
                px-5
                py-5
                text-left
                shadow-[0_15px_40px_-20px_rgba(15,23,42,0.18)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-blue-600
                hover:bg-blue-600

                sm:mt-10
                sm:min-h-[124px]
                sm:gap-5
                sm:px-7
              "
            >

              {/* Icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-blue-100
                  bg-[#eef2ff]
                  transition-colors
                  duration-300

                  group-hover:border-white
                  group-hover:bg-white

                  sm:h-14
                  sm:w-14
                "
              >
                <MapPin
                  className="
                    h-6
                    w-6
                    text-blue-600

                    sm:h-7
                    sm:w-7
                  "
                  strokeWidth={2}
                />
              </div>

              {/* Text */}
              <div className="min-w-0">

                <h3
                  className="
                    text-base
                    font-bold
                    text-[#07143f]
                    transition-colors
                    duration-300

                    group-hover:text-white

                    sm:text-lg
                  "
                >
                  Head Office
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    font-semibold
                    text-slate-600
                    transition-colors
                    duration-300

                    group-hover:text-blue-50

                    sm:text-base
                  "
                >
                  Delhi, India
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-slate-500
                    transition-colors
                    duration-300

                    group-hover:text-blue-100

                    sm:text-sm
                  "
                >
                  Serving businesses across India
                </p>

              </div>
            </button>

          </div>


          {/* =====================================================
              RIGHT CONTENT
          ===================================================== */}
          <div
            className="
              flex
              min-w-0
              flex-col
              items-center

              lg:pt-4
            "
          >

            {/* =================================================
                INDIA MAP
            ================================================= */}
            <div
              className="
                flex
                w-full
                items-center
                justify-center

                lg:min-h-[500px]
              "
            >
              <img
                src={panIndiaArtwork}
                alt="Pan India operations network"
                className="
                  mx-auto
                  h-auto
                  w-full
                  max-w-[390px]
                  object-contain

                  sm:max-w-[500px]

                  md:max-w-[560px]

                  lg:max-w-[650px]
                "
              />
            </div>


            {/* =================================================
                ONE NETWORK CARD
            ================================================= */}
            <button
              type="button"
              onClick={handleNetworkClick}
              aria-label="Explore our business network"
              className="
                group
                mt-2
                flex
                min-h-[108px]
                w-full
                max-w-[650px]
                items-center
                gap-4
                rounded-2xl
                border
                border-slate-100
                bg-white
                px-5
                py-5
                text-left
                shadow-[0_15px_40px_-20px_rgba(15,23,42,0.25)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-blue-600
                hover:bg-blue-600

                sm:mt-0
                sm:min-h-[124px]
                sm:gap-5
                sm:px-7
              "
            >

              {/* Globe Icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#eef2ff]
                  transition-colors
                  duration-300

                  group-hover:bg-white

                  sm:h-14
                  sm:w-14
                "
              >
                <Globe2
                  className="
                    h-6
                    w-6
                    text-blue-600

                    sm:h-7
                    sm:w-7
                  "
                  strokeWidth={2}
                />
              </div>

              {/* Card Text */}
              <div className="min-w-0">

                <h3
                  className="
                    text-base
                    font-bold
                    leading-6
                    text-[#07143f]
                    transition-colors
                    duration-300

                    group-hover:text-white

                    sm:text-lg
                  "
                >
                  One network. One commitment.
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-slate-600
                    transition-colors
                    duration-300

                    group-hover:text-blue-50

                    sm:text-sm
                  "
                >
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