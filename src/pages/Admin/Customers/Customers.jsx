import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
} from 'lucide-react';

const customersData = [
  {
    id: 1,
    name: 'Arjun Patel',
    phone: '+91 98765 43210',
    registrationDate: 'May 13, 2024 10:30 AM',
    orders: 12,
  },
  {
    id: 2,
    name: 'Ramesh Kumar',
    phone: '+91 91234 56789',
    registrationDate: 'May 12, 2024 04:15 PM',
    orders: 8,
  },
  {
    id: 3,
    name: 'Suresh Yadav',
    phone: '+91 99887 66554',
    registrationDate: 'May 10, 2024 09:20 AM',
    orders: 15,
  },
  {
    id: 4,
    name: 'Neha Singh',
    phone: '+91 98712 34567',
    registrationDate: 'May 8, 2024 02:45 PM',
    orders: 6,
  },
  {
    id: 5,
    name: 'Vikram Mehta',
    phone: '+91 97654 32109',
    registrationDate: 'May 6, 2024 11:10 AM',
    orders: 10,
  },
  {
    id: 6,
    name: 'Priya Sharma',
    phone: '+91 93210 98765',
    registrationDate: 'May 4, 2024 03:30 PM',
    orders: 5,
  },
  {
    id: 7,
    name: 'Amit Verma',
    phone: '+91 90909 80808',
    registrationDate: 'May 2, 2024 10:05 AM',
    orders: 7,
  },
  {
    id: 8,
    name: 'Karan Malhotra',
    phone: '+91 98989 12345',
    registrationDate: 'Apr 30, 2024 01:40 PM',
    orders: 3,
  },
  {
    id: 9,
    name: 'Pooja Gupta',
    phone: '+91 98123 45678',
    registrationDate: 'Apr 28, 2024 12:25 PM',
    orders: 9,
  },
  {
    id: 10,
    name: 'Mohit Agarwal',
    phone: '+91 90011 22334',
    registrationDate: 'Apr 26, 2024 09:15 AM',
    orders: 11,
  },
];

export default function Customers() {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  const filteredCustomers = customersData.filter((customer) =>
    `${customer.name} ${customer.phone}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#101b43]">
            Customers
          </h1>

          <p className="mt-2 text-base text-slate-500">
            Manage and view all registered customers on the platform.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative w-full sm:w-[400px]">
            <Search
              size={22}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-4 text-sm text-[#101b43] outline-none placeholder:text-slate-400 focus:border-[#4c2cff]"
            />
          </div>

          <button
            type="button"
            className="flex h-12 items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-5 text-sm font-medium text-[#101b43] hover:bg-slate-50"
          >
            <SlidersHorizontal size={20} />

            <span>Filter</span>

            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      {/* Customer Table */}
      <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-8 py-6 text-left text-sm font-semibold text-[#3d4f7d]">
                  Sl. No.
                </th>

                <th className="px-8 py-6 text-left text-sm font-semibold text-[#3d4f7d]">
                  Customer Name
                </th>

                <th className="px-8 py-6 text-left text-sm font-semibold text-[#3d4f7d]">
                  Phone Number
                </th>

                <th className="px-8 py-6 text-left text-sm font-semibold text-[#3d4f7d]">
                  Date of Registration
                </th>

                <th className="px-8 py-6 text-center text-sm font-semibold text-[#3d4f7d]">
                  No. of Orders
                </th>

                <th className="px-8 py-6 text-center text-sm font-semibold text-[#3d4f7d]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((customer, index) => (
                <tr
                  key={customer.id}
                  className="border-b border-slate-100 last:border-b-0"
                >
                  <td className="px-8 py-6 text-sm font-medium text-[#101b43]">
                    {index + 1}
                  </td>

                  <td className="px-8 py-6 text-sm font-medium text-[#101b43]">
                    {customer.name}
                  </td>

                  <td className="px-8 py-6 text-sm text-[#405581]">
                    {customer.phone}
                  </td>

                  <td className="px-8 py-6 text-sm text-[#405581]">
                    {customer.registrationDate}
                  </td>

                  <td className="px-8 py-6 text-center">
                    <span className="inline-flex min-w-[40px] items-center justify-center rounded-md bg-[#f1edff] px-3 py-1.5 text-sm font-medium text-[#4c2cff]">
                      {customer.orders}
                    </span>
                  </td>

                  <td className="px-8 py-6 text-center">
                    <button
                      type="button"
                      onClick={() =>
                        navigate('/admin/customers/view', {
                          state: { customer },
                        })
                      }
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#405581] transition hover:border-[#4c2cff] hover:text-[#4c2cff]"
                      title="View customer"
                    >
                      <Eye size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#405581]">
            Showing 1 to {filteredCustomers.length} of 124 customers
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#4c2cff] bg-white text-sm font-medium text-[#4c2cff]"
            >
              1
            </button>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm text-[#405581] hover:bg-slate-50"
            >
              2
            </button>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm text-[#405581] hover:bg-slate-50"
            >
              3
            </button>

            <span className="px-1 text-sm text-slate-500">...</span>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm text-[#405581] hover:bg-slate-50"
            >
              13
            </button>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}