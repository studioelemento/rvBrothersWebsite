import React from "react";
import brandsDiscussionImage from "../../../assets/brands-discussion.png";

export default function BrandsHero() {
  return (
    <section className="brands-hero-section">
      <div className="brands-hero-container">

        {/* Section Heading */}
        <div className="brands-section-heading">
          <div className="heading-line"></div>

          <div>
            <h2>FEATURED DISCUSSION</h2>
            <p>Handpicked insights and conversations that matter.</p>
          </div>
        </div>

        {/* Featured Discussion Card */}
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
            >
              <span>Read Full Discussion</span>
              <span className="button-arrow">→</span>
            </button>

          </div>
        </div>
      </div>

      {/* Component Styles */}
      <style>{`
        .brands-hero-section {
          width: 100%;
          background: #ffffff;
          padding: 70px 4%;
          box-sizing: border-box;
        }

        .brands-hero-container {
          width: 100%;
          max-width: 1450px;
          margin: 0 auto;
        }

        /* =========================
           SECTION HEADING
        ========================= */

        .brands-section-heading {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 42px;
        }

        .heading-line {
          width: 6px;
          height: 32px;
          background: #1747ff;
          border-radius: 10px;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .brands-section-heading h2 {
          margin: 0;
          color: #101b42;
          font-size: 25px;
          font-weight: 800;
          letter-spacing: 1.5px;
          line-height: 1.2;
        }

        .brands-section-heading p {
          margin: 12px 0 0;
          color: #526387;
          font-size: 20px;
          line-height: 1.5;
        }

        /* =========================
           FEATURED CARD
        ========================= */

        .featured-discussion {
          position: relative;
          width: 100%;
          min-height: 755px;
          border-radius: 16px;
          overflow: hidden;
          background: #020b26;
          box-shadow: 0 18px 45px rgba(5, 15, 45, 0.12);
        }

        .discussion-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 1;
        }

        /*
          Dark gradient on the left makes the text readable
          while keeping the image visible on the right.
        */
        .discussion-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background:
            linear-gradient(
              90deg,
              rgba(1, 10, 35, 0.98) 0%,
              rgba(2, 12, 39, 0.94) 34%,
              rgba(2, 12, 39, 0.72) 52%,
              rgba(2, 12, 39, 0.16) 78%,
              rgba(2, 12, 39, 0.02) 100%
            );
        }

        /* =========================
           CONTENT
        ========================= */

        .discussion-content {
          position: relative;
          z-index: 3;
          width: 53%;
          min-height: 755px;
          padding: 82px 0 75px 70px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .discussion-category {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 21px;
          border-radius: 30px;
          background: rgba(36, 70, 190, 0.9);
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 32px;
        }

        .discussion-content h1 {
          margin: 0;
          max-width: 670px;
          color: #ffffff;
          font-size: 46px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: -1.2px;
        }

        .discussion-description {
          max-width: 610px;
          margin: 34px 0 42px;
          color: rgba(255, 255, 255, 0.86);
          font-size: 20px;
          line-height: 1.7;
        }

        /* =========================
           AUTHOR
        ========================= */

        .discussion-author {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 44px;
        }

        .author-logo {
          width: 68px;
          height: 68px;
          border: 1px solid #3158ff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-family: Georgia, serif;
          font-size: 25px;
          background: rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
        }

        .author-details {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .author-details strong {
          color: #ffffff;
          font-size: 18px;
          font-weight: 600;
        }

        .author-details span {
          color: rgba(255, 255, 255, 0.72);
          font-size: 16px;
        }

        .author-details b {
          margin: 0 8px;
          font-weight: 400;
        }

        /* =========================
           BUTTON
        ========================= */

        .discussion-button {
          border: none;
          outline: none;
          cursor: pointer;

          min-width: 345px;
          padding: 19px 27px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;

          border-radius: 8px;
          background: #163cff;
          color: #ffffff;

          font-size: 19px;
          font-weight: 600;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        .discussion-button:hover {
          background: #244dff;
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(22, 60, 255, 0.35);
        }

        .button-arrow {
          font-size: 30px;
          font-weight: 300;
          line-height: 1;
          transition: transform 0.25s ease;
        }

        .discussion-button:hover .button-arrow {
          transform: translateX(6px);
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1000px) {

          .brands-hero-section {
            padding: 55px 4%;
          }

          .featured-discussion {
            min-height: 700px;
          }

          .discussion-content {
            width: 65%;
            min-height: 700px;
            padding: 65px 0 60px 50px;
          }

          .discussion-content h1 {
            font-size: 40px;
          }

          .discussion-description {
            font-size: 18px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 700px) {

          .brands-hero-section {
            padding: 45px 18px;
          }

          .brands-section-heading {
            margin-bottom: 28px;
            gap: 12px;
          }

          .heading-line {
            width: 5px;
            height: 27px;
          }

          .brands-section-heading h2 {
            font-size: 19px;
            letter-spacing: 1px;
          }

          .brands-section-heading p {
            font-size: 15px;
            margin-top: 8px;
          }

          .featured-discussion {
            min-height: 720px;
            border-radius: 14px;
          }

          .discussion-image {
            object-position: 62% center;
          }

          .discussion-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(2, 10, 35, 0.35) 0%,
                rgba(2, 10, 35, 0.78) 35%,
                rgba(2, 10, 35, 0.98) 65%,
                rgba(2, 10, 35, 1) 100%
              );
          }

          .discussion-content {
            width: 100%;
            min-height: 720px;
            padding: 40px 27px;
            justify-content: flex-end;
          }

          .discussion-category {
            font-size: 12px;
            padding: 9px 15px;
            margin-bottom: 20px;
          }

          .discussion-content h1 {
            font-size: 30px;
            line-height: 1.25;
            letter-spacing: -0.5px;
          }

          .discussion-description {
            font-size: 15px;
            line-height: 1.55;
            margin: 22px 0 27px;
          }

          .discussion-author {
            margin-bottom: 30px;
            gap: 13px;
          }

          .author-logo {
            width: 52px;
            height: 52px;
            font-size: 20px;
          }

          .author-details strong {
            font-size: 15px;
          }

          .author-details span {
            font-size: 13px;
          }

          .discussion-button {
            width: 100%;
            min-width: 0;
            padding: 16px 20px;
            font-size: 16px;
          }

          .button-arrow {
            font-size: 25px;
          }
        }
      `}</style>
    </section>
  );
}