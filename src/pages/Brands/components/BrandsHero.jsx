import React from "react";
import brandsDiscussionImage from "../../../assets/brands-discussion.png";

export default function BrandsHero() {
  const openDiscussion = () => {
    window.location.href = "/brands/collectibles";
  };

  return (
    <section className="brands-hero-section">
      <div className="brands-hero-container">

        {/* =========================
            SECTION HEADING
        ========================= */}
        <div className="brands-section-heading">
          <div className="heading-line"></div>

          <div>
            <h2>FEATURED DISCUSSION</h2>
            <p>Handpicked insights and conversations that matter.</p>
          </div>
        </div>

        {/* =========================
            FEATURED DISCUSSION CARD
        ========================= */}
        <div className="featured-discussion">

          {/* Background Image */}
          <img
            src={brandsDiscussionImage}
            alt="RV Brothers featured discussion"
            className="discussion-image"
          />

          {/* Dark Overlay */}
          <div className="discussion-overlay"></div>

          {/* Content */}
          <div className="discussion-content">

            {/* Category */}
            <span className="discussion-category">
              MARKET INSIGHTS
            </span>

            {/* Title */}
            <h1>
              The Future of Collectibles:
              <br />
              Trends Shaping Tomorrow’s
              <br />
              Marketplace
            </h1>

            {/* Description */}
            <p className="discussion-description">
              From rare finds to digital collectibles, explore the key
              trends, emerging opportunities, and evolving consumer
              behaviors driving the collectibles industry forward.
            </p>

            {/* Author */}
            <div className="discussion-author">

              <div className="author-logo">
                RV
              </div>

              <div className="author-details">
                <strong>RV Brothers Team</strong>

                <span>
                  May 18, 2025
                  <b>•</b>
                  6 min read
                </span>
              </div>

            </div>

            {/* Button */}
            <button
              type="button"
              className="discussion-button"
              onClick={openDiscussion}
            >
              <span>Read Full Discussion</span>
              <span className="button-arrow">→</span>
            </button>

          </div>
        </div>
      </div>

      {/* =========================
          COMPONENT STYLES
      ========================= */}
      <style>{`

        /* =========================================================
           MAIN SECTION
        ========================================================= */

        .brands-hero-section {
          width: 100%;
          background: #ffffff;
          padding: 58px 4%;
          box-sizing: border-box;
        }

        .brands-hero-container {
          width: 100%;
          max-width: 1450px;
          margin: 0 auto;
        }


        /* =========================================================
           SECTION HEADING
        ========================================================= */

        .brands-section-heading {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 30px;
        }

        .heading-line {
          width: 5px;
          height: 29px;
          background: #1747ff;
          border-radius: 10px;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .brands-section-heading h2 {
          margin: 0;
          color: #101b42;
          font-size: 23px;
          font-weight: 800;
          letter-spacing: 1.4px;
          line-height: 1.2;
        }

        .brands-section-heading p {
          margin: 8px 0 0;
          color: #526387;
          font-size: 18px;
          line-height: 1.45;
        }


        /* =========================================================
           FEATURED CARD
        ========================================================= */

        .featured-discussion {
          position: relative;
          width: 100%;
          min-height: 580px;
          border-radius: 16px;
          overflow: hidden;
          background: #020b26;
          box-shadow:
            0 16px 40px rgba(5, 15, 45, 0.12);
        }


        /* =========================================================
           IMAGE
        ========================================================= */

        .discussion-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 1;
        }


        /* =========================================================
           DESKTOP OVERLAY
        ========================================================= */

        .discussion-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;

          background:
            linear-gradient(
              90deg,
              rgba(1, 10, 35, 0.98) 0%,
              rgba(2, 12, 39, 0.94) 32%,
              rgba(2, 12, 39, 0.72) 50%,
              rgba(2, 12, 39, 0.18) 76%,
              rgba(2, 12, 39, 0.02) 100%
            );
        }


        /* =========================================================
           CONTENT
        ========================================================= */

        .discussion-content {
          position: relative;
          z-index: 3;
          width: 53%;
          min-height: 580px;
          padding: 58px 0 55px 62px;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }


        /* =========================================================
           CATEGORY
        ========================================================= */

        .discussion-category {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 9px 18px;
          border-radius: 30px;
          background: rgba(36, 70, 190, 0.92);
          color: #ffffff;

          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.9px;

          margin-bottom: 22px;
        }


        /* =========================================================
           TITLE
        ========================================================= */

        .discussion-content h1 {
          margin: 0;
          max-width: 650px;
          color: #ffffff;
          font-size: 40px;
          line-height: 1.22;
          font-weight: 700;
          letter-spacing: -1px;
        }


        /* =========================================================
           DESCRIPTION
        ========================================================= */

        .discussion-description {
          max-width: 590px;
          margin: 24px 0 30px;
          color: rgba(255, 255, 255, 0.86);
          font-size: 17px;
          line-height: 1.55;
        }


        /* =========================================================
           AUTHOR
        ========================================================= */

        .discussion-author {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 27px;
        }

        .author-logo {
          width: 56px;
          height: 56px;
          border: 1px solid #3158ff;
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #ffffff;
          font-family: Georgia, serif;
          font-size: 22px;
          background: rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
        }

        .author-details {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .author-details strong {
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
        }

        .author-details span {
          color: rgba(255, 255, 255, 0.72);
          font-size: 14px;
        }

        .author-details b {
          margin: 0 7px;
          font-weight: 400;
        }


        /* =========================================================
           BUTTON
        ========================================================= */

        .discussion-button {
          border: none;
          outline: none;
          cursor: pointer;

          min-width: 300px;
          padding: 15px 22px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;

          border-radius: 7px;
          background: #163cff;
          color: #ffffff;

          font-size: 16px;
          font-weight: 600;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        .discussion-button:hover {
          background: #244dff;
          transform: translateY(-2px);

          box-shadow:
            0 10px 24px rgba(22, 60, 255, 0.32);
        }

        .button-arrow {
          font-size: 25px;
          font-weight: 300;
          line-height: 1;

          transition:
            transform 0.25s ease;
        }

        .discussion-button:hover .button-arrow {
          transform: translateX(5px);
        }


        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1000px) {

          .brands-hero-section {
            padding: 48px 4%;
          }

          .featured-discussion {
            min-height: 550px;
          }

          .discussion-content {
            width: 65%;
            min-height: 550px;
            padding: 52px 0 48px 45px;
          }

          .discussion-content h1 {
            font-size: 36px;
          }

          .discussion-description {
            font-size: 16px;
          }
        }


        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 700px) {

          /* SECTION */

          .brands-hero-section {
            padding: 27px 14px 34px;
          }


          /* HEADING */

          .brands-section-heading {
            margin-bottom: 18px;
            gap: 9px;
          }

          .heading-line {
            width: 4px;
            height: 21px;
            margin-top: 1px;
          }

          .brands-section-heading h2 {
            font-size: 15px;
            letter-spacing: 0.8px;
          }

          .brands-section-heading p {
            font-size: 12px;
            line-height: 1.35;
            margin-top: 4px;
          }


          /* FEATURED CARD */

          .featured-discussion {
            min-height: 455px;
            border-radius: 12px;
          }


          /* IMAGE */

          .discussion-image {
            object-position: 65% center;
          }


          /* MOBILE OVERLAY */

          .discussion-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(2, 10, 35, 0.05) 0%,
                rgba(2, 10, 35, 0.18) 18%,
                rgba(2, 10, 35, 0.58) 42%,
                rgba(2, 10, 35, 0.94) 67%,
                rgba(2, 10, 35, 1) 100%
              );
          }


          /* CONTENT */

          .discussion-content {
            width: 100%;
            min-height: 455px;
            padding: 22px 19px 19px;
            box-sizing: border-box;
            justify-content: flex-end;
          }


          /* CATEGORY */

          .discussion-category {
            font-size: 9px;
            padding: 6px 11px;
            letter-spacing: 0.7px;
            margin-bottom: 11px;
          }


          /* TITLE */

          .discussion-content h1 {
            max-width: 100%;
            font-size: 22px;
            line-height: 1.18;
            letter-spacing: -0.35px;
          }

          .discussion-content h1 br {
            display: none;
          }


          /* DESCRIPTION */

          .discussion-description {
            max-width: 100%;
            margin: 11px 0 14px;
            font-size: 12px;
            line-height: 1.4;
          }


          /* AUTHOR */

          .discussion-author {
            gap: 8px;
            margin-bottom: 14px;
          }

          .author-logo {
            width: 34px;
            height: 34px;
            font-size: 14px;
          }

          .author-details {
            gap: 2px;
          }

          .author-details strong {
            font-size: 11px;
          }

          .author-details span {
            font-size: 9px;
          }

          .author-details b {
            margin: 0 4px;
          }


          /* BUTTON */

          .discussion-button {
            width: 100%;
            min-width: 0;
            padding: 10px 13px;
            border-radius: 6px;
            font-size: 11px;
            gap: 8px;
          }

          .button-arrow {
            font-size: 19px;
          }
        }


        /* =========================================================
           SMALL PHONES
        ========================================================= */

        @media (max-width: 380px) {

          .brands-hero-section {
            padding-left: 10px;
            padding-right: 10px;
          }

          .featured-discussion {
            min-height: 430px;
          }

          .discussion-content {
            min-height: 430px;
            padding: 20px 16px 17px;
          }

          .discussion-content h1 {
            font-size: 20px;
          }

          .discussion-description {
            font-size: 11px;
            line-height: 1.35;
          }

          .discussion-button {
            font-size: 10px;
            padding: 9px 12px;
          }

          .button-arrow {
            font-size: 18px;
          }
        }

      `}</style>
    </section>
  );
}