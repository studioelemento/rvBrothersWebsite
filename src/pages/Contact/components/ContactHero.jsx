import React from "react";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import contactHeroImg from "../../../assets/contact-hero-artwork.png";

export default function ContactHero() {
  const navigate = useNavigate();

  // =====================================================
  // BUSINESS ENQUIRY
  // =====================================================
  const goToBusinessEnquiry = () => {
    const businessInquiry = document.getElementById(
      "business-inquiry"
    );

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
        const section = document.getElementById(
          "business-inquiry"
        );

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
  // WHATSAPP
  // =====================================================
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/919311266321",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main
      className="
        relative
        overflow-hidden
        bg-white
        pt-20
        lg:min-h-[700px]
        lg:pt-0
      "
    >

      {/* =================================================
          MAIN HERO CONTAINER
      ================================================= */}
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-12
        "
      >

        {/* =================================================
            HERO LAYOUT

            Mobile  = vertical
            Desktop = normal desktop layout
        ================================================= */}
        <div
          className="
            relative
            flex
            min-h-0
            flex-col
            lg:min-h-[700px]
            lg:flex-row
            lg:items-center
          "
        >

          {/* =================================================
              SOFT BACKGROUND GLOW
              Desktop only
          ================================================= */}
          <div
            className="
              pointer-events-none
              absolute
              right-[5%]
              top-[10%]
              z-0
              hidden
              h-[500px]
              w-[500px]
              rounded-full
              bg-blue-100/30
              blur-[120px]
              lg:block
            "
          />

          {/* =================================================
              LEFT / MAIN CONTENT
          ================================================= */}
          <div
            className="
              relative
              z-20
              w-full
              py-10
              lg:w-[57%]
              lg:py-24
            "
          >

            {/* =================================================
                CONTACT US LABEL
            ================================================= */}
            <div
              className="
                mb-5
                flex
                items-center
                gap-4
                sm:mb-7
                sm:gap-5
              "
            >
              <span
                className="
                  text-xs
                  font-bold
                  tracking-[0.2em]
                  text-blue-700
                  sm:text-sm
                "
              >
                CONTACT US
              </span>

              <span className="h-px w-10 bg-blue-700 sm:w-16" />
            </div>


            {/* =================================================
                MAIN HEADING
            ================================================= */}
            <h1
              className="
                text-4xl
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-[#07143f]

                sm:text-5xl

                lg:text-[5rem]
                lg:leading-[1.05]
              "
            >
              Let&apos;s{" "}
              <span className="text-blue-700">
                Connect
              </span>
            </h1>


            {/* =================================================
                SMALL DIVIDER
            ================================================= */}
            <div
              className="
                mt-6
                h-px
                w-10
                bg-slate-200
                sm:mt-8
                sm:w-12
              "
            />


            {/* =================================================
                DESCRIPTION
            ================================================= */}
            <p
              className="
                mt-5
                w-full
                max-w-xl
                text-base
                leading-7
                text-slate-600

                sm:mt-7
                sm:text-lg
                sm:leading-8
              "
            >
              Whether you&apos;re a distributor, retailer,
              manufacturer, institutional buyer, or customer,
              we&apos;d love to hear from you.
            </p>


            {/* =================================================
                BUTTONS
            ================================================= */}
            <div
              className="
                mt-7
                flex
                w-full
                flex-col
                gap-3

                sm:mt-9
                sm:flex-row
                sm:gap-4

                lg:w-auto
              "
            >

              {/* =================================================
                  BUSINESS ENQUIRY
              ================================================= */}
              <button
                type="button"
                onClick={goToBusinessEnquiry}
                aria-label="Business Enquiry"
                className="
                  group
                  flex
                  min-h-[56px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  whitespace-nowrap

                  rounded-xl
                  bg-blue-700

                  px-6
                  py-4

                  text-base
                  font-semibold
                  text-white

                  shadow-lg
                  shadow-blue-700/20

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-blue-800
                  hover:shadow-xl
                  hover:shadow-blue-700/30

                  active:translate-y-0
                  active:scale-[0.98]

                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:ring-offset-2

                  sm:w-auto
                  sm:px-7
                "
              >
                <ArrowRight
                  className="
                    h-5
                    w-5
                    flex-shrink-0
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

                <span>
                  Business Enquiry
                </span>
              </button>


              {/* =================================================
                  WHATSAPP
              ================================================= */}
              <button
                type="button"
                onClick={openWhatsApp}
                aria-label="WhatsApp Us"
                className="
                  group
                  flex
                  min-h-[56px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  whitespace-nowrap

                  rounded-xl

                  border
                  border-slate-300

                  bg-white

                  px-6
                  py-4

                  text-base
                  font-semibold
                  text-[#07143f]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-green-400
                  hover:bg-green-50

                  active:translate-y-0
                  active:scale-[0.98]

                  focus:outline-none
                  focus:ring-2
                  focus:ring-green-400
                  focus:ring-offset-2

                  sm:w-auto
                  sm:px-7
                "
              >
                <MessageCircle
                  className="
                    h-5
                    w-5
                    flex-shrink-0
                    text-green-500

                    transition-transform
                    duration-300

                    group-hover:scale-110
                  "
                />

                <span>
                  WhatsApp Us
                </span>
              </button>

            </div>


            {/* =================================================
                RESPONSE TIME
            ================================================= */}
            <div
              className="
                mt-7
                flex
                w-full
                items-center
                gap-3

                sm:mt-9
                sm:gap-4
              "
            >

              {/* Shield */}
              <div
                className="
                  flex
                  h-11
                  w-11
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-50

                  sm:h-12
                  sm:w-12
                "
              >
                <ShieldCheck
                  className="
                    h-5
                    w-5
                    text-blue-600
                  "
                />
              </div>


              {/* Text */}
              <p
                className="
                  text-sm
                  leading-6
                  text-slate-600

                  sm:text-base
                "
              >
                We typically respond within{" "}
                <span
                  className="
                    font-bold
                    text-blue-700
                  "
                >
                  24 hours
                </span>
              </p>

            </div>

          </div>


          {/* =================================================
              DESKTOP RIGHT SIDE ARTWORK
              Desktop only
          ================================================= */}
          <div
            className="
              pointer-events-none
              absolute
              right-[-10%]
              top-0
              z-10
              hidden
              h-full
              w-[68%]
              items-center
              justify-center
              lg:flex
            "
          >
            <img
              src={contactHeroImg}
              alt="RV Brothers products and distribution"
              className="
                w-full
                object-contain
              "
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
              }}
            />
          </div>


          {/* =================================================
              MOBILE ARTWORK

              IMPORTANT:
              This is now BELOW the content instead of
              sitting beside it.
          ================================================= */}
          <div
            className="
              relative
              z-10
              flex
              w-full
              justify-center

              pb-8
              pt-2

              lg:hidden
            "
          >
            <img
              src={contactHeroImg}
              alt="RV Brothers products and distribution"
              className="
                h-auto
                w-full
                max-w-[480px]
                object-contain
              "
            />
          </div>

        </div>

      </div>

    </main>
  );
}