import React from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93112 66321",
    href: "tel:+919311266321",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@rvbrothers.in",
    href: "mailto:info@rvbrothers.in",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat | 10:00 AM – 6:00 PM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Delhi, India",
    subValue: "Serving businesses across India",
    href: "https://www.google.com/maps/search/?api=1&query=Delhi,India",
  },
];

export default function ContactMethods() {
  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl">

        {/* =================================================
            MAIN CONTACT INFORMATION BOX
        ================================================= */}
        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-slate-200/80
            bg-white
            shadow-[0_20px_50px_-20px_rgba(15,23,42,0.14)]

            sm:rounded-[24px]
            lg:rounded-[28px]
          "
        >

          {/* =================================================
              RESPONSIVE GRID

              Mobile  : 1 column
              Tablet  : 2 columns
              Desktop : 4 columns
          ================================================= */}
          <div
            className="
              grid
              grid-cols-1

              divide-y
              divide-slate-200

              md:grid-cols-2
              md:divide-x
              md:divide-y-0

              lg:grid-cols-4
            "
          >

            {contactItems.map((item) => {
              const Icon = item.icon;
              const isLink = Boolean(item.href);

              const Wrapper = isLink ? "a" : "div";

              const wrapperProps = isLink
                ? {
                    href: item.href,
                    target: item.href.startsWith("http")
                      ? "_blank"
                      : undefined,
                    rel: item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined,
                  }
                : {};

              return (
                <Wrapper
                  key={item.label}
                  {...wrapperProps}
                  className="
                    group
                    relative
                    flex
                    min-w-0
                    items-center

                    gap-4

                    px-5
                    py-6

                    transition-all
                    duration-300

                    hover:bg-blue-600

                    sm:gap-5
                    sm:px-7
                    sm:py-7

                    lg:px-7
                    lg:py-8
                  "
                >

                  {/* =================================================
                      ICON
                  ================================================= */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-blue-100/80

                      bg-[#eef2ff]

                      transition-all
                      duration-300

                      group-hover:border-white
                      group-hover:bg-white

                      sm:h-14
                      sm:w-14

                      lg:h-16
                      lg:w-16
                    "
                  >
                    <Icon
                      className="
                        h-5
                        w-5
                        text-blue-600

                        transition-colors
                        duration-300

                        group-hover:text-blue-600

                        sm:h-6
                        sm:w-6

                        lg:h-7
                        lg:w-7
                      "
                      strokeWidth={2}
                    />
                  </div>


                  {/* =================================================
                      TEXT CONTENT
                  ================================================= */}
                  <div className="min-w-0 flex-1">

                    {/* =================================================
                        HEADING
                    ================================================= */}
                    <h3
                      className="
                        m-0

                        text-[15px]
                        font-bold
                        leading-5
                        text-[#07143f]

                        transition-colors
                        duration-300

                        group-hover:!text-white

                        sm:text-[16px]
                      "
                    >
                      {item.label}
                    </h3>


                    {/* =================================================
                        MAIN VALUE
                    ================================================= */}
                    <p
                      className="
                        m-0
                        mt-1

                        text-[13px]
                        font-normal
                        leading-5
                        text-slate-600

                        transition-colors
                        duration-300

                        group-hover:!text-white

                        sm:text-sm
                      "
                    >
                      {item.value}
                    </p>


                    {/* =================================================
                        LOCATION SUB TEXT
                    ================================================= */}
                    {item.subValue && (
                      <p
                        className="
                          m-0
                          mt-0.5

                          text-[11px]
                          font-normal
                          leading-4
                          text-slate-500

                          transition-colors
                          duration-300

                          group-hover:!text-blue-50

                          sm:text-xs
                        "
                      >
                        {item.subValue}
                      </p>
                    )}

                  </div>

                </Wrapper>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}