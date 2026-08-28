import React from "react";

const categories = [
  {
    title: "Collectibles",
    description:
      "Insights on rare finds, market shifts, and collecting trends.",
    icon: "trophy",
  },
  {
    title: "Wellness",
    description:
      "Conversations around health, wellness, and mindful living.",
    icon: "lotus",
  },
  {
    title: "Distribution",
    description:
      "Strategies, networks, and insights for smarter distribution.",
    icon: "truck",
  },
  {
    title: "Market Trends",
    description:
      "Data, analysis, and outlooks shaping tomorrow's markets.",
    icon: "chart",
  },
  {
    title: "Product Insights",
    description:
      "Deep dives into products, innovation, and categories.",
    icon: "search",
  },
  {
    title: "Business Growth",
    description:
      "Ideas, frameworks, and real conversations for scaling up.",
    icon: "growth",
  },
];

function CategoryIcon({ type }) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    className: "h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10",
  };

  if (type === "trophy") {
    return (
      <svg {...common}>
        <path
          d="M22 12H42V25C42 34 38 40 32 42C26 40 22 34 22 25V12Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M22 17H14C14 28 18 33 25 33"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M42 17H50C50 28 46 33 39 33"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M32 42V51"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M24 53H40"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M32 18L34 23H39L35 26L37 31L32 28L27 31L29 26L25 23H30L32 18Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "lotus") {
    return (
      <svg {...common}>
        <path
          d="M32 49C22 48 15 41 14 32C22 31 28 37 32 44"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M32 49C42 48 49 41 50 32C42 31 36 37 32 44"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M32 47C25 40 23 31 27 22C29 18 32 14 32 14C32 14 35 18 37 22C41 31 39 40 32 47Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "truck") {
    return (
      <svg {...common}>
        <path
          d="M8 19H40V43H8V19Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M40 27H49L56 34V43H40V27Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle
          cx="19"
          cy="44"
          r="5"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle
          cx="47"
          cy="44"
          r="5"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg {...common}>
        <path
          d="M10 51H54"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M16 43V36"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M28 43V30"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M40 43V23"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M13 28L25 21L34 24L49 11"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43 11H49V17"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "search") {
    return (
      <svg {...common}>
        <circle
          cx="28"
          cy="28"
          r="15"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M39 39L52 52"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M10 48L24 34L34 39L52 19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43 19H52V28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ExploreCategories() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-5 md:px-8 md:py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1280px]">

        {/* HEADER */}
        <div className="mb-7 md:mb-10 lg:mb-12">

          <div className="mb-3">
            <span className="text-[11px] font-bold tracking-[0.16em] text-blue-700 sm:text-xs">
              EXPLORE TOPICS
            </span>
          </div>

          <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.04em] text-[#101b43] sm:text-3xl md:text-4xl lg:text-[44px]">
            Browse Discussions
            <br />
            by Topic
          </h2>

          <div className="mt-3 h-[2px] w-10 bg-blue-600" />

          <p className="mt-3 max-w-[600px] text-sm leading-5 text-[#536487] sm:text-base md:text-[17px] md:leading-6">
            Explore curated conversations across key areas driving commerce,
            growth, and value.
          </p>

        </div>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((category) => (
            <article
              key={category.title}
              className="
                group
                rounded-xl
                border
                border-[#edf0f7]
                bg-white
                p-5
                shadow-[0_5px_20px_rgba(16,29,70,0.05)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_28px_rgba(16,29,70,0.09)]

                sm:p-6

                md:min-h-[225px]
                md:p-7

                lg:min-h-[230px]
              "
            >

              {/* ICON */}
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#eef0ff]
                  text-blue-600

                  sm:h-[70px]
                  sm:w-[70px]

                  md:h-[82px]
                  md:w-[82px]
                "
              >
                <CategoryIcon type={category.icon} />
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-4
                  text-[20px]
                  font-bold
                  leading-tight
                  tracking-[-0.025em]
                  text-[#101b43]

                  sm:mt-5
                  sm:text-[21px]

                  md:text-[22px]
                "
              >
                {category.title}
              </h3>

              {/* LINE */}
              <div className="mt-2 h-[2px] w-10 bg-blue-600 md:mt-3 md:w-12" />

              {/* DESCRIPTION */}
              <p
                className="
                  mt-3
                  max-w-[400px]
                  text-[14px]
                  leading-5
                  text-[#536487]

                  sm:text-[15px]
                  sm:leading-6
                "
              >
                {category.description}
              </p>

              {/* ARROW */}
              <div
                className="
                  mt-3
                  text-xl
                  font-light
                  leading-none
                  text-blue-600
                  transition-transform
                  duration-300
                  group-hover:translate-x-1

                  sm:mt-4
                  md:mt-5
                  md:text-2xl
                "
              >
                →
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}