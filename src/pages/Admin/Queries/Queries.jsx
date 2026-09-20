import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  Eye,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function Queries() {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  const queries = [
    {
      id: 'QRY-000123',
      name: 'Amit Patel',
      phone: '+91 98765 43210',
      type: 'Business Inquiry',
      status: 'New',
    },
    {
      id: 'QRY-000122',
      name: 'Neha Sharma',
      phone: '+91 91234 56789',
      type: 'Partnership Inquiry',
      status: 'New',
    },
    {
      id: 'QRY-000121',
      name: 'Suresh Yadav',
      phone: '+91 99887 66554',
      type: 'Customer Inquiry',
      status: 'Read',
    },
    {
      id: 'QRY-000120',
      name: 'Vikram Mehta',
      phone: '+91 97654 32109',
      type: 'Business Inquiry',
      status: 'Read',
    },
    {
      id: 'QRY-000119',
      name: 'Pooja Gupta',
      phone: '+91 93210 98765',
      type: 'Customer Inquiry',
      status: 'New',
    },
    {
      id: 'QRY-000118',
      name: 'Rohit Singh',
      phone: '+91 90909 80808',
      type: 'Partnership Inquiry',
      status: 'Read',
    },
    {
      id: 'QRY-000117',
      name: 'Anjali Verma',
      phone: '+91 98123 45678',
      type: 'Customer Inquiry',
      status: 'New',
    },
    {
      id: 'QRY-000116',
      name: 'Karan Malhotra',
      phone: '+91 98989 12345',
      type: 'Business Inquiry',
      status: 'Read',
    },
    {
      id: 'QRY-000115',
      name: 'Meera Joshi',
      phone: '+91 90011 22334',
      type: 'Customer Inquiry',
      status: 'New',
    },
    {
      id: 'QRY-000114',
      name: 'Deepak Jain',
      phone: '+91 93456 78901',
      type: 'Partnership Inquiry',
      status: 'Read',
    },
  ];

  // Search functionality
  const filteredQueries = queries.filter((query) => {
    const value = search.toLowerCase();

    return (
      query.id.toLowerCase().includes(value) ||
      query.name.toLowerCase().includes(value) ||
      query.phone.toLowerCase().includes(value) ||
      query.type.toLowerCase().includes(value) ||
      query.status.toLowerCase().includes(value)
    );
  });

  return (
    <div className="w-full min-w-0">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">

        {/* Heading */}
        <div className="min-w-0">
          <h1 className="text-3xl font-bold tracking-tight text-[#101b43]">
            Customer Queries
          </h1>

          <p className="mt-2 text-base text-[#536487]">
            View and manage all customer enquiries.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex w-full flex-col gap-3 sm:flex-row xl:w-auto">

          {/* Search */}
          <div className="relative w-full xl:w-[330px]">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#536487]"
            />

            <input
              type="text"
              placeholder="Search queries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 text-sm text-[#101b43] outline-none transition focus:border-[#4f2cff] focus:ring-1 focus:ring-[#4f2cff]"
            />
          </div>

          {/* Filter */}
          <button
            type="button"
            className="flex h-12 items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-[#101b43] transition hover:bg-slate-50"
          >
            <SlidersHorizontal size={18} />

            <span>Filter</span>

            <ChevronDown size={17} />
          </button>

        </div>
      </div>


      {/* ================= TABLE CARD ================= */}
      <div className="mt-8 w-full overflow-hidden rounded-xl border border-slate-200 bg-white">

        {/* Table */}
        <div className="w-full overflow-hidden">

          <table className="w-full table-fixed border-collapse">

            {/* ================= TABLE HEADER ================= */}
            <thead>
              <tr className="border-b border-slate-200">

                <th className="w-[7%] px-4 py-5 text-left text-sm font-semibold text-[#304574]">
                  SI No.
                </th>

                <th className="w-[14%] px-4 py-5 text-left text-sm font-semibold text-[#304574]">
                  Query ID
                </th>

                <th className="w-[15%] px-4 py-5 text-left text-sm font-semibold text-[#304574]">
                  Name
                </th>

                <th className="w-[18%] px-4 py-5 text-left text-sm font-semibold text-[#304574]">
                  Phone Number
                </th>

                <th className="w-[19%] px-4 py-5 text-left text-sm font-semibold text-[#304574]">
                  Enquiry Type
                </th>

                <th className="w-[11%] px-4 py-5 text-left text-sm font-semibold text-[#304574]">
                  Status
                </th>

                <th className="w-[16%] px-4 py-5 text-center text-sm font-semibold text-[#304574]">
                  Actions
                </th>

              </tr>
            </thead>


            {/* ================= TABLE BODY ================= */}
            <tbody>

              {filteredQueries.map((query, index) => (

                <tr
                  key={query.id}
                  className="border-b border-slate-100 last:border-b-0"
                >

                  {/* SI NO */}
                  <td className="px-4 py-5 text-sm font-medium text-[#101b43]">
                    {index + 1}
                  </td>


                  {/* QUERY ID */}
                  <td className="px-4 py-5 text-sm text-[#304574]">
                    <span className="whitespace-nowrap">
                      {query.id}
                    </span>
                  </td>


                  {/* NAME */}
                  <td className="px-4 py-5 text-sm font-medium text-[#101b43]">
                    <span className="whitespace-nowrap">
                      {query.name}
                    </span>
                  </td>


                  {/* PHONE */}
                  <td className="px-4 py-5 text-sm text-[#304574]">
                    <span className="whitespace-nowrap">
                      {query.phone}
                    </span>
                  </td>


                  {/* ENQUIRY TYPE */}
                  <td className="px-4 py-5">

                    <span
                      className={`inline-flex whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-semibold ${
                        query.type === 'Business Inquiry'
                          ? 'bg-blue-50 text-blue-600'
                          : query.type === 'Partnership Inquiry'
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'bg-violet-50 text-violet-600'
                      }`}
                    >
                      {query.type}
                    </span>

                  </td>


                  {/* STATUS */}
                  <td className="px-4 py-5">

                    <span
                      className={`inline-flex rounded-md px-2.5 py-1.5 text-xs font-semibold ${
                        query.status === 'New'
                          ? 'bg-violet-50 text-violet-600'
                          : 'bg-emerald-50 text-emerald-600'
                      }`}
                    >
                      {query.status}
                    </span>

                  </td>


                  {/* ACTIONS */}
                  <td className="px-4 py-5 text-center">

                    <button
                      type="button"
                      onClick={() => navigate('/admin/queries/view')}
                      className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-violet-200 bg-white px-4 text-sm font-semibold text-[#4f2cff] transition hover:bg-violet-50"
                    >
                      <Eye size={16} />

                      <span>View</span>
                    </button>

                  </td>

                </tr>

              ))}


              {/* NO RESULTS */}
              {filteredQueries.length === 0 && (

                <tr>

                  <td
                    colSpan="7"
                    className="px-4 py-12 text-center text-sm text-slate-400"
                  >
                    No queries found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>


        {/* ================= PAGINATION ================= */}
        <div className="flex flex-col gap-4 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-[#536487]">
            Showing 1 to {filteredQueries.length} of 56 queries
          </p>


          <div className="flex items-center gap-1.5">

            {/* Previous */}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-[#536487] transition hover:bg-slate-50"
            >
              <ChevronLeft size={17} />
            </button>


            {/* Page 1 */}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[#4f2cff] bg-white text-sm font-semibold text-[#4f2cff]"
            >
              1
            </button>


            {/* Page 2 */}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-sm text-[#304574] transition hover:bg-slate-50"
            >
              2
            </button>


            {/* Page 3 */}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-sm text-[#304574] transition hover:bg-slate-50"
            >
              3
            </button>


            <span className="px-1 text-sm text-[#536487]">
              ...
            </span>


            {/* Page 6 */}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-sm text-[#304574] transition hover:bg-slate-50"
            >
              6
            </button>


            {/* Next */}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-[#536487] transition hover:bg-slate-50"
            >
              <ChevronRight size={17} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}