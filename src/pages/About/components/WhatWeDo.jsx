import React from "react";

// ===============================
// IMAGE IMPORTS
// ===============================
import panIndiaMap from "../../../assets/pan-india-map-only.png";
import digitalImage from "../../../assets/business_digital.png";
import distributionImage from "../../../assets/business_distribution.png";
import fmcgImage from "../../../assets/business_fmcg.png";
import industrialImage from "../../../assets/business_industrial.png";
import toysImage from "../../../assets/business_toys.png";
import shakeImage from "../../../assets/shake.png";

// ===============================
// ICON COMPONENT
// ===============================
const Icon = ({ type }) => {
  const common = {
    width: 32,
    height: 32,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#1764ff",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "shield") {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  if (type === "users") {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <path d="M16 5.5a3 3 0 0 1 0 5.8" />
        <path d="M18 14c2 .6 3 2.4 3 5" />
      </svg>
    );
  }

  if (type === "truck") {
    return (
      <svg {...common}>
        <rect x="2" y="5" width="12" height="10" rx="1" />
        <path d="M14 8h4l4 4v3h-8z" />
        <circle cx="6" cy="17" r="2" />
        <circle cx="18" cy="17" r="2" />
      </svg>
    );
  }

  if (type === "cart") {
    return (
      <svg {...common}>
        <path d="M3 4h2l2 10h10l2-7H6" />
        <circle cx="9" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </svg>
    );
  }

  if (type === "box") {
    return (
      <svg {...common}>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="m4 7.5 8 4.5 8-4.5" />
        <path d="M12 12v9" />
      </svg>
    );
  }

  if (type === "leaf") {
    return (
      <svg {...common}>
        <path d="M20 4C11 4 5 8 5 15c0 2.2 1.8 4 4 4 7 0 11-6 11-15z" />
        <path d="M4 20c3-5 7-8 12-10" />
      </svg>
    );
  }

  if (type === "gear") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2 2-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-2.8v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-2-2 .1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H5v-2.8h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2-2 .1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V4h2.8v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 2 2-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2v2.8h-.2a1.7 1.7 0 0 0-1.5 1z" />
      </svg>
    );
  }

  if (type === "toy") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="7" />
        <circle cx="9.5" cy="10" r="1" />
        <circle cx="14.5" cy="10" r="1" />
        <path d="M9 15c2 1.5 4 1.5 6 0" />
        <path d="M8 5 6 3" />
        <path d="M16 5l2-2" />
      </svg>
    );
  }

  if (type === "handshake") {
    return (
      <svg {...common}>
        <path d="m3 11 4-4 4 1 2-2h4l4 4-3 3-3-2-2 2-3-2-3 3-4-3z" />
        <path d="m8 15 2 2" />
        <path d="m11 14 2 2" />
        <path d="m14 13 2 1" />
      </svg>
    );
  }

  return null;
};

// ===============================
// MAIN COMPONENT
// ===============================
const WhatWeDo = () => {
  const features = [
    {
      icon: "shield",
      title: "Quality Assured",
      text: "Verified & reliable product range",
    },
    {
      icon: "users",
      title: "Wide Network",
      text: "Strong partnerships across India",
    },
    {
      icon: "truck",
      title: "Pan India Reach",
      text: "Delivering to businesses nationwide",
    },
    {
      icon: "shield",
      title: "Trusted Operations",
      text: "Built on transparency and trust",
    },
  ];

  const businesses = [
    {
      icon: "cart",
      title: "Commerce & Retail",
      description:
        "Consumer products across multiple categories, curated for quality and customer satisfaction.",
      image: digitalImage,
    },
    {
      icon: "box",
      title: "Distribution Network",
      description:
        "A strong and efficient distribution network ensuring timely delivery and product availability.",
      image: distributionImage,
    },
    {
      icon: "leaf",
      title: "FMCG & Wellness",
      description:
        "Greenbae and other wellness products promoting a healthier and better lifestyle.",
      image: fmcgImage,
    },
    {
      icon: "gear",
      title: "Industrial Supplies",
      description:
        "High-quality bearings, fasteners and industrial products for diverse business needs.",
      image: industrialImage,
    },
    {
      icon: "toy",
      title: "Collectibles & Hobby Products",
      description:
        "A wide range of toys, collectibles and hobby products for all age groups.",
      image: toysImage,
    },
    {
      icon: "handshake",
      title: "Strategic Partnerships",
      description:
        "Collaborating with brands and businesses to create mutual growth and long-term value.",
      image: shakeImage,
    },
  ];

  return (
    <section className="what-we-do-section">
      {/* =========================================
          INDIA MAP - DECORATIVE LEFT CORNER
      ========================================= */}
      <img
        src={panIndiaMap}
        alt=""
        className="what-we-do-map"
      />

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div className="what-we-do-container">

        {/* =========================================
            WHAT WE DO LABEL
        ========================================= */}
        <div className="what-we-do-label">
          <span>WHAT WE DO</span>
          <span className="what-we-do-label-line" />
        </div>

        {/* =========================================
            MAIN HEADING
        ========================================= */}
        <h2 className="what-we-do-heading">
          A Diversified Business Ecosystem
        </h2>

        {/* =========================================
            DESCRIPTION
        ========================================= */}
        <p className="what-we-do-description">
          RV Brothers Business Consortium operates across multiple sectors,
          connecting quality products with businesses and customers through
          strong distribution, trusted partnerships and operational excellence.
        </p>

        {/* =========================================
            FEATURE ROW
        ========================================= */}
        <div className="what-we-do-features">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="what-we-do-feature"
            >
              {/* Icon */}
              <div className="what-we-do-feature-icon">
                <Icon type={feature.icon} />
              </div>

              {/* Text */}
              <div className="what-we-do-feature-content">
                <h3>{feature.title}</h3>

                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            BUSINESS CARDS
        ========================================= */}
        <div className="what-we-do-businesses">
          {businesses.map((business) => (
            <div
              key={business.title}
              className="business-card"
            >
              {/* =================================
                  CARD CONTENT
              ================================= */}
              <div className="business-card-content">

                {/* Icon */}
                <div className="business-card-icon">
                  <Icon type={business.icon} />
                </div>

                {/* Title */}
                <h3>{business.title}</h3>

                {/* Divider */}
                <div className="business-card-divider" />

                {/* Description */}
                <p>{business.description}</p>
              </div>

              {/* =================================
                  CARD IMAGE
              ================================= */}
              <div className="business-card-image">
                <img
                  src={business.image}
                  alt={business.title}
                />
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}
        <div className="what-we-do-cta">

          {/* CTA LEFT */}
          <div className="what-we-do-cta-left">

            <div className="what-we-do-cta-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19V5" />
                <path d="M4 19h16" />
                <path d="m7 15 4-4 3 2 6-7" />
              </svg>
            </div>

            <div>
              <div className="what-we-do-cta-title">
                Different Verticals. One Purpose.
              </div>

              <div className="what-we-do-cta-title blue">
                Building Value. Creating Impact.
              </div>
            </div>
          </div>

          {/* CTA DESCRIPTION */}
          <p className="what-we-do-cta-description">
            We continue to expand our capabilities and explore new
            opportunities to better serve businesses across India.
          </p>

          {/* CTA BUTTON */}
          <button
            type="button"
            className="what-we-do-cta-button"
            onClick={() => {
              window.location.href = "/businesses";
            }}
          >
            Explore Our Businesses&nbsp;&nbsp; →
          </button>
        </div>
      </div>

      {/* =========================================
          RESPONSIVE + HOVER DESIGN
      ========================================= */}
      <style>
        {`
          /* =====================================================
             MAIN SECTION
          ===================================================== */

          .what-we-do-section {
            position: relative;
            overflow: hidden;
            background: #ffffff;
            padding: 90px 46px 60px;
            font-family:
              Inter,
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif;
            box-sizing: border-box;
            width: 100%;
          }

          .what-we-do-section *,
          .what-we-do-section *::before,
          .what-we-do-section *::after {
            box-sizing: border-box;
          }


          /* =====================================================
             DECORATIVE MAP
          ===================================================== */

          .what-we-do-map {
            position: absolute;
            left: -105px;
            top: 15px;
            width: 330px;
            height: 470px;
            object-fit: contain;
            opacity: 0.28;
            pointer-events: none;
            z-index: 0;
          }


          /* =====================================================
             MAIN CONTAINER
          ===================================================== */

          .what-we-do-container {
            position: relative;
            z-index: 2;
            width: 100%;
            max-width: 1420px;
            margin: 0 auto;
          }


          /* =====================================================
             SECTION LABEL
          ===================================================== */

          .what-we-do-label {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin-bottom: 22px;
          }

          .what-we-do-label span:first-child {
            color: #145cff;
            font-weight: 800;
            font-size: 17px;
            letter-spacing: 5px;
          }

          .what-we-do-label-line {
            width: 55px;
            height: 2px;
            background: #145cff;
            display: block;
            flex-shrink: 0;
          }


          /* =====================================================
             MAIN HEADING
          ===================================================== */

          .what-we-do-heading {
            text-align: center;
            font-size: 52px;
            line-height: 1.15;
            font-weight: 800;
            color: #050b20;
            margin: 0 auto 20px;
            max-width: 950px;
            letter-spacing: -2px;
          }


          /* =====================================================
             DESCRIPTION
          ===================================================== */

          .what-we-do-description {
            width: 100%;
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
            color: #536987;
            font-size: 19px;
            line-height: 1.65;
          }


          /* =====================================================
             FEATURE ROW
             DESKTOP = 4 COLUMNS
          ===================================================== */

          .what-we-do-features {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            margin-top: 45px;
            margin-bottom: 45px;
            width: 100%;
          }

          .what-we-do-feature {
            min-width: 0;
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 0 28px;
            border-right: 1px solid #d8deea;
          }

          .what-we-do-feature:last-child {
            border-right: none;
          }

          .what-we-do-feature-icon {
            width: 66px;
            height: 66px;
            min-width: 66px;
            border-radius: 50%;
            background: #eef4ff;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .what-we-do-feature-content {
            min-width: 0;
          }

          .what-we-do-feature-content h3 {
            margin: 0 0 7px;
            color: #07102b;
            font-size: 17px;
            font-weight: 800;
            line-height: 1.25;
          }

          .what-we-do-feature-content p {
            margin: 0;
            color: #405274;
            font-size: 14px;
            line-height: 1.5;
          }


          /* =====================================================
             BUSINESS CARDS
             DESKTOP = 3 COLUMNS
          ===================================================== */

          .what-we-do-businesses {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
            width: 100%;
          }

          .business-card {
            min-width: 0;
            background: #ffffff;
            border: 1px solid #e1e7f0;
            border-radius: 18px;
            padding: 20px;
            min-height: 245px;
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
            gap: 20px;
            box-shadow: 0 8px 25px rgba(18, 43, 84, 0.06);
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease,
              border-color 0.3s ease;
            overflow: hidden;
          }

          .business-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 18px 40px rgba(18, 43, 84, 0.15);
            border-color: #1764ff;
          }

          .business-card-content {
            min-width: 0;
          }

          .business-card-icon {
            width: 55px;
            height: 55px;
            border-radius: 14px;
            background: #eef4ff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 18px;
          }

          .business-card-content h3 {
            color: #07102b;
            font-size: 20px;
            line-height: 1.25;
            margin: 0 0 12px;
            font-weight: 800;
            overflow-wrap: anywhere;
          }

          .business-card-divider {
            width: 30px;
            height: 2px;
            background: #145cff;
            margin-bottom: 18px;
          }

          .business-card-content p {
            margin: 0;
            color: #526a8c;
            font-size: 15px;
            line-height: 1.65;
          }

          .business-card-image {
            min-width: 0;
            height: 195px;
            border-radius: 14px;
            overflow: hidden;
            background: #f4f7fc;
          }

          .business-card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.4s ease;
          }

          .business-card:hover .business-card-image img {
            transform: scale(1.05);
          }


          /* =====================================================
             BOTTOM CTA
          ===================================================== */

          .what-we-do-cta {
            margin-top: 26px;
            border-radius: 18px;
            background: #f1f4ff;
            padding: 25px 35px;
            display: grid;
            grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr) auto;
            align-items: center;
            gap: 35px;
            width: 100%;
          }

          .what-we-do-cta-left {
            display: flex;
            align-items: center;
            gap: 20px;
            min-width: 0;
          }

          .what-we-do-cta-icon {
            width: 65px;
            height: 65px;
            min-width: 65px;
            border-radius: 50%;
            background: #07163c;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .what-we-do-cta-title {
            color: #07163c;
            font-size: 23px;
            font-weight: 800;
            line-height: 1.3;
          }

          .what-we-do-cta-title.blue {
            color: #174de0;
          }

          .what-we-do-cta-description {
            margin: 0;
            color: #3d5276;
            font-size: 15px;
            line-height: 1.6;
          }

          .what-we-do-cta-button {
            border: none;
            background: #07163c;
            color: #ffffff;
            padding: 16px 24px;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            white-space: nowrap;
            transition:
              transform 0.25s ease,
              background 0.25s ease,
              box-shadow 0.25s ease;
          }

          .what-we-do-cta-button:hover {
            transform: translateY(-3px);
            background: #145cff;
            box-shadow: 0 10px 25px rgba(20, 92, 255, 0.25);
          }


          /* =====================================================
             TABLET
             901px - 1100px
          ===================================================== */

          @media (max-width: 1100px) {

            .what-we-do-section {
              padding-left: 25px;
              padding-right: 25px;
            }

            .what-we-do-heading {
              font-size: 44px;
            }

            /* 4 feature columns -> 2 columns */
            .what-we-do-features {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              row-gap: 30px;
            }

            .what-we-do-feature {
              padding: 0 25px;
            }

            .what-we-do-feature:nth-child(2) {
              border-right: none;
            }

            .what-we-do-feature:nth-child(3) {
              border-right: 1px solid #d8deea;
            }

            /* Business cards -> 2 columns */
            .what-we-do-businesses {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .business-card {
              grid-template-columns: 1fr;
            }

            .business-card-image {
              height: 220px;
            }

            /* CTA */
            .what-we-do-cta {
              grid-template-columns: 1fr 1fr;
              gap: 25px;
            }

            .what-we-do-cta-button {
              grid-column: 1 / -1;
              justify-self: start;
            }
          }


          /* =====================================================
             TABLET / SMALL SCREEN
             751px - 900px
          ===================================================== */

          @media (max-width: 900px) {

            .what-we-do-section {
              padding-top: 70px;
            }

            .what-we-do-feature {
              padding: 0 18px;
            }

            .what-we-do-feature-icon {
              width: 58px;
              height: 58px;
              min-width: 58px;
            }

            .what-we-do-feature-content h3 {
              font-size: 16px;
            }

            .what-we-do-feature-content p {
              font-size: 13px;
            }

            .business-card-image {
              height: 210px;
            }
          }


          /* =====================================================
             MOBILE
             751px AND BELOW
          ===================================================== */

          @media (max-width: 750px) {

            .what-we-do-section {
              padding: 60px 20px 45px;
              overflow-x: hidden;
            }

            .what-we-do-map {
              left: -150px;
              top: 20px;
              width: 260px;
              height: 380px;
              opacity: 0.12;
            }

            .what-we-do-label {
              gap: 12px;
              margin-bottom: 18px;
            }

            .what-we-do-label span:first-child {
              font-size: 13px;
              letter-spacing: 3px;
            }

            .what-we-do-label-line {
              width: 35px;
            }

            .what-we-do-heading {
              font-size: 36px;
              line-height: 1.12;
              letter-spacing: -1px;
              max-width: 100%;
              margin-bottom: 18px;
            }

            .what-we-do-description {
              font-size: 16px;
              line-height: 1.6;
            }

            /* =================================================
               FEATURES
               2 COLUMNS -> 1 COLUMN
            ================================================= */

            .what-we-do-features {
              grid-template-columns: 1fr;
              gap: 0;
              margin-top: 35px;
              margin-bottom: 35px;
            }

            .what-we-do-feature,
            .what-we-do-feature:nth-child(2),
            .what-we-do-feature:nth-child(3) {
              width: 100%;
              min-width: 0;
              padding: 20px 0;
              border-right: none;
              border-bottom: 1px solid #d8deea;
            }

            .what-we-do-feature:first-child {
              padding-top: 0;
            }

            .what-we-do-feature:last-child {
              border-bottom: none;
              padding-bottom: 0;
            }

            .what-we-do-feature-icon {
              width: 58px;
              height: 58px;
              min-width: 58px;
            }

            .what-we-do-feature-content h3 {
              font-size: 17px;
              line-height: 1.3;
            }

            .what-we-do-feature-content p {
              font-size: 14px;
              line-height: 1.5;
            }


            /* =================================================
               BUSINESS CARDS
               3 COLUMNS -> 1 COLUMN
            ================================================= */

            .what-we-do-businesses {
              grid-template-columns: 1fr;
              gap: 18px;
              width: 100%;
            }

            .business-card {
              width: 100%;
              min-width: 0;
              display: flex;
              flex-direction: column;
              gap: 18px;
              padding: 18px;
              min-height: 0;
            }

            .business-card-content {
              width: 100%;
            }

            .business-card-icon {
              width: 55px;
              height: 55px;
              margin-bottom: 15px;
            }

            .business-card-content h3 {
              font-size: 21px;
              line-height: 1.3;
              overflow-wrap: break-word;
            }

            .business-card-content p {
              font-size: 14px;
              line-height: 1.6;
            }

            .business-card-image {
              width: 100%;
              height: 220px;
              flex-shrink: 0;
            }


            /* =================================================
               CTA MOBILE
            ================================================= */

            .what-we-do-cta {
              margin-top: 20px;
              padding: 22px 20px;
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .what-we-do-cta-left {
              align-items: flex-start;
              gap: 15px;
            }

            .what-we-do-cta-icon {
              width: 55px;
              height: 55px;
              min-width: 55px;
            }

            .what-we-do-cta-icon svg {
              width: 27px;
              height: 27px;
            }

            .what-we-do-cta-title {
              font-size: 18px;
              line-height: 1.35;
            }

            .what-we-do-cta-description {
              font-size: 14px;
              line-height: 1.6;
            }

            .what-we-do-cta-button {
              width: 100%;
              justify-self: stretch;
              white-space: normal;
              padding: 14px 18px;
            }
          }


          /* =====================================================
             SMALL MOBILE
             480px AND BELOW
          ===================================================== */

          @media (max-width: 480px) {

            .what-we-do-section {
              padding: 45px 16px 35px;
            }

            .what-we-do-heading {
              font-size: 31px;
            }

            .what-we-do-description {
              font-size: 15px;
            }

            .what-we-do-feature {
              gap: 14px;
              padding-top: 18px;
              padding-bottom: 18px;
            }

            .what-we-do-feature-icon {
              width: 52px;
              height: 52px;
              min-width: 52px;
            }

            .what-we-do-feature-icon svg {
              width: 27px;
              height: 27px;
            }

            .what-we-do-feature-content h3 {
              font-size: 16px;
            }

            .what-we-do-feature-content p {
              font-size: 13px;
            }

            .business-card {
              padding: 16px;
              border-radius: 16px;
            }

            .business-card-image {
              height: 190px;
            }

            .business-card-content h3 {
              font-size: 19px;
            }

            .business-card-content p {
              font-size: 13px;
            }

            .what-we-do-cta {
              border-radius: 16px;
              padding: 20px 16px;
            }

            .what-we-do-cta-left {
              gap: 12px;
            }

            .what-we-do-cta-icon {
              width: 50px;
              height: 50px;
              min-width: 50px;
            }

            .what-we-do-cta-title {
              font-size: 16px;
            }

            .what-we-do-cta-description {
              font-size: 13px;
            }

            .what-we-do-cta-button {
              font-size: 14px;
            }
          }


          /* =====================================================
             ACCESSIBILITY / REDUCED MOTION
          ===================================================== */

          @media (prefers-reduced-motion: reduce) {

            .business-card,
            .business-card-image img,
            .what-we-do-cta-button {
              transition: none !important;
            }

            .business-card:hover,
            .what-we-do-cta-button:hover {
              transform: none !important;
            }

            .business-card:hover .business-card-image img {
              transform: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default WhatWeDo;