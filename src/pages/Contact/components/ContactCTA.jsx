import React from "react";
import { useNavigate } from "react-router-dom";
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
            MAIN CTA
        ================================================= */}
        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-2xl
          "
          style={{
            aspectRatio: "1536 / 1024",
          }}
        >

          {/* =================================================
              ORIGINAL REFERENCE IMAGE
          ================================================= */}
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
              DISCUSS PARTNERSHIP
              
              Invisible functional button.
              The text and design come from the PNG.
          ================================================= */}
          <button
            type="button"
            onClick={handleDiscussPartnership}
            aria-label="Discuss Partnership"
            className="
              group
              absolute
              z-20

              cursor-pointer

              rounded-[12px]

              border-0
              bg-transparent

              p-0
              outline-none

              transition-all
              duration-200
              ease-out

              hover:-translate-y-[1px]

              active:translate-y-0
              active:scale-[0.99]

              focus:outline-none
            "
            style={{
              left: "29.25%",
              top: "56.65%",
              width: "20.30%",
              height: "7.55%",
            }}
          >

            {/* Very subtle hover feedback */}
            <span
              className="
                pointer-events-none
                absolute
                inset-0

                rounded-[12px]

                border
                border-blue-400/0

                transition-all
                duration-200

                group-hover:border-blue-400/50
                group-hover:shadow-[0_0_14px_rgba(37,99,235,0.35)]

                group-active:bg-white/5
              "
            />

          </button>


          {/* =================================================
              EXPLORE PRODUCTS
              
              Invisible functional button.
              The text and design come from the PNG.
          ================================================= */}
          <button
            type="button"
            onClick={handleExploreProducts}
            aria-label="Explore Products"
            className="
              group
              absolute
              z-20

              cursor-pointer

              rounded-[12px]

              border-0
              bg-transparent

              p-0
              outline-none

              transition-all
              duration-200
              ease-out

              hover:-translate-y-[1px]

              active:translate-y-0
              active:scale-[0.99]

              focus:outline-none
            "
            style={{
              left: "51.50%",
              top: "56.65%",
              width: "19.40%",
              height: "7.55%",
            }}
          >

            {/* Very subtle hover feedback */}
            <span
              className="
                pointer-events-none
                absolute
                inset-0

                rounded-[12px]

                border
                border-blue-400/0

                transition-all
                duration-200

                group-hover:border-blue-400/50
                group-hover:shadow-[0_0_14px_rgba(37,99,235,0.35)]

                group-active:bg-white/5
              "
            />

          </button>

        </div>
      </div>
    </section>
  );
}