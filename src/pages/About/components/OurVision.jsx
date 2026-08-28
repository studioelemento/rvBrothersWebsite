import React from "react";
import ourVisionImage from "../../../assets/our-vision.png";

const Icon = ({ type, white = false }) => {
  const color = white ? "#ffffff" : "#174de0";

  const props = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (type) {
    case "target":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" fill={color} />
          <path d="M12 2v3" />
          <path d="M22 12h-3" />
          <path d="m16 8-4 4" />
        </svg>
      );

    case "users":
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M16 5.5a3 3 0 0 1 0 5.8" />
          <path d="M18 14c2 .6 3 2.4 3 5" />
        </svg>
      );

    case "growth":
      return (
        <svg {...props}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="m7 15 4-4 3 2 6-7" />
        </svg>
      );

    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "award":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="4" />
          <path d="m9 12-1 8 4-2 4 2-1-8" />
          <path d="m10.5 8 1 1 2-2" />
        </svg>
      );

    case "bulb":
      return (
        <svg {...props}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M8.5 14.5A6 6 0 1 1 15.5 14.5c-.8.7-1.5 1.7-1.5 3.5h-4c0-1.8-.7-2.8-1.5-3.5z" />
          <path d="M12 2v1" />
          <path d="m4.9 4.9.7.7" />
          <path d="m19.1 4.9-.7.7" />
        </svg>
      );

    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21" />
          <path d="M12 3c-2.5 2.5-3.8 5.5-3.8 9S9.5 18.5 12 21" />
        </svg>
      );

    case "eye":
      return (
        <svg
          {...props}
          width="42"
          height="42"
        >
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );

    default:
      return null;
  }
};


/* =========================================================
   VISION ITEM
========================================================= */

const VisionItem = ({ icon, title, text }) => {
  return (
    <div className="vision-item">

      <div className="vision-item-icon">
        <Icon type={icon} />
      </div>

      <div className="vision-item-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

    </div>
  );
};


/* =========================================================
   PROMISE ITEM
========================================================= */

const PromiseItem = ({ icon, title, text }) => {
  return (
    <div className="promise-item">

      <div className="promise-icon">
        <Icon type={icon} />
      </div>

      <div className="promise-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

    </div>
  );
};


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function OurVision() {

  const visionItems = [
    {
      icon: "target",
      title: "Empowering Businesses",
      text:
        "We empower businesses with the right products, competitive pricing and dependable supply chains to help them grow.",
    },
    {
      icon: "users",
      title: "Building Long-Term Relationships",
      text:
        "We believe in long-term partnerships built on trust, transparency and mutual growth.",
    },
    {
      icon: "growth",
      title: "Scalable Growth",
      text:
        "Through strong infrastructure, smart operations and a customer-first approach, we continue to scale responsibly.",
    },
    {
      icon: "shield",
      title: "Quality You Can Trust",
      text:
        "Quality is at the core of everything we do—from the products we offer to the service we deliver.",
    },
  ];


  const promises = [
    {
      icon: "shield",
      title: "Trust",
      text:
        "We operate with honesty and transparency.",
    },
    {
      icon: "users",
      title: "Commitment",
      text:
        "We are committed to our partners and customers.",
    },
    {
      icon: "award",
      title: "Excellence",
      text:
        "We strive for excellence in all that we do.",
    },
    {
      icon: "bulb",
      title: "Innovation",
      text:
        "We embrace new ideas to build a better tomorrow.",
    },
    {
      icon: "globe",
      title: "Impact",
      text:
        "We aim to create meaningful impact across communities.",
    },
  ];


  return (
    <section className="our-vision-section">

      <div className="our-vision-container">

        {/* =====================================================
            VISION CONTENT
        ===================================================== */}

        <div className="vision-main">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="vision-left">

            <div className="vision-label">
              OUR VISION
            </div>

            <div className="vision-line"></div>

            <h2>
              Our Vision for
              <br />
              Modern <span>Commerce</span>
            </h2>

            <div className="small-line"></div>

            <p className="vision-description">
              We aim to build a reliable and scalable business ecosystem
              that connects products, businesses and opportunities across
              India.
            </p>

            <div className="vision-items">

              {visionItems.map((item) => (
                <VisionItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                />
              ))}

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE IMAGE
          ================================================= */}

          <div className="vision-right">

            <img
              src={ourVisionImage}
              alt="RV Brothers Business Vision"
              className="vision-image"
            />

            <div className="vision-image-fade"></div>


            {/* QUOTE CARD */}

            <div className="vision-quote">

              <div className="quote-mark">
                “
              </div>

              <p>
                Our vision is to create a future where businesses of all
                sizes have access to the best products, reliable solutions
                and endless opportunities to grow.
              </p>

              <div className="quote-line"></div>

            </div>

          </div>

        </div>


        {/* =====================================================
            OUR PROMISE
        ===================================================== */}

        <div className="promise-section">

          {/* =================================================
              OUR PROMISE INTRO
          ================================================= */}

          <div className="promise-intro">

            <div className="promise-intro-icon">
              <Icon type="eye" white />
            </div>

            <div className="promise-intro-content">

              <h2>
                Our Promise
              </h2>

              <p>
                To deliver value, build trust and grow together—every
                step of the way.
              </p>

            </div>

          </div>


          {/* =================================================
              PROMISE DIVIDER
          ================================================= */}

          <div className="promise-divider"></div>


          {/* =================================================
              FIVE PROMISES
          ================================================= */}

          <div className="promise-grid">

            {promises.map((promise) => (
              <PromiseItem
                key={promise.title}
                icon={promise.icon}
                title={promise.title}
                text={promise.text}
              />
            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }


        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .our-vision-section {
          width: 100%;
          padding: 30px 22px 50px;
          background: #f5f7fc;
          overflow: hidden;

          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }


        .our-vision-container {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;

          padding: 42px 38px 30px;

          background: #ffffff;

          border-radius: 20px;

          box-shadow:
            0 10px 35px rgba(20, 40, 80, 0.07);

          overflow: hidden;
        }


        /* =====================================================
           MAIN VISION
        ===================================================== */

        .vision-main {
          display: grid;

          grid-template-columns: 47% 53%;

          min-height: 730px;

          position: relative;
        }


        .vision-left {
          position: relative;
          z-index: 5;

          padding: 10px 45px 25px 20px;
        }


        .vision-label {
          color: #174de0;

          font-size: 16px;
          font-weight: 800;

          letter-spacing: 3px;

          margin-bottom: 22px;
        }


        .vision-line {
          width: 48px;
          height: 2px;

          background: #174de0;

          margin-bottom: 28px;
        }


        .vision-left h2 {
          margin: 0;

          color: #07163c;

          font-size: 53px;
          line-height: 1.12;

          letter-spacing: -2px;

          font-weight: 800;
        }


        .vision-left h2 span {
          color: #2949d8;
        }


        .small-line {
          width: 58px;
          height: 2px;

          background: #174de0;

          margin: 30px 0 22px;
        }


        .vision-description {
          max-width: 590px;

          margin: 0;

          color: #526987;

          font-size: 18px;

          line-height: 1.65;
        }


        /* =====================================================
           VISION ITEMS
        ===================================================== */

        .vision-items {
          margin-top: 25px;
        }


        .vision-item {
          display: flex;

          align-items: flex-start;

          gap: 20px;

          padding: 15px 0;

          border-bottom: 1px solid #dce2ed;

          transition:
            transform 0.3s ease;
        }


        .vision-item:hover {
          transform: translateX(5px);
        }


        .vision-item-icon {
          width: 57px;
          height: 57px;

          min-width: 57px;

          border-radius: 50%;

          background: #edf2ff;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        .vision-item-content {
          padding-top: 2px;

          min-width: 0;
        }


        .vision-item-content h3 {
          margin: 0 0 5px;

          color: #07163c;

          font-size: 16px;

          font-weight: 800;

          line-height: 1.35;
        }


        .vision-item-content p {
          margin: 0;

          color: #526987;

          font-size: 14px;

          line-height: 1.5;

          max-width: 520px;
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .vision-right {
          position: relative;

          min-height: 730px;

          overflow: hidden;

          border-radius:
            0 18px 18px 0;

          background: #edf2f8;
        }


        .vision-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center;

          transform: scale(1.02);
        }


        .vision-image-fade {
          position: absolute;

          top: 0;
          left: 0;
          bottom: 0;

          width: 48%;

          z-index: 2;

          pointer-events: none;

          background:
            linear-gradient(
              to right,
              #ffffff 0%,
              rgba(255,255,255,0.96) 10%,
              rgba(255,255,255,0.80) 28%,
              rgba(255,255,255,0.42) 55%,
              rgba(255,255,255,0) 100%
            );
        }


        /* =====================================================
           QUOTE
        ===================================================== */

        .vision-quote {
          position: absolute;

          top: 48px;
          left: 48px;

          width: 440px;

          max-width:
            calc(100% - 80px);

          padding: 25px 28px;

          border-radius: 15px;

          background:
            rgba(255,255,255,0.86);

          backdrop-filter: blur(10px);

          -webkit-backdrop-filter:
            blur(10px);

          box-shadow:
            0 15px 40px
            rgba(20,40,80,0.10);

          z-index: 4;
        }


        .quote-mark {
          color: #778bef;

          font-family: Georgia, serif;

          font-size: 58px;

          line-height: 0.7;

          height: 34px;

          font-weight: 700;
        }


        .vision-quote p {
          margin: 8px 0 18px;

          color: #07163c;

          font-size: 20px;

          line-height: 1.48;

          font-weight: 750;
        }


        .quote-line {
          width: 55px;

          height: 2px;

          background: #174de0;
        }


        /* =====================================================
           PROMISE SECTION
           
           IMPORTANT FIX:
           Our Promise gets a smaller column.
           Five promise columns share the remaining width.
        ===================================================== */

        .promise-section {
          margin-top: 28px;

          min-height: 155px;

          padding: 24px 24px;

          border-radius: 17px;

          background:
            linear-gradient(
              105deg,
              #f0f3ff,
              #f7f8ff
            );

          display: grid;

          /*
            SMALLER OUR PROMISE COLUMN
            + divider
            + remaining five columns
          */

          grid-template-columns:
            220px
            1px
            minmax(0, 1fr);

          align-items: stretch;

          gap: 18px;
        }


        /* =====================================================
           OUR PROMISE INTRO
        ===================================================== */

        .promise-intro {
          display: flex;

          flex-direction: column;

          align-items: flex-start;

          justify-content: center;

          gap: 12px;

          min-width: 0;
        }


        .promise-intro-icon {
          width: 60px;
          height: 60px;

          min-width: 60px;

          border-radius: 50%;

          background: #071a55;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        .promise-intro-content {
          min-width: 0;
        }


        .promise-intro h2 {
          margin: 0 0 6px;

          color: #07163c;

          font-size: 22px;

          font-weight: 800;

          line-height: 1.15;
        }


        .promise-intro p {
          margin: 0;

          max-width: 195px;

          color: #526987;

          font-size: 12px;

          line-height: 1.5;
        }


        /* =====================================================
           PROMISE DIVIDER
        ===================================================== */

        .promise-divider {
          width: 1px;

          height: 100%;

          background: #cfd6e6;
        }


        /* =====================================================
           FIVE PROMISES
        ===================================================== */

        .promise-grid {
          display: grid;

          grid-template-columns:
            repeat(5, minmax(0, 1fr));

          width: 100%;

          min-width: 0;
        }


        .promise-item {
          min-width: 0;

          width: 100%;

          padding:
            0 14px;

          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 10px;

          border-right:
            1px solid #d6dceb;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }


        .promise-item:first-child {
          padding-left: 4px;
        }


        .promise-item:last-child {
          border-right: none;

          padding-right: 0;
        }


        .promise-item:hover {
          transform:
            translateY(-4px);
        }


        /* =====================================================
           PROMISE ICON
        ===================================================== */

        .promise-icon {
          width: 42px;
          height: 42px;

          min-width: 42px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #edf2ff;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        .promise-icon svg {
          width: 24px;
          height: 24px;
        }


        /* =====================================================
           PROMISE TEXT
        ===================================================== */

        .promise-content {
          min-width: 0;

          width: 100%;
        }


        .promise-content h3 {
          margin: 0 0 7px;

          color: #07163c;

          font-size: 14px;

          font-weight: 800;

          line-height: 1.3;

          /*
            Prevent headings from breaking in the middle.
          */
          white-space: nowrap;

          overflow: hidden;

          text-overflow: ellipsis;
        }


        .promise-content p {
          margin: 0;

          color: #526987;

          font-size: 11.5px;

          line-height: 1.5;

          overflow-wrap: break-word;

          word-break: normal;
        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1201px) {

          .promise-section {
            grid-template-columns:
              220px
              1px
              minmax(0, 1fr);

            gap: 20px;

            padding-left: 24px;
            padding-right: 24px;
          }


          .promise-item {
            padding-left: 18px;
            padding-right: 18px;
          }


          .promise-item:first-child {
            padding-left: 4px;
          }


          .promise-item:last-child {
            padding-right: 0;
          }


          .promise-content h3 {
            font-size: 15px;

            white-space: nowrap;
          }


          .promise-content p {
            font-size: 12px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .vision-main {
            grid-template-columns: 1fr;
          }


          .vision-left {
            padding-right: 20px;
          }


          .vision-right {
            min-height: 620px;

            margin-top: 10px;

            border-radius: 16px;
          }


          .vision-image-fade {
            width: 38%;
          }


          /*
            Promise becomes vertical container.
          */

          .promise-section {
            grid-template-columns: 1fr;

            gap: 20px;
          }


          .promise-divider {
            width: 100%;

            height: 1px;
          }


          .promise-intro {
            flex-direction: row;

            align-items: center;

            gap: 18px;
          }


          .promise-intro p {
            max-width: 400px;
          }


          .promise-grid {
            grid-template-columns:
              repeat(5, minmax(0, 1fr));
          }


          .promise-item {
            padding-left: 10px;

            padding-right: 10px;
          }


          .promise-icon {
            width: 40px;
            height: 40px;

            min-width: 40px;
          }


          .promise-content h3 {
            font-size: 13px;
          }


          .promise-content p {
            font-size: 11px;
          }

        }


        /* =====================================================
           SMALL TABLET
        ===================================================== */

        @media (max-width: 800px) {

          .our-vision-container {
            padding:
              32px 24px 25px;
          }


          .vision-left h2 {
            font-size: 44px;
          }


          .vision-right {
            min-height: 570px;
          }


          .vision-quote {
            left: 30px;

            top: 30px;

            width: 390px;
          }


          .promise-grid {
            grid-template-columns:
              repeat(2, 1fr);

            row-gap: 20px;
          }


          .promise-item {
            border-right: none;

            border-bottom:
              1px solid #d6dceb;

            padding-bottom: 17px;
          }


          .promise-item:nth-child(odd) {
            border-right:
              1px solid #d6dceb;

            padding-right: 15px;
          }


          .promise-item:nth-child(even) {
            padding-left: 15px;
          }


          .promise-item:last-child {
            border-bottom: none;
          }


          .promise-content h3 {
            white-space: nowrap;

            font-size: 14px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .our-vision-section {
            padding:
              15px 10px 30px;
          }


          .our-vision-container {
            padding:
              28px 17px 20px;

            border-radius: 13px;
          }


          .vision-label {
            font-size: 13px;

            letter-spacing: 2px;
          }


          .vision-left h2 {
            font-size: 35px;

            letter-spacing: -1px;
          }


          .vision-description {
            font-size: 16px;
          }


          .vision-item {
            gap: 14px;
          }


          .vision-item-icon {
            width: 50px;
            height: 50px;

            min-width: 50px;
          }


          .vision-item-content h3 {
            font-size: 15px;
          }


          .vision-item-content p {
            font-size: 13px;
          }


          .vision-right {
            min-height: 500px;
          }


          .vision-image-fade {
            width: 45%;

            background:
              linear-gradient(
                to right,
                #ffffff 0%,
                rgba(255,255,255,0.78) 30%,
                rgba(255,255,255,0) 100%
              );
          }


          .vision-quote {
            left: 20px;

            top: 20px;

            width:
              calc(100% - 40px);

            max-width: none;

            padding: 20px;
          }


          .vision-quote p {
            font-size: 16px;
          }


          /* =================================================
             MOBILE PROMISE
          ================================================= */

          .promise-section {
            padding: 20px;

            gap: 18px;
          }


          .promise-intro {
            flex-direction: row;

            align-items: center;

            gap: 15px;
          }


          .promise-intro-icon {
            width: 56px;
            height: 56px;

            min-width: 56px;
          }


          .promise-intro h2 {
            font-size: 20px;
          }


          .promise-intro p {
            max-width: none;

            font-size: 12px;
          }


          .promise-grid {
            grid-template-columns: 1fr;
          }


          .promise-item,
          .promise-item:nth-child(odd),
          .promise-item:nth-child(even) {

            border-right: none;

            border-bottom:
              1px solid #d6dceb;

            padding:
              0 0 16px;

          }


          .promise-item:last-child {
            border-bottom: none;
          }


          .promise-content h3 {
            font-size: 14px;

            white-space: nowrap;
          }


          .promise-content p {
            font-size: 12px;
          }

        }

      `}</style>

    </section>
  );
}