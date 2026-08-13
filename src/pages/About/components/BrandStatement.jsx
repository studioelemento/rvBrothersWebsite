import React from "react";
import brandStatementImage from "../../../assets/brand-statement.png";

// ========================================
// ICON COMPONENT
// ========================================
const Icon = ({ type }) => {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#174de0",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "handshake") {
    return (
      <svg {...common}>
        <path d="m4 12 3-3 4 2 3-3 6 4-3 4-4-2-2 2-7-4z" />
        <path d="M7 9 5 7l2-2 4 2" />
        <path d="m17 10 2-2-2-2-4 2" />
        <path d="m8 14 3 3" />
        <path d="m11 13 3 3" />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" fill="#174de0" />
        <path d="M12 2v3" />
        <path d="M22 12h-3" />
        <path d="m16 8-4 4" />
      </svg>
    );
  }

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

  if (type === "growth") {
    return (
      <svg {...common}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 2 6-7" />
      </svg>
    );
  }

  return null;
};

// ========================================
// FEATURE ITEM
// ========================================
const FeatureItem = ({ icon, title, text }) => {
  return (
    <div className="brand-feature">
      <div className="brand-feature-icon">
        <Icon type={icon} />
      </div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
};

// ========================================
// MAIN COMPONENT
// ========================================
export default function BrandStatement() {
  const features = [
    {
      icon: "handshake",
      title: "Built on Trust",
      text: "Honest relationships that last.",
    },
    {
      icon: "target",
      title: "Focused on Growth",
      text: "Helping businesses scale every day.",
    },
    {
      icon: "shield",
      title: "Committed to Quality",
      text: "Quality products and services you can rely on.",
    },
    {
      icon: "users",
      title: "Together for the Future",
      text: "Growing together. Succeeding together.",
    },
  ];

  return (
    <section className="brand-statement-section">
      <div className="brand-statement-container">

        {/* ========================================
            MAIN CONTENT
            ======================================== */}
        <div className="brand-main">

          {/* ======================================
              LEFT CONTENT
              ====================================== */}
          <div className="brand-left">

            <div className="brand-label">
              OUR PROMISE. OUR PARTNERSHIP.
            </div>

            <div className="brand-top-line"></div>

            <h2>
              More Than Commerce.
              <br />
              <span>Built Around Relationships.</span>
            </h2>

            <div className="brand-heading-line"></div>

            <p className="brand-description">
              We believe sustainable growth comes from trust, reliability
              and long-term partnerships that create value for businesses
              and customers alike.
            </p>

            {/* ======================================
                FOUR FEATURES
                ====================================== */}
            <div className="brand-features">
              {features.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  text={feature.text}
                />
              ))}
            </div>

            {/* ======================================
                BUTTONS
                ====================================== */}
            <div className="brand-buttons">

              <button
                type="button"
                className="brand-primary-button"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                <span>Partner With Us</span>
                <strong>→</strong>
              </button>

              <button
                type="button"
                className="brand-secondary-button"
                onClick={() => {
                  window.location.href = "/shop";
                }}
              >
                <span>Explore Our Products</span>
                <strong>→</strong>
              </button>

            </div>
          </div>

          {/* ======================================
              RIGHT IMAGE
              ====================================== */}
          <div className="brand-right">

            <img
              src={brandStatementImage}
              alt="RV Brothers business ecosystem"
              className="brand-image"
            />

            <div className="brand-side-message">
              <span></span>

              <div>
                <strong>
                  Building Today.
                  <br />
                  Empowering <b>Tomorrow.</b>
                </strong>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================
            BOTTOM BLUE STATEMENT
            ======================================== */}
        <div className="brand-bottom">

          {/* RV LOGO */}
          <div className="brand-bottom-logo">
            RV
          </div>

          {/* TITLE */}
          <div className="brand-bottom-title">
            <h3>
              One Vision. Many Possibilities.
            </h3>

            <h4>
              Growing Together.
            </h4>
          </div>

          {/* DESCRIPTION */}
          <div className="brand-bottom-description">
            At RV Brothers Business Consortium, we don't just deliver
            products — we build partnerships, strengthen businesses and
            create a better commerce ecosystem for a stronger India.
          </div>

          {/* FINAL MESSAGE */}
          <div className="brand-bottom-final">

            <div className="brand-bottom-final-icon">
              <Icon type="growth" />
            </div>

            <div>
              <strong>
                Stronger Partners.
                <br />
                Stronger Future.
              </strong>
            </div>

          </div>

        </div>
      </div>

      {/* ========================================
          STYLES
          ======================================== */}
      <style>{`

        /* ========================================
           MAIN SECTION
           ======================================== */

        .brand-statement-section {
          width: 100%;

          background: #f5f7fc;

          padding: 28px 22px 40px;

          box-sizing: border-box;

          overflow: hidden;

          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .brand-statement-container {
          width: 100%;

          max-width: 1490px;

          margin: 0 auto;

          background: #ffffff;

          border-radius: 18px;

          padding: 52px 38px 40px;

          box-sizing: border-box;

          overflow: hidden;

          box-shadow:
            0 8px 30px rgba(15, 35, 75, 0.08);
        }

        /* ========================================
           MAIN CONTENT
           ======================================== */

        .brand-main {
          position: relative;

          min-height: 650px;

          display: grid;

          grid-template-columns: 46% 54%;

          align-items: stretch;

          overflow: hidden;
        }

        /* ========================================
           LEFT CONTENT
           ======================================== */

        .brand-left {
          position: relative;

          z-index: 5;

          padding: 8px 38px 18px 20px;

          box-sizing: border-box;

          display: flex;

          flex-direction: column;

          justify-content: flex-start;
        }

        .brand-label {
          color: #183ed5;

          font-size: 17px;

          font-weight: 800;

          letter-spacing: 3.2px;

          margin-bottom: 24px;
        }

        .brand-top-line {
          width: 48px;

          height: 2px;

          background: #174de0;

          margin-bottom: 39px;
        }

        .brand-left h2 {
          margin: 0;

          color: #07163c;

          font-size: 50px;

          line-height: 1.16;

          letter-spacing: -2px;

          font-weight: 800;
        }

        .brand-left h2 span {
          color: #2949d8;
        }

        .brand-heading-line {
          width: 48px;

          height: 2px;

          background: #174de0;

          margin: 34px 0 22px;
        }

        .brand-description {
          max-width: 570px;

          margin: 0;

          color: #526987;

          font-size: 18px;

          line-height: 1.62;
        }

        /* ========================================
           FEATURES
           ======================================== */

        .brand-features {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          width: 100%;

          margin-top: 27px;
        }

        .brand-feature {
          min-width: 0;

          padding: 0 15px;

          text-align: center;

          border-right: 1px solid #dce2ed;

          transition:
            transform 0.3s ease;
        }

        .brand-feature:first-child {
          padding-left: 0;
        }

        .brand-feature:last-child {
          padding-right: 0;

          border-right: none;
        }

        .brand-feature:hover {
          transform: translateY(-4px);
        }

        .brand-feature-icon {
          width: 58px;

          height: 58px;

          margin: 0 auto 12px;

          border-radius: 50%;

          background: #edf2ff;

          display: flex;

          align-items: center;

          justify-content: center;
        }

        .brand-feature-icon svg {
          width: 29px;

          height: 29px;
        }

        .brand-feature h3 {
          margin: 0 0 8px;

          color: #07163c;

          font-size: 14px;

          line-height: 1.3;

          font-weight: 800;
        }

        .brand-feature p {
          margin: 0;

          color: #526987;

          font-size: 12px;

          line-height: 1.55;
        }

        /* ========================================
           BUTTONS
           ======================================== */

        .brand-buttons {
          display: flex;

          align-items: center;

          gap: 28px;

          margin-top: 40px;

          width: 100%;
        }

        .brand-primary-button,
        .brand-secondary-button {
          height: 61px;

          min-height: 61px;

          padding: 0 25px;

          border-radius: 9px;

          box-sizing: border-box;

          font-family: inherit;

          font-size: 16px;

          font-weight: 700;

          cursor: pointer;

          display: flex;

          align-items: center;

          justify-content: space-between;

          white-space: nowrap;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .brand-primary-button {
          width: 235px;

          min-width: 235px;

          border: 1px solid #1739c8;

          background: #173bc8;

          color: #ffffff;

          box-shadow:
            0 8px 18px rgba(23, 59, 200, 0.2);
        }

        .brand-secondary-button {
          width: 280px;

          min-width: 280px;

          border: 1.5px solid #9ba8c2;

          background: #ffffff;

          color: #07163c;
        }

        .brand-primary-button:hover {
          transform: translateY(-3px);

          background: #102fae;

          box-shadow:
            0 12px 25px rgba(23, 59, 200, 0.3);
        }

        .brand-secondary-button:hover {
          transform: translateY(-3px);

          background: #f5f7ff;

          border-color: #174de0;
        }

        .brand-primary-button strong,
        .brand-secondary-button strong {
          font-size: 27px;

          font-weight: 400;

          line-height: 1;

          transition:
            transform 0.25s ease;
        }

        .brand-primary-button:hover strong,
        .brand-secondary-button:hover strong {
          transform: translateX(5px);
        }

        /* ========================================
           RIGHT IMAGE
           ======================================== */

        .brand-right {
          position: relative;

          min-height: 650px;

          margin-left: -35px;

          overflow: hidden;

          background: transparent;

          border-radius: 0 14px 14px 0;

          z-index: 2;
        }

        .brand-image {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center;

          transform: scale(1.02);
        }

        /* ========================================
           IMAGE FADE
           ======================================== */

        .brand-right::before {
          content: "";

          position: absolute;

          top: 0;

          left: 0;

          bottom: 0;

          width: 42%;

          z-index: 2;

          pointer-events: none;

          background:
            linear-gradient(
              to right,
              #ffffff 0%,
              rgba(255, 255, 255, 0.92) 18%,
              rgba(255, 255, 255, 0.55) 48%,
              rgba(255, 255, 255, 0) 100%
            );
        }

        /* ========================================
           IMAGE MESSAGE
           ======================================== */

        .brand-side-message {
          position: absolute;

          top: 72px;

          left: 38px;

          z-index: 4;

          display: flex;

          align-items: flex-start;

          gap: 24px;

          color: #07163c;

          opacity: 0;
        }

        .brand-side-message > span {
          width: 2px;

          height: 58px;

          display: block;

          background: #174de0;
        }

        .brand-side-message strong {
          font-size: 22px;

          line-height: 1.42;

          font-weight: 800;
        }

        .brand-side-message b {
          color: #2949d8;
        }

        /* ========================================
           BOTTOM BLUE BANNER
           ======================================== */

        .brand-bottom {
          margin-top: 30px;

          min-height: 153px;

          padding: 25px 34px;

          box-sizing: border-box;

          border-radius: 16px;

          background:
            linear-gradient(
              100deg,
              #071d68,
              #102c8b
            );

          color: #ffffff;

          display: grid;

          grid-template-columns:
            105px
            1.1fr
            1.55fr
            250px;

          align-items: center;

          gap: 25px;
        }

        .brand-bottom-logo {
          width: 82px;

          height: 82px;

          border-radius: 50%;

          background: #2948dc;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #ffffff;

          font-size: 35px;

          font-weight: 800;
        }

        .brand-bottom-title {
          border-left:
            1px solid rgba(255, 255, 255, 0.4);

          padding-left: 27px;
        }

        .brand-bottom-title h3 {
          margin: 0 0 5px;

          font-size: 22px;

          line-height: 1.3;

          font-weight: 800;
        }

        .brand-bottom-title h4 {
          margin: 0;

          color: #a6b6ff;

          font-size: 20px;

          font-weight: 700;
        }

        .brand-bottom-description {
          border-left:
            1px solid rgba(255, 255, 255, 0.4);

          padding-left: 27px;

          color: #ffffff;

          font-size: 14px;

          line-height: 1.65;
        }

        .brand-bottom-final {
          border-left:
            1px solid rgba(255, 255, 255, 0.4);

          padding-left: 24px;

          display: flex;

          align-items: center;

          gap: 16px;
        }

        .brand-bottom-final-icon {
          width: 52px;

          height: 52px;

          min-width: 52px;

          border-radius: 10px;

          background: #2448dc;

          display: flex;

          align-items: center;

          justify-content: center;
        }

        .brand-bottom-final-icon svg {
          stroke: #ffffff;
        }

        .brand-bottom-final strong {
          font-size: 15px;

          line-height: 1.5;
        }

        /* ========================================
           LARGE TABLET / SMALL DESKTOP
           ======================================== */

        @media (max-width: 1250px) {

          .brand-statement-container {
            padding-left: 30px;

            padding-right: 30px;
          }

          .brand-main {
            grid-template-columns: 45% 55%;
          }

          .brand-left h2 {
            font-size: 43px;
          }

          .brand-feature {
            padding-left: 9px;

            padding-right: 9px;
          }

          .brand-buttons {
            gap: 15px;
          }

          .brand-primary-button {
            width: 210px;

            min-width: 210px;
          }

          .brand-secondary-button {
            width: 250px;

            min-width: 250px;
          }

          .brand-right {
            margin-left: -25px;
          }

          .brand-bottom {
            grid-template-columns:
              90px
              1fr
              1.35fr
              210px;

            gap: 15px;

            padding: 20px;
          }
        }

        /* ========================================
           TABLET
           ======================================== */

        @media (max-width: 950px) {

          .brand-main {
            grid-template-columns: 1fr;

            overflow: visible;
          }

          .brand-left {
            padding: 10px 10px 40px;
          }

          .brand-right {
            min-height: 600px;

            margin-left: 0;

            border-radius: 12px;
          }

          .brand-right::before {
            width: 30%;

            background:
              linear-gradient(
                to right,
                #ffffff 0%,
                rgba(255, 255, 255, 0.7) 45%,
                rgba(255, 255, 255, 0) 100%
              );
          }

          .brand-bottom {
            grid-template-columns: 1fr 1fr;

            gap: 25px;
          }

          .brand-bottom-description {
            border-left: none;

            padding-left: 0;
          }

          .brand-bottom-final {
            border-left: none;

            padding-left: 0;
          }
        }

        /* ========================================
           MOBILE
           ======================================== */

        @media (max-width: 650px) {

          .brand-statement-section {
            padding: 15px 10px 25px;
          }

          .brand-statement-container {
            padding: 35px 20px 25px;

            border-radius: 12px;
          }

          .brand-label {
            font-size: 13px;

            letter-spacing: 2px;
          }

          .brand-top-line {
            margin-bottom: 25px;
          }

          .brand-left h2 {
            font-size: 34px;

            letter-spacing: -1px;
          }

          .brand-description {
            font-size: 16px;
          }

          .brand-features {
            grid-template-columns: 1fr 1fr;

            row-gap: 25px;
          }

          .brand-feature:nth-child(2) {
            border-right: none;
          }

          .brand-buttons {
            flex-direction: column;

            gap: 12px;
          }

          .brand-primary-button,
          .brand-secondary-button {
            width: 100%;

            min-width: 0;
          }

          .brand-right {
            min-height: 470px;

            margin-left: 0;
          }

          .brand-right::before {
            width: 40%;
          }

          .brand-bottom {
            grid-template-columns: 1fr;

            padding: 25px;
          }

          .brand-bottom-title,
          .brand-bottom-description,
          .brand-bottom-final {
            border-left: none;

            padding-left: 0;
          }

          .brand-bottom-logo {
            width: 65px;

            height: 65px;

            font-size: 28px;
          }
        }

      `}</style>
    </section>
  );
}