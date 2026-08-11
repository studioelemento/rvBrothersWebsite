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
    <section className="bg-slate-50 px-4 py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Main Contact Information Box */}
        <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.14)]">

          {/* Equal 4-column layout */}
          <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">

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
                    gap-5
                    px-7
                    py-8
                    transition-all
                    duration-300
                    hover:bg-blue-600
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-16
                      w-16
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
                    "
                  >
                    <Icon
                      className="
                        h-7
                        w-7
                        text-blue-600
                        transition-colors
                        duration-300
                        group-hover:text-blue-600
                      "
                      strokeWidth={2}
                    />
                  </div>

                  {/* Text Content */}
                  <div className="min-w-0 flex-1">

                    {/* Heading */}
                    <h3
                      className="
                        text-[16px]
                        font-bold
                        leading-5
                        text-[#07143f]
                        transition-colors
                        duration-300
                        group-hover:!text-white
                      "
                      style={{
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.label}
                    </h3>

                    {/* Main Content */}
                    <p
                      className="
                        mt-1.5
                        text-[13px]
                        font-normal
                        leading-5
                        text-slate-600
                        transition-colors
                        duration-300
                        group-hover:!text-white
                      "
                      style={{
                        marginBottom: 0,
                        whiteSpace: "normal",
                        overflowWrap: "break-word",
                        wordBreak: "normal",
                      }}
                    >
                      {item.value}
                    </p>

                    {/* Location Sub Text */}
                    {item.subValue && (
                      <p
                        className="
                          mt-0.5
                          text-[11px]
                          font-normal
                          leading-4
                          text-slate-500
                          transition-colors
                          duration-300
                          group-hover:!text-blue-50
                        "
                        style={{
                          marginBottom: 0,
                          whiteSpace: "normal",
                          overflowWrap: "break-word",
                          wordBreak: "normal",
                        }}
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