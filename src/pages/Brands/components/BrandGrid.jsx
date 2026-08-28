import React from "react";

import collectiblesImage from "../../../assets/collectibles.png";
import wellnessImage from "../../../assets/wellness.png";
import distributionImage from "../../../assets/distribution.png";
import marketTrendsImage from "../../../assets/market-trends.png";
import productInsightsImage from "../../../assets/product-insights.png";
import businessGrowthImage from "../../../assets/business-growth.png";

const discussions = [
  {
    category: "COLLECTIBLES",
    date: "May 18, 2025",
    title: "The Rising Value of Rare Collectibles in a Digital World",
    description:
      "Explore how rare collectibles continue to hold value and create new opportunities in modern markets.",
    image: collectiblesImage,
  },
  {
    category: "WELLNESS",
    date: "May 15, 2025",
    title: "Wellness as a Lifestyle: Trends Redefining Everyday Choices",
    description:
      "A look at the wellness industry's evolution and how consumers are making more mindful decisions.",
    image: wellnessImage,
  },
  {
    category: "DISTRIBUTION",
    date: "May 12, 2025",
    title: "Smarter Distribution: Building Networks That Deliver Value",
    description:
      "Insights into modern distribution strategies and the networks powering efficient commerce.",
    image: distributionImage,
  },
  {
    category: "MARKET TRENDS",
    date: "May 10, 2025",
    title: "Market Trends 2025: What Businesses Need to Watch",
    description:
      "Key market shifts and consumer behaviors that will shape the year ahead.",
    image: marketTrendsImage,
  },
  {
    category: "PRODUCT INSIGHTS",
    date: "May 08, 2025",
    title: "Product Innovation That Solves Real Problems",
    description:
      "Deep dive into products that are designed with purpose and built for impact.",
    image: productInsightsImage,
  },
  {
    category: "BUSINESS GROWTH",
    date: "May 05, 2025",
    title: "Scaling with Purpose: Building Sustainable Growth",
    description:
      "Strategies and frameworks for growing responsibly while creating long-term value.",
    image: businessGrowthImage,
  },
];

export default function BrandGrid() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-5 md:px-8 md:py-12 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1280px]">

        {/* SECTION HEADER */}
        <div className="mb-8 flex flex-col gap-5 md:mb-9 md:flex-row md:items-end md:justify-between">

          <div>
            <div className="mb-3">
              <span className="text-xs font-bold tracking-[0.16em] text-blue-700">
                ALL DISCUSSIONS
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#101b43] md:text-4xl lg:text-[44px]">
              Latest Discussions
            </h2>

            <p className="mt-2 text-sm text-[#536487] md:text-base">
              Insights, ideas, and conversations shaping the future of commerce.
            </p>
          </div>

          {/* VIEW ALL */}
          <button
            type="button"
            className="
              group
              flex
              w-fit
              items-center
              gap-5
              rounded-lg
              border
              border-blue-600
              bg-white
              px-5
              py-3
              text-sm
              font-semibold
              text-blue-700
              transition-all
              duration-300
              hover:bg-blue-600
              hover:text-white
            "
          >
            <span>View All Discussions</span>

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

        </div>

        {/* DISCUSSION GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

          {discussions.map((discussion, index) => (
            <article
              key={index}
              className="
                group
                overflow-hidden
                rounded-xl
                border
                border-[#edf0f7]
                bg-white
                shadow-[0_6px_24px_rgba(16,29,70,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_32px_rgba(16,29,70,0.10)]
              "
            >

              {/* IMAGE */}
              <div
                className="
                  h-[180px]
                  overflow-hidden
                  bg-[#f4f6fb]
                  sm:h-[190px]
                  md:h-[175px]
                  lg:h-[185px]
                "
              >
                <img
                  src={discussion.image}
                  alt={discussion.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 md:p-5 lg:p-6">

                {/* CATEGORY + DATE */}
                <div className="mb-4 flex items-center justify-between gap-3">

                  <span
                    className="
                      rounded-full
                      bg-[#eef0ff]
                      px-3
                      py-1
                      text-[10px]
                      font-bold
                      tracking-[0.08em]
                      text-blue-700
                    "
                  >
                    {discussion.category}
                  </span>

                  <span className="whitespace-nowrap text-[11px] font-medium text-[#536487]">
                    {discussion.date}
                  </span>

                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-[18px]
                    font-bold
                    leading-[1.25]
                    tracking-[-0.02em]
                    text-[#101b43]
                    md:text-[18px]
                    lg:text-[19px]
                  "
                >
                  {discussion.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-5
                    text-[#536487]
                  "
                >
                  {discussion.description}
                </p>

                {/* READ MORE */}
                <button
                  type="button"
                  className="
                    group/read
                    mt-4
                    flex
                    items-center
                    gap-3
                    text-sm
                    font-semibold
                    text-blue-600
                  "
                >
                  <span>Read More</span>

                  <span
                    className="
                      text-lg
                      transition-transform
                      duration-300
                      group-hover/read:translate-x-1
                    "
                  >
                    →
                  </span>
                </button>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}