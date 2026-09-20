import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  User,
  Phone,
  Building2,
  Tag,
  MessageCircle,
  CalendarDays,
  Mail,
  FileText,
} from 'lucide-react';

export default function QueryDetails() {
  const navigate = useNavigate();

  const [status, setStatus] = useState('New');

  const query = {
    queryId: 'QRY-000123',
    name: 'Amit Patel',
    phone: '+91 98765 43210',
    company: 'Amit Patel Traders',
    enquiryType: 'Business Inquiry',

    message: `Hello,

I am interested in purchasing fragrances in bulk for my retail business.
Please share your product catalog, pricing details for bulk orders, minimum order quantity,
and delivery timelines.

Also, let me know about any ongoing offers or discounts for new business partners.

Looking forward to your response.

Thank you,
Amit Patel`,

    submittedOn: 'May 13, 2024 at 10:30 AM',
  };

  const handleMarkAsRead = () => {
    setStatus('Read');
  };

  const InfoItem = ({ icon: Icon, label, children }) => {
    return (
      <div className="flex min-w-0 items-start gap-3 p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-[#4f2cff]">
          <Icon size={21} />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium text-[#536487]">
            {label}
          </p>

          <div className="mt-1 text-base font-medium text-[#101b43]">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-w-0">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">

        {/* Left side */}
        <div className="flex min-w-0 items-start gap-4">

          <button
            type="button"
            onClick={() => navigate('/admin/queries')}
            className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#101b43] transition hover:bg-slate-100"
          >
            <ArrowLeft size={25} />
          </button>

          <div className="min-w-0">
            <h1 className="text-3xl font-bold tracking-tight text-[#101b43]">
              Customer Query Details
            </h1>

            <p className="mt-2 text-base text-[#536487]">
              View the details of this customer enquiry.
            </p>
          </div>

        </div>


        {/* Right side */}
        <div className="flex shrink-0 items-center gap-3">

          {/* Status */}
          <span
            className={`inline-flex h-11 items-center rounded-lg px-5 text-sm font-semibold ${
              status === 'New'
                ? 'bg-violet-100 text-violet-600'
                : 'bg-emerald-100 text-emerald-600'
            }`}
          >
            {status}
          </span>


          {/* Mark as Read */}
          {status === 'New' && (
            <button
              type="button"
              onClick={handleMarkAsRead}
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#4f00ff] px-5 text-sm font-semibold text-white transition hover:bg-[#3d00cc]"
            >
              <Mail size={19} />

              <span>Mark as Read</span>
            </button>
          )}

        </div>

      </div>


      {/* ================= QUERY INFORMATION ================= */}
      <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white">

        {/* Section Header */}
        <div className="border-b border-slate-200 px-6 py-5">

          <h2 className="text-xl font-bold text-[#101b43]">
            Query Information
          </h2>

        </div>


        {/* Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

          {/* Query ID */}
          <div className="border-b border-slate-200 md:border-r">
            <InfoItem
              icon={FileText}
              label="Query ID"
            >
              <span className="whitespace-nowrap">
                {query.queryId}
              </span>
            </InfoItem>
          </div>


          {/* Name */}
          <div className="border-b border-slate-200 xl:border-r">
            <InfoItem
              icon={User}
              label="Name"
            >
              {query.name}
            </InfoItem>
          </div>


          {/* Phone */}
          <div className="border-b border-slate-200">
            <InfoItem
              icon={Phone}
              label="Phone Number"
            >
              <span className="whitespace-nowrap">
                {query.phone}
              </span>
            </InfoItem>
          </div>


          {/* Business */}
          <div className="border-b border-slate-200 md:border-r">
            <InfoItem
              icon={Building2}
              label="Business / Company"
            >
              {query.company}
            </InfoItem>
          </div>


          {/* Enquiry Type */}
          <div className="border-b border-slate-200 xl:border-r">
            <InfoItem
              icon={Tag}
              label="Enquiry Type"
            >
              <span className="inline-flex rounded-md bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-600">
                {query.enquiryType}
              </span>
            </InfoItem>
          </div>


          {/* Empty third column for desktop alignment */}
          <div className="hidden xl:block" />

        </div>

      </div>


      {/* ================= MESSAGE ================= */}
      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-[#4f2cff]">
            <MessageCircle size={20} />
          </div>

          <h2 className="text-xl font-bold text-[#101b43]">
            Message
          </h2>

        </div>


        {/* Message Content */}
        <div className="px-6 py-6">

          <div className="rounded-lg bg-slate-50 px-5 py-5">

            <p className="whitespace-pre-line text-sm leading-7 text-[#304574]">
              {query.message}
            </p>

          </div>

        </div>

      </div>


      {/* ================= SUBMITTED INFORMATION ================= */}
      <div className="mt-6 mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white">

        <div className="flex items-center gap-3 px-6 py-5">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-[#4f2cff]">
            <CalendarDays size={20} />
          </div>

          <div>
            <p className="text-sm font-medium text-[#536487]">
              Submitted On
            </p>

            <p className="mt-1 text-base font-semibold text-[#101b43]">
              {query.submittedOn}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}