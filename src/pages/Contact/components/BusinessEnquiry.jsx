import React, { useState } from "react";
import {
  User,
  Building2,
  Mail,
  Layers3,
  MessageSquare,
  Send,
  Lock,
  ChevronDown,
} from "lucide-react";

export default function BusinessEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    contact: "",
    inquiryType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.business ||
      !formData.contact ||
      !formData.inquiryType ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitted(true);

    console.log("Business Inquiry:", formData);
  };

  return (
    <section
      id="business-inquiry"
      className="
        bg-white
        px-4
        py-10
        sm:px-6
        sm:py-14
        lg:px-12
        lg:py-16
        xl:px-20
      "
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="text-center">
          <div className="flex flex-col items-center">
            <span
              className="
                text-xs
                font-bold
                tracking-[0.18em]
                text-blue-600
                sm:text-sm
                sm:tracking-[0.2em]
              "
            >
              BUSINESS INQUIRY
            </span>

            <span className="mt-4 h-[2px] w-12 bg-blue-600 sm:mt-6 sm:w-16" />
          </div>

          <h2
            className="
              mt-5
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-[#07143f]
              sm:mt-8
              sm:text-4xl
              lg:text-6xl
            "
          >
            Let’s Discuss Your Business Needs
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-slate-600
              sm:mt-6
              sm:text-lg
              sm:leading-8
              lg:text-xl
            "
          >
            Share a few details and our team will get back to you
            <br className="hidden sm:block" />
            within 24 hours.
          </p>
        </div>

        {/* =====================================================
            FORM CARD
        ===================================================== */}

        <div
          className="
            mt-8
            w-full
            rounded-2xl
            border
            border-slate-100
            bg-white
            p-4
            shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)]

            sm:mt-10
            sm:rounded-3xl
            sm:p-7

            lg:mt-12
            lg:p-12
          "
        >
          <form onSubmit={handleSubmit}>

            {/* =================================================
                ROW 1
            ================================================= */}

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">

              {/* Full Name */}
              <div className="min-w-0">

                <label
                  className="
                    mb-2
                    block
                    text-base
                    font-bold
                    leading-6
                    text-[#07143f]

                    sm:mb-3
                    sm:text-lg
                  "
                >
                  Full Name <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <User
                    className="
                      absolute
                      left-4
                      top-1/2
                      h-5
                      w-5
                      -translate-y-1/2
                      text-slate-500

                      sm:left-5
                      sm:h-6
                      sm:w-6
                    "
                    strokeWidth={1.8}
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="
                      h-14
                      w-full
                      min-w-0
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      pl-12
                      pr-3
                      text-sm
                      text-[#07143f]
                      outline-none
                      transition-all
                      placeholder:text-slate-500
                      focus:border-blue-600
                      focus:ring-2
                      focus:ring-blue-100

                      sm:h-16
                      sm:pl-16
                      sm:pr-5
                      sm:text-base
                    "
                  />
                </div>
              </div>

              {/* Business / Company */}
              <div className="min-w-0">

                <label
                  className="
                    mb-2
                    block
                    text-base
                    font-bold
                    leading-6
                    text-[#07143f]

                    sm:mb-3
                    sm:text-lg
                  "
                >
                  Business / Company{" "}
                  <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <Building2
                    className="
                      absolute
                      left-4
                      top-1/2
                      h-5
                      w-5
                      -translate-y-1/2
                      text-slate-500

                      sm:left-5
                      sm:h-6
                      sm:w-6
                    "
                    strokeWidth={1.8}
                  />

                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Enter your business or company name"
                    className="
                      h-14
                      w-full
                      min-w-0
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      pl-12
                      pr-3
                      text-sm
                      text-[#07143f]
                      outline-none
                      transition-all
                      placeholder:text-slate-500
                      focus:border-blue-600
                      focus:ring-2
                      focus:ring-blue-100

                      sm:h-16
                      sm:pl-16
                      sm:pr-5
                      sm:text-base
                    "
                  />
                </div>
              </div>

              {/* Email / Phone */}
              <div className="min-w-0">

                <label
                  className="
                    mb-2
                    block
                    text-base
                    font-bold
                    leading-6
                    text-[#07143f]

                    sm:mb-3
                    sm:text-lg
                  "
                >
                  Email / Phone <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <Mail
                    className="
                      absolute
                      left-4
                      top-1/2
                      h-5
                      w-5
                      -translate-y-1/2
                      text-slate-500

                      sm:left-5
                      sm:h-6
                      sm:w-6
                    "
                    strokeWidth={1.8}
                  />

                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Enter email or phone number"
                    className="
                      h-14
                      w-full
                      min-w-0
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      pl-12
                      pr-3
                      text-sm
                      text-[#07143f]
                      outline-none
                      transition-all
                      placeholder:text-slate-500
                      focus:border-blue-600
                      focus:ring-2
                      focus:ring-blue-100

                      sm:h-16
                      sm:pl-16
                      sm:pr-5
                      sm:text-base
                    "
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="min-w-0">

                <label
                  className="
                    mb-2
                    block
                    text-base
                    font-bold
                    leading-6
                    text-[#07143f]

                    sm:mb-3
                    sm:text-lg
                  "
                >
                  Inquiry Type <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <Layers3
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-1/2
                      h-5
                      w-5
                      -translate-y-1/2
                      text-slate-500

                      sm:left-5
                      sm:h-6
                      sm:w-6
                    "
                    strokeWidth={1.8}
                  />

                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="
                      h-14
                      w-full
                      min-w-0
                      appearance-none
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      pl-12
                      pr-10
                      text-sm
                      text-slate-600
                      outline-none
                      transition-all
                      focus:border-blue-600
                      focus:ring-2
                      focus:ring-blue-100

                      sm:h-16
                      sm:pl-16
                      sm:pr-12
                      sm:text-base
                    "
                  >
                    <option value="">Select inquiry type</option>
                    <option value="product">Product Inquiry</option>
                    <option value="partnership">
                      Partnership
                    </option>
                    <option value="bulk-order">
                      Bulk Order
                    </option>
                    <option value="distribution">
                      Distribution
                    </option>
                    <option value="general">
                      General Inquiry
                    </option>
                  </select>

                  <ChevronDown
                    className="
                      pointer-events-none
                      absolute
                      right-4
                      top-1/2
                      h-5
                      w-5
                      -translate-y-1/2
                      text-slate-600

                      sm:right-5
                    "
                    strokeWidth={2}
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                MESSAGE
            ================================================= */}

            <div className="mt-5 sm:mt-8">

              <label
                className="
                  mb-2
                  block
                  text-base
                  font-bold
                  leading-6
                  text-[#07143f]

                  sm:mb-3
                  sm:text-lg
                "
              >
                Message <span className="text-red-500">*</span>
              </label>

              <div className="relative">

                <MessageSquare
                  className="
                    absolute
                    left-4
                    top-5
                    h-5
                    w-5
                    text-slate-500

                    sm:left-5
                    sm:top-6
                    sm:h-6
                    sm:w-6
                  "
                  strokeWidth={1.8}
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirement"
                  rows={5}
                  className="
                    min-h-[150px]
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    py-4
                    pl-12
                    pr-3
                    text-sm
                    leading-6
                    text-[#07143f]
                    outline-none
                    transition-all
                    placeholder:text-slate-500
                    focus:border-blue-600
                    focus:ring-2
                    focus:ring-blue-100

                    sm:min-h-[170px]
                    sm:py-5
                    sm:pl-16
                    sm:pr-5
                    sm:text-base
                  "
                />
              </div>
            </div>

            {/* =================================================
                SUBMIT AREA
            ================================================= */}

            <div
              className="
                mt-6
                flex
                flex-col
                items-stretch
                gap-4

                sm:mt-9
                sm:flex-row
                sm:items-center
                sm:gap-5
              "
            >

              {/* Send Inquiry */}
              <button
                type="submit"
                className="
                  group
                  flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-blue-600
                  px-5
                  text-base
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-700
                  hover:shadow-lg
                  hover:shadow-blue-600/25

                  sm:h-16
                  sm:w-auto
                  sm:gap-4
                  sm:px-8
                  sm:text-lg
                "
              >
                <Send
                  className="
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1

                    sm:h-6
                    sm:w-6
                  "
                  strokeWidth={2}
                />

                Send Inquiry
              </button>

              {/* Security Message */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-center
                  text-sm
                  leading-5
                  text-slate-600

                  sm:justify-start
                  sm:gap-3
                  sm:text-base
                "
              >
                <Lock
                  className="h-5 w-5 shrink-0 text-slate-400"
                  strokeWidth={1.8}
                />

                <span>Your information is safe with us.</span>
              </div>
            </div>

            {/* =================================================
                SUCCESS MESSAGE
            ================================================= */}

            {submitted && (
              <div
                className="
                  mt-5
                  rounded-xl
                  border
                  border-green-200
                  bg-green-50
                  px-4
                  py-3
                  text-sm
                  font-medium
                  leading-5
                  text-green-700

                  sm:mt-6
                  sm:px-5
                  sm:py-4
                "
              >
                Your inquiry has been submitted successfully.
                Our team will get back to you soon.
              </div>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}