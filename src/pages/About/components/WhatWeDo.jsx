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
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#ffffff",
        padding: "90px 46px 60px",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* =========================================
          INDIA MAP - DECORATIVE LEFT CORNER
          ========================================= */}
      <img
        src={panIndiaMap}
        alt=""
        style={{
          position: "absolute",
          left: "-105px",
          top: "15px",
          width: "330px",
          height: "470px",
          objectFit: "contain",
          opacity: 0.28,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* =========================================
          MAIN CONTENT
          ========================================= */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1420px",
          margin: "0 auto",
        }}
      >
        {/* =========================================
            WHAT WE DO LABEL
            ========================================= */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginBottom: "22px",
          }}
        >
          <span
            style={{
              color: "#145cff",
              fontWeight: 800,
              fontSize: "17px",
              letterSpacing: "5px",
            }}
          >
            WHAT WE DO
          </span>

          <span
            style={{
              width: "55px",
              height: "2px",
              background: "#145cff",
              display: "block",
            }}
          />
        </div>

        {/* =========================================
            MAIN HEADING
            ========================================= */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "52px",
            lineHeight: 1.15,
            fontWeight: 800,
            color: "#050b20",
            margin: "0 auto 20px",
            maxWidth: "950px",
            letterSpacing: "-2px",
          }}
        >
          A Diversified Business Ecosystem
        </h2>

        {/* =========================================
            DESCRIPTION
            ========================================= */}
        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
            color: "#536987",
            fontSize: "19px",
            lineHeight: 1.65,
          }}
        >
          RV Brothers Business Consortium operates across multiple sectors,
          connecting quality products with businesses and customers through
          strong distribution, trusted partnerships and operational excellence.
        </p>

        {/* =========================================
            FEATURE ROW
            ========================================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            marginTop: "45px",
            marginBottom: "45px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "0 28px",
                borderRight:
                  index !== features.length - 1
                    ? "1px solid #d8deea"
                    : "none",
              }}
            >
              <div
                style={{
                  width: "66px",
                  height: "66px",
                  minWidth: "66px",
                  borderRadius: "50%",
                  background: "#eef4ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon type={feature.icon} />
              </div>

              <div>
                <h3
                  style={{
                    margin: "0 0 7px",
                    color: "#07102b",
                    fontSize: "17px",
                    fontWeight: 800,
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#405274",
                    fontSize: "14px",
                    lineHeight: 1.5,
                  }}
                >
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            BUSINESS CARDS
            ========================================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
          }}
        >
          {businesses.map((business) => (
            <div
              key={business.title}
              className="business-card"
              style={{
                background: "#ffffff",
                border: "1px solid #e1e7f0",
                borderRadius: "18px",
                padding: "20px",
                minHeight: "245px",
                display: "grid",
                gridTemplateColumns: "1fr 1.15fr",
                gap: "20px",
                boxShadow: "0 8px 25px rgba(18, 43, 84, 0.06)",
              }}
            >
              {/* CARD CONTENT */}
              <div>
                <div
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "14px",
                    background: "#eef4ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                  }}
                >
                  <Icon type={business.icon} />
                </div>

                <h3
                  style={{
                    color: "#07102b",
                    fontSize: "20px",
                    lineHeight: 1.25,
                    margin: "0 0 12px",
                    fontWeight: 800,
                  }}
                >
                  {business.title}
                </h3>

                <div
                  style={{
                    width: "30px",
                    height: "2px",
                    background: "#145cff",
                    marginBottom: "18px",
                  }}
                />

                <p
                  style={{
                    margin: 0,
                    color: "#526a8c",
                    fontSize: "15px",
                    lineHeight: 1.65,
                  }}
                >
                  {business.description}
                </p>
              </div>

              {/* CARD IMAGE */}
              <div
                className="business-card-image"
                style={{
                  height: "195px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "#f4f7fc",
                }}
              >
                <img
                  src={business.image}
                  alt={business.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            BOTTOM CTA
            ========================================= */}
        <div
          style={{
            marginTop: "26px",
            borderRadius: "18px",
            background: "#f1f4ff",
            padding: "25px 35px",
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr auto",
            alignItems: "center",
            gap: "35px",
          }}
        >
          {/* CTA LEFT */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "65px",
                height: "65px",
                minWidth: "65px",
                borderRadius: "50%",
                background: "#07163c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
              <div
                style={{
                  color: "#07163c",
                  fontSize: "23px",
                  fontWeight: 800,
                }}
              >
                Different Verticals. One Purpose.
              </div>

              <div
                style={{
                  color: "#174de0",
                  fontSize: "23px",
                  fontWeight: 800,
                }}
              >
                Building Value. Creating Impact.
              </div>
            </div>
          </div>

          {/* CTA DESCRIPTION */}
          <p
            style={{
              margin: 0,
              color: "#3d5276",
              fontSize: "15px",
              lineHeight: 1.6,
            }}
          >
            We continue to expand our capabilities and explore new
            opportunities to better serve businesses across India.
          </p>

          {/* CTA BUTTON */}
          <button
            type="button"
            onClick={() => {
              window.location.href = "/businesses";
            }}
            style={{
              border: "none",
              background: "#07163c",
              color: "#ffffff",
              padding: "16px 24px",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition:
                "transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.background = "#145cff";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(20, 92, 255, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "#07163c";
              e.currentTarget.style.boxShadow = "none";
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
          /* ===============================
             BUSINESS CARD HOVER
             =============================== */

          .business-card {
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease,
              border-color 0.3s ease;
          }

          .business-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 18px 40px rgba(18, 43, 84, 0.15) !important;
            border-color: #1764ff !important;
          }

          /* ===============================
             IMAGE HOVER
             =============================== */

          .business-card-image img {
            transition: transform 0.4s ease;
          }

          .business-card:hover .business-card-image img {
            transform: scale(1.05);
          }

          /* ===============================
             RESPONSIVE DESIGN
             =============================== */

          @media (max-width: 1100px) {
            section {
              padding-left: 25px !important;
              padding-right: 25px !important;
            }

            h2 {
              font-size: 44px !important;
            }

            .business-card {
              grid-template-columns: 1fr !important;
            }

            .business-card-image {
              height: 220px !important;
            }
          }

          @media (max-width: 900px) {
            .business-card {
              grid-template-columns: 1fr !important;
            }

            .business-card-image {
              height: 210px !important;
            }
          }

          @media (max-width: 750px) {
            h2 {
              font-size: 36px !important;
            }

            section {
              padding: 70px 20px 45px !important;
            }

            .business-card {
              padding: 18px !important;
            }

            .business-card-image {
              height: 200px !important;
            }
          }

          @media (max-width: 600px) {
            .business-card {
              transform: none;
            }

            .business-card:hover {
              transform: translateY(-6px);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .business-card,
            .business-card-image img {
              transition: none !important;
            }

            .business-card:hover {
              transform: none;
            }

            .business-card:hover .business-card-image img {
              transform: none;
            }
          }
        `}
      </style>
    </section>
  );
};

export default WhatWeDo;