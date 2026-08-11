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
      className="bg-white px-6 py-16 sm:px-8 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="text-center">
          <div className="flex flex-col items-center">
            <span className="text-sm font-bold tracking-[0.2em] text-blue-600">
              BUSINESS INQUIRY
            </span>

            <span className="mt-6 h-[2px] w-16 bg-blue-600" />
          </div>

          <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-[#07143f] sm:text-5xl lg:text-6xl">
            Let’s Discuss Your Business Needs
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Share a few details and our team will get back to you
            <br className="hidden sm:block" />
            within 24 hours.
          </p>
        </div>

        {/* =====================================================
            FORM CARD
        ===================================================== */}

        <div className="mt-12 rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] sm:p-10 lg:p-12">
          <form onSubmit={handleSubmit}>
            {/* =================================================
                ROW 1
            ================================================= */}

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Full Name */}

              <div>
                <label className="mb-4 block text-lg font-bold text-[#07143f]">
                  Full Name <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <User
                    className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-slate-500"
                    strokeWidth={1.8}
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="h-16 w-full rounded-xl border border-slate-200 bg-white pl-16 pr-5 text-base text-[#07143f] outline-none transition-all placeholder:text-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Business / Company */}

              <div>
                <label className="mb-4 block text-lg font-bold text-[#07143f]">
                  Business / Company{" "}
                  <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <Building2
                    className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-slate-500"
                    strokeWidth={1.8}
                  />

                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Enter your business or company name"
                    className="h-16 w-full rounded-xl border border-slate-200 bg-white pl-16 pr-5 text-base text-[#07143f] outline-none transition-all placeholder:text-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* =================================================
                  ROW 2
              ================================================= */}

              {/* Email / Phone */}

              <div>
                <label className="mb-4 block text-lg font-bold text-[#07143f]">
                  Email / Phone <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <Mail
                    className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-slate-500"
                    strokeWidth={1.8}
                  />

                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Enter email or phone number"
                    className="h-16 w-full rounded-xl border border-slate-200 bg-white pl-16 pr-5 text-base text-[#07143f] outline-none transition-all placeholder:text-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Inquiry Type */}

              <div>
                <label className="mb-4 block text-lg font-bold text-[#07143f]">
                  Inquiry Type <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <Layers3
                    className="pointer-events-none absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-slate-500"
                    strokeWidth={1.8}
                  />

                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="h-16 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-16 pr-12 text-base text-slate-600 outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
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
                    className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-600"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                MESSAGE
            ================================================= */}

            <div className="mt-8">
              <label className="mb-4 block text-lg font-bold text-[#07143f]">
                Message <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <MessageSquare
                  className="absolute left-5 top-6 h-6 w-6 text-slate-500"
                  strokeWidth={1.8}
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirement"
                  rows={5}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white py-5 pl-16 pr-5 text-base text-[#07143f] outline-none transition-all placeholder:text-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* =================================================
                SUBMIT AREA
            ================================================= */}

            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="group flex h-16 items-center gap-4 rounded-xl bg-blue-600 px-8 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25"
              >
                <Send
                  className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />

                Send Inquiry
              </button>

              <div className="flex items-center gap-3 text-base text-slate-600">
                <Lock
                  className="h-5 w-5 text-slate-400"
                  strokeWidth={1.8}
                />

                <span>Your information is safe with us.</span>
              </div>
            </div>

            {/* =================================================
                SUCCESS MESSAGE
            ================================================= */}

            {submitted && (
              <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700">
                Your inquiry has been submitted successfully. Our team
                will get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}