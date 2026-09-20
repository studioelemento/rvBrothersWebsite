import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  UserRound,
  Phone,
  Mail,
  MapPin,
  BriefcaseBusiness,
  Eye,
} from 'lucide-react';

const defaultCustomer = {
  name: 'Ramesh Kumar',
  phone: '+91 91234 56789',
  email: 'ramesh.kumar@email.com',
  customerId: 'CUST-000245',
  address: '123, Industrial Area, GIDC Estate, Vatva',
  pincode: '382445',
  state: 'Gujarat',
};

const orders = [
  {
    slNo: 1,
    orderId: 'ORD-000786',
    date: 'May 13, 2024 10:30 AM',
    value: '₹ 24,560.00',
  },
  {
    slNo: 2,
    orderId: 'ORD-000645',
    date: 'May 12, 2024 04:15 PM',
    value: '₹ 12,890.00',
  },
  {
    slNo: 3,
    orderId: 'ORD-000512',
    date: 'May 6, 2024 11:10 AM',
    value: '₹ 8,450.00',
  },
  {
    slNo: 4,
    orderId: 'ORD-000398',
    date: 'May 2, 2024 10:05 AM',
    value: '₹ 15,200.00',
  },
  {
    slNo: 5,
    orderId: 'ORD-000265',
    date: 'Apr 28, 2024 12:25 PM',
    value: '₹ 6,780.00',
  },
];

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-4 border-r border-slate-100 p-6 last:border-r-0">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5f2ff] text-[#4c2cff]">
        <Icon size={21} />
      </div>

      <div className="min-w-0">
        <p className="text-sm font-semibold text-[#405581]">{label}</p>

        <p className="mt-2 break-words text-sm text-[#101b43]">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function CustomerDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const customer = {
    ...defaultCustomer,
    ...(location.state?.customer || {}),
  };

  const initials = customer.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Top Header */}
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <button
            type="button"
            onClick={() => navigate('/admin/customers')}
            className="mb-3 flex items-center gap-2 text-sm text-[#405581] hover:text-[#4c2cff]"
          >
            <ArrowLeft size={19} />

            <span>Back to Customers</span>
          </button>

          <h1 className="text-3xl font-bold tracking-tight text-[#101b43]">
            Customer Details
          </h1>

          <p className="mt-2 text-sm text-[#405581]">
            View customer profile and purchase history.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate('/admin/customers')}
          className="flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-sm font-medium text-[#405581] hover:bg-slate-50"
        >
          <ArrowLeft size={18} />

          <span>Back to Customers</span>
        </button>
      </div>

      {/* Customer Profile */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {/* Customer Name */}
        <div className="flex items-center gap-6 border-b border-slate-200 p-8">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#f0ebff] text-3xl font-medium text-[#4c2cff]">
            {initials}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#101b43]">
              {customer.name}
            </h2>

            <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-[#f1edff] px-3 py-1.5 text-sm text-[#4c2cff]">
              <UserRound size={16} />

              <span>Registered Customer</span>
            </div>
          </div>
        </div>

        {/* Customer Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <InfoItem
            icon={BriefcaseBusiness}
            label="Customer ID"
            value={customer.customerId}
          />

          <InfoItem
            icon={UserRound}
            label="Customer Name"
            value={customer.name}
          />

          <InfoItem
            icon={Phone}
            label="Phone Number"
            value={customer.phone}
          />

          <InfoItem
            icon={Mail}
            label="Email ID"
            value={customer.email}
          />

          <InfoItem
            icon={MapPin}
            label="Address"
            value={customer.address}
          />

          <InfoItem
            icon={MapPin}
            label="Pincode"
            value={customer.pincode}
          />

          <InfoItem
            icon={MapPin}
            label="State"
            value={customer.state}
          />
        </div>
      </div>

      {/* Purchase History */}
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="text-lg font-bold text-[#101b43]">
            Purchase History
          </h2>

          <p className="mt-1 text-sm text-[#405581]">
            Here are all the orders placed by this customer.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-5 py-4 text-left text-sm font-semibold text-[#405581]">
                  SL No.
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-[#405581]">
                  Order ID
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-[#405581]">
                  Order Date
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-[#405581]">
                  Order Value
                </th>

                <th className="px-5 py-4 text-center text-sm font-semibold text-[#405581]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.orderId}
                  className="border-b border-slate-100 last:border-b-0"
                >
                  <td className="px-5 py-4 text-sm font-medium text-[#101b43]">
                    {order.slNo}
                  </td>

                  <td className="px-5 py-4 text-sm text-[#405581]">
                    {order.orderId}
                  </td>

                  <td className="px-5 py-4 text-sm text-[#405581]">
                    {order.date}
                  </td>

                  <td className="px-5 py-4 text-sm text-[#405581]">
                    {order.value}
                  </td>

                  <td className="px-5 py-4 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        console.log('View order:', order.orderId);
                      }}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#dcd5ff] bg-white px-4 py-2 text-sm font-medium text-[#4c2cff] hover:bg-[#f8f6ff]"
                    >
                      <Eye size={17} />

                      <span>View</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td
                  colSpan="5"
                  className="px-5 py-4 text-sm text-[#405581]"
                >
                  Showing 1 to 5 of 5 orders
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}