import React from "react";

const categories = [
  {
    title: "Collectibles",
    description: "Insights on rare finds, market shifts, and collecting trends.",
    icon: "trophy",
  },
  {
    title: "Wellness",
    description: "Conversations around health, wellness, and mindful living.",
    icon: "lotus",
  },
  {
    title: "Distribution",
    description: "Strategies, networks, and insights for smarter distribution.",
    icon: "truck",
  },
  {
    title: "Market Trends",
    description: "Data, analysis, and outlooks shaping tomorrow's markets.",
    icon: "chart",
  },
  {
    title: "Product Insights",
    description: "Deep dives into products, innovation, and categories.",
    icon: "search",
  },
  {
    title: "Business Growth",
    description: "Ideas, frameworks, and real conversations for scaling up.",
    icon: "growth",
  },
];

function CategoryIcon({ type }) {
  if (type === "trophy") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
      >
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
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
      >
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
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
      >
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
        <path
          d="M49 27V34H56"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
      >
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
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
      >
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
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
    >
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
    <section className="w-full bg-white px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1380px]">

        {/* TOP HEADER */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* LEFT */}
          <div>
            <div className="mb-7">
              <span className="text-sm font-bold tracking-[0.18em] text-blue-700">
                EXPLORE TOPICS
              </span>

              <div className="mt-7 h-[2px] w-14 bg-blue-600"></div>
            </div>

            <h2 className="max-w-[600px] text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#101b43] md:text-5xl lg:text-[54px]">
              Browse Discussions
              <br />
              by Topic
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex items-center md:justify-center">
            <p className="max-w-[500px] text-lg font-medium leading-7 text-[#536487]">
              Explore curated conversations across key areas driving commerce,
              growth, and value.
            </p>
          </div>
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((category) => (
            <article
              key={category.title}
              className="group relative min-h-[270px] overflow-hidden rounded-2xl border border-[#f0f2f8] bg-white p-8 shadow-[0_8px_30px_rgba(16,29,70,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,29,70,0.10)]"
            >

              {/* ICON */}
              <div className="flex h-[94px] w-[94px] items-center justify-center rounded-full bg-[#eef0ff] text-blue-600 transition-transform duration-300 group-hover:scale-105">
                <CategoryIcon type={category.icon} />
              </div>

              {/* CONTENT */}
              <div className="absolute left-[160px] right-8 top-[52px]">
                <h3 className="text-[24px] font-bold tracking-[-0.03em] text-[#101b43]">
                  {category.title}
                </h3>

                <p className="mt-3 max-w-[300px] text-[16px] leading-6 text-[#536487]">
                  {category.description}
                </p>
              </div>

              {/* ARROW */}
              <div className="absolute bottom-14 left-[160px] text-3xl font-light text-blue-600 transition-transform duration-300 group-hover:translate-x-2">
                →
              </div>

              {/* FADED BACKGROUND ICON */}
              <div className="pointer-events-none absolute -bottom-12 right-[-10px] opacity-[0.055]">
                <CategoryIcon type={category.icon} />
                <div className="scale-[3]">
                  <CategoryIcon type={category.icon} />
                </div>
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}