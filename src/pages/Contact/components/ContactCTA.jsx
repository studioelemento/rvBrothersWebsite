import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Package,
  Users,
  TrendingUp,
} from "lucide-react";
import contactCtaBackground from "../../../assets/contact-cta-background.png";

export default function ContactCTA() {
  const navigate = useNavigate();

  // =====================================================
  // DISCUSS PARTNERSHIP
  // =====================================================
  const handleDiscussPartnership = () => {
    const businessInquiry =
      document.getElementById("business-inquiry");

    if (businessInquiry) {
      businessInquiry.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(
        null,
        "",
        "/contact#business-inquiry"
      );
    } else {
      navigate("/contact#business-inquiry");

      setTimeout(() => {
        const section =
          document.getElementById("business-inquiry");

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  };

  // =====================================================
  // EXPLORE PRODUCTS
  // =====================================================
  const handleExploreProducts = () => {
    navigate("/shop");
  };

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1450px]">

        {/* =================================================
            DESKTOP CTA
        ================================================= */}
        <div className="relative hidden w-full overflow-hidden rounded-2xl shadow-sm lg:block">
          <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{
              aspectRatio: "1536 / 1024",
            }}
          >

            {/* Desktop Background */}
            <img
              src={contactCtaBackground}
              alt="Built Around Trust and Long-Term Partnerships"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-fill
              "
            />

            {/* =================================================
                DESKTOP DISCUSS PARTNERSHIP
            ================================================= */}
            <button
              type="button"
              onClick={handleDiscussPartnership}
              aria-label="Discuss Partnership"
              className="
                absolute
                z-20

                left-[29.25%]
                top-[56.65%]

                flex
                h-[7.55%]
                w-[20.30%]
                items-center
                justify-center
                gap-2

                rounded-[12px]

                border
                border-blue-400

                bg-blue-600
                text-white

                px-2

                text-base
                font-semibold

                shadow-lg
                shadow-blue-600/30

                transition-all
                duration-200

                hover:-translate-y-[2px]
                hover:bg-blue-700
                hover:shadow-xl
                hover:shadow-blue-600/40

                active:translate-y-0
                active:scale-[0.98]

                focus:outline-none
                focus:ring-2
                focus:ring-blue-400
              "
            >
              <span className="whitespace-nowrap">
                Discuss Partnership
              </span>

              <ArrowRight className="h-5 w-5" />
            </button>

            {/* =================================================
                DESKTOP EXPLORE PRODUCTS
            ================================================= */}
            <button
              type="button"
              onClick={handleExploreProducts}
              aria-label="Explore Products"
              className="
                absolute
                z-20

                left-[51.05%]
                top-[56.65%]

                flex
                h-[7.55%]
                w-[20.30%]
                items-center
                justify-center
                gap-2

                rounded-[12px]

                border
                border-blue-500

                bg-[#07102f]
                text-blue-300

                px-2

                text-base
                font-semibold

                shadow-lg
                shadow-black/20

                transition-all
                duration-200

                hover:-translate-y-[2px]
                hover:border-blue-400
                hover:bg-blue-900
                hover:text-white

                active:translate-y-0
                active:scale-[0.98]

                focus:outline-none
                focus:ring-2
                focus:ring-blue-400
              "
            >
              <span className="whitespace-nowrap">
                Explore Products
              </span>

              <ArrowRight className="h-5 w-5" />
            </button>

          </div>
        </div>


        {/* =================================================
            MOBILE CTA
        ================================================= */}
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            bg-[#030a27]
            shadow-lg
            shadow-slate-300/30
            lg:hidden
          "
        >

          {/* =================================================
              DECORATIVE GLOW - TOP RIGHT
          ================================================= */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-blue-600/20
              blur-3xl
            "
          />

          {/* =================================================
              DECORATIVE GLOW - BOTTOM LEFT
          ================================================= */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-32
              h-64
              w-64
              rounded-full
              bg-blue-700/10
              blur-3xl
            "
          />


          {/* =================================================
              MOBILE CONTENT
              
              Extra top spacing prevents the fixed navbar
              from covering the heading.
          ================================================= */}
          <div
            className="
              relative
              z-10

              px-5
              pb-10
              pt-28

              text-center

              sm:px-8
              sm:pb-12
              sm:pt-32
            "
          >

            {/* =================================================
                MOBILE PARTNERSHIP LABEL
            ================================================= */}
            <div
              className="
                mb-4
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <span className="h-px w-8 bg-blue-500" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-blue-400
                "
              >
                Partnership
              </span>

              <span className="h-px w-8 bg-blue-500" />
            </div>


            {/* =================================================
                MOBILE HEADING
            ================================================= */}
            <h2
              className="
                mx-auto
                max-w-sm

                text-2xl
                font-extrabold
                leading-[1.2]
                tracking-tight
                text-white

                sm:text-3xl
                sm:leading-tight
              "
            >
              Built Around Trust &{" "}
              <span className="text-blue-500">
                Long-Term Partnerships
              </span>
            </h2>


            {/* =================================================
                MOBILE DIVIDER
            ================================================= */}
            <div
              className="
                mx-auto
                mt-5
                h-1
                w-10
                rounded-full
                bg-blue-600
              "
            />


            {/* =================================================
                MOBILE DESCRIPTION
            ================================================= */}
            <p
              className="
                mx-auto
                mt-5
                max-w-md

                text-sm
                leading-6
                text-slate-300

                sm:text-base
                sm:leading-7
              "
            >
              We believe meaningful business relationships
              create sustainable growth.
            </p>


            {/* =================================================
                MOBILE BUTTONS
            ================================================= */}
            <div
              className="
                mx-auto
                mt-8
                flex
                w-full
                max-w-sm
                flex-col
                gap-4
              "
            >

              {/* =================================================
                  DISCUSS PARTNERSHIP
              ================================================= */}
              <button
                type="button"
                onClick={handleDiscussPartnership}
                aria-label="Discuss Partnership - Scroll to business enquiry"
                className="
                  group
                  relative
                  flex
                  min-h-[58px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden

                  rounded-xl

                  border
                  border-blue-400

                  bg-blue-600

                  px-5
                  py-3

                  text-sm
                  font-bold
                  text-white

                  shadow-lg
                  shadow-blue-600/30

                  transition-all
                  duration-200

                  hover:bg-blue-700
                  hover:shadow-xl
                  hover:shadow-blue-600/40

                  active:scale-[0.96]
                  active:bg-blue-800

                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                  focus:ring-offset-2
                  focus:ring-offset-[#030a27]

                  sm:text-base
                "
              >
                {/* Tap feedback */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-white/0
                    transition-colors
                    duration-150
                    group-active:bg-white/10
                  "
                />

                <span className="relative z-10">
                  Discuss Partnership
                </span>

                <ArrowRight
                  className="
                    relative
                    z-10
                    h-5
                    w-5

                    transition-transform
                    duration-200

                    group-hover:translate-x-1
                    group-active:translate-x-1
                  "
                />
              </button>


              {/* =================================================
                  EXPLORE PRODUCTS
              ================================================= */}
              <button
                type="button"
                onClick={handleExploreProducts}
                aria-label="Explore Products - Go to shop"
                className="
                  group
                  relative
                  flex
                  min-h-[58px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden

                  rounded-xl

                  border
                  border-blue-500

                  bg-[#07102f]

                  px-5
                  py-3

                  text-sm
                  font-bold
                  text-blue-300

                  shadow-md
                  shadow-black/20

                  transition-all
                  duration-200

                  hover:border-blue-400
                  hover:bg-blue-900
                  hover:text-white
                  hover:shadow-lg
                  hover:shadow-blue-600/20

                  active:scale-[0.96]
                  active:bg-blue-950

                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                  focus:ring-offset-2
                  focus:ring-offset-[#030a27]

                  sm:text-base
                "
              >
                {/* Tap feedback */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-white/0
                    transition-colors
                    duration-150
                    group-active:bg-white/5
                  "
                />

                <span className="relative z-10">
                  Explore Products
                </span>

                <ArrowRight
                  className="
                    relative
                    z-10
                    h-5
                    w-5

                    transition-transform
                    duration-200

                    group-hover:translate-x-1
                    group-active:translate-x-1
                  "
                />
              </button>

            </div>


            {/* =================================================
                MOBILE BENEFITS
            ================================================= */}
            <div
              className="
                mt-10
                grid
                grid-cols-2

                border-t
                border-blue-900/60

                pt-8
              "
            >

              {/* =================================================
                  TRUSTED QUALITY
              ================================================= */}
              <div
                className="
                  flex
                  min-h-[110px]
                  flex-col
                  items-center
                  justify-center
                  gap-2

                  border-b
                  border-r
                  border-blue-900/60

                  px-3
                  pb-5
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600/10
                  "
                >
                  <ShieldCheck className="h-5 w-5 text-blue-500" />
                </div>

                <span
                  className="
                    text-center
                    text-xs
                    font-semibold
                    text-white
                  "
                >
                  Trusted Quality
                </span>
              </div>


              {/* =================================================
                  RELIABLE SUPPLY
              ================================================= */}
              <div
                className="
                  flex
                  min-h-[110px]
                  flex-col
                  items-center
                  justify-center
                  gap-2

                  border-b
                  border-blue-900/60

                  px-3
                  pb-5
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600/10
                  "
                >
                  <Package className="h-5 w-5 text-blue-500" />
                </div>

                <span
                  className="
                    text-center
                    text-xs
                    font-semibold
                    text-white
                  "
                >
                  Reliable Supply
                </span>
              </div>


              {/* =================================================
                  CUSTOMER FIRST
              ================================================= */}
              <div
                className="
                  flex
                  min-h-[110px]
                  flex-col
                  items-center
                  justify-center
                  gap-2

                  border-r
                  border-blue-900/60

                  px-3
                  pt-5
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600/10
                  "
                >
                  <Users className="h-5 w-5 text-blue-500" />
                </div>

                <span
                  className="
                    text-center
                    text-xs
                    font-semibold
                    text-white
                  "
                >
                  Customer First
                </span>
              </div>


              {/* =================================================
                  GROWTH TOGETHER
              ================================================= */}
              <div
                className="
                  flex
                  min-h-[110px]
                  flex-col
                  items-center
                  justify-center
                  gap-2

                  px-3
                  pt-5
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600/10
                  "
                >
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                </div>

                <span
                  className="
                    text-center
                    text-xs
                    font-semibold
                    text-white
                  "
                >
                  Growth Together
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}