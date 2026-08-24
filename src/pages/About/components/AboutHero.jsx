import {
  ArrowRight,
  CalendarDays,
  Layers3,
  MapPin,
  Package,
  ShieldCheck,
  Users,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import aboutHeroImage from "../../../assets/about-hero.png";

export default function AboutHero() {
  const navigate = useNavigate();

  return (
    <section className="bg-white text-slate-950">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold tracking-[0.2em] text-blue-700">
                ABOUT US
              </span>

              <div className="h-px w-16 bg-blue-500" />
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Building Businesses
              <br />
              Since{" "}
              <span className="text-blue-600">
                2016
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">
              RV Brothers Business Consortium is a diversified commerce and
              distribution ecosystem operating across collectibles, wellness,
              industrial supplies, and strategic business partnerships.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/businesses")}
                className="group flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Explore Our Businesses

                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="group flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
              >
                Contact Us

                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {/* Trusted */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Trusted by
                  </p>

                  <p className="text-sm text-slate-500">
                    Businesses
                  </p>
                </div>
              </div>

              {/* Quality */}
              <div className="flex items-center gap-3 sm:border-l sm:border-slate-200 sm:pl-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Package size={23} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Quality You
                  </p>

                  <p className="text-sm text-slate-500">
                    Can Rely On
                  </p>
                </div>
              </div>

              {/* Partnerships */}
              <div className="flex items-center gap-3 sm:border-l sm:border-slate-200 sm:pl-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Users size={23} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Partnerships
                  </p>

                  <p className="text-sm text-slate-500">
                    That Grow
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-3xl" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={aboutHeroImage}
                alt="RV Brothers business ecosystem"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Statistics Card */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Since 2016 */}
            <div className="flex gap-4 lg:border-r lg:border-slate-200 lg:pr-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <CalendarDays size={23} />
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Since
                  <br />
                  2016
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  A decade of trust
                  <br />
                  and growth
                </p>
              </div>
            </div>

            {/* Multi-Sector Operations */}
            <div className="flex gap-4 lg:border-r lg:border-slate-200 lg:pr-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Layers3 size={23} />
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Multi-Sector
                  <br />
                  Operations
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Serving diverse industries
                  <br />
                  across India
                </p>
              </div>
            </div>

            {/* Pan India Presence */}
            <div className="flex gap-4 lg:border-r lg:border-slate-200 lg:pr-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <MapPin size={23} />
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Pan India
                  <br />
                  Presence
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Strong distribution network
                  <br />
                  across all major regions
                </p>
              </div>
            </div>

            {/* Products */}
            <div className="flex gap-4 lg:border-r lg:border-slate-200 lg:pr-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Package size={23} />
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Thousands
                  <br />
                  of Products
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Wide range of quality
                  <br />
                  products
                </p>
              </div>
            </div>

            {/* Partner Network */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Users size={23} />
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Growing
                  <br />
                  Partner Network
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Long-term relationships
                  <br />
                  built on trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}