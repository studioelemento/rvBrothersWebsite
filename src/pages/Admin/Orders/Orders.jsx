import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  Calendar, 
  RotateCcw, 
  Download, 
  Eye, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const ordersData = [
  { id: '#ORD-10036', date: 'May 27, 2024', time: '10:24 AM', customerName: 'Rahul Sharma', customerEmail: 'rahul.sharma@email.com', amount: '₹12,450.00', status: 'Received' },
  { id: '#ORD-10035', date: 'May 27, 2024', time: '09:15 AM', customerName: 'Sneha Verma', customerEmail: 'sneha.verma@email.com', amount: '₹8,990.00', status: 'Shipped' },
  { id: '#ORD-10034', date: 'May 26, 2024', time: '06:45 PM', customerName: 'Amit Singh', customerEmail: 'amit.singh@email.com', amount: '₹15,750.00', status: 'Delivered' },
  { id: '#ORD-10033', date: 'May 26, 2024', time: '04:20 PM', customerName: 'Neha Kapoor', customerEmail: 'neha.kapoor@email.com', amount: '₹5,490.00', status: 'Pickup' },
  { id: '#ORD-10032', date: 'May 25, 2024', time: '11:30 AM', customerName: 'Vikram Jain', customerEmail: 'vikram.jain@email.com', amount: '₹9,230.00', status: 'Shipped' },
  { id: '#ORD-10031', date: 'May 25, 2024', time: '10:05 AM', customerName: 'Pooja Mehta', customerEmail: 'pooja.mehta@email.com', amount: '₹6,880.00', status: 'Delivered' },
  { id: '#ORD-10030', date: 'May 25, 2024', time: '08:50 PM', customerName: 'Karan Patel', customerEmail: 'karan.patel@email.com', amount: '₹11,340.00', status: 'Received' },
  { id: '#ORD-10029', date: 'May 24, 2024', time: '05:40 PM', customerName: 'Anjali Desai', customerEmail: 'anjali.desai@email.com', amount: '₹7,610.00', status: 'Shipped' },
];

const getStatusStyles = (status) => {
  switch (status) {
    case 'Received':
      return 'bg-orange-100 text-orange-600';
    case 'Pickup':
      return 'bg-green-100 text-green-700';
    case 'Shipped':
      return 'bg-blue-100 text-blue-600';
    case 'Delivered':
      return 'bg-green-100 text-green-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

export default function Orders() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#101b43]">Orders</h1>
        <p className="mt-1 text-sm text-slate-500">Manage and track all customer orders.</p>
      </div>
      
      {/* Filters Section */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 mb-6 flex flex-wrap gap-4 items-end">
        {/* Search */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-medium text-slate-500 mb-1.5">Search Order</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search by Order ID or Customer..." 
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Order Status */}
        <div className="w-40">
          <label className="block text-xs font-medium text-slate-500 mb-1.5">Order Status</label>
          <div className="relative">
            <select className="w-full pl-4 pr-10 py-2 border border-slate-200 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white">
              <option>All Statuses</option>
              <option>Received</option>
              <option>Pickup</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Date Range */}
        <div className="w-56">
          <label className="block text-xs font-medium text-slate-500 mb-1.5">Date Range</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <select className="w-full pl-9 pr-10 py-2 border border-slate-200 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white">
              <option>May 20, 2024 - May 27, 2024</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Payment Status */}
        <div className="w-32">
          <label className="block text-xs font-medium text-slate-500 mb-1.5">Payment Status</label>
          <div className="relative">
            <select className="w-full pl-4 pr-10 py-2 border border-slate-200 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white">
              <option>All</option>
              <option>Paid</option>
              <option>Pending</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Sort By */}
        <div className="w-32">
          <label className="block text-xs font-medium text-slate-500 mb-1.5">Sort By</label>
          <div className="relative">
            <select className="w-full pl-4 pr-10 py-2 border border-slate-200 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white">
              <option>Latest</option>
              <option>Oldest</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Reset Button */}
        <button className="px-4 py-2 flex items-center gap-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors h-[38px]">
          <RotateCcw size={16} />
          Reset Filters
        </button>
      </div>

      {/* Main Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Table Header */}
        <div className="p-5 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-[#101b43]">Orders (36)</h2>
          <button className="px-4 py-2 flex items-center gap-2 border border-indigo-100 text-indigo-600 bg-indigo-50/50 rounded-lg text-sm font-medium hover:bg-indigo-50 transition-colors">
            <Download size={16} />
            Export
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Order Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Order Amount</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Order Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ordersData.map((order, index) => (
                <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-[#101b43]">{order.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-[#101b43]">{order.date}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{order.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-[#101b43]">{order.customerName}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{order.customerEmail}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-[#101b43]">{order.amount}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-md ${getStatusStyles(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      {['Delivered', 'Received', 'Shipped', 'Pickup'].includes(order.status) ? (
                        <Link to={`/admin/orders/${order.status.toLowerCase()}/${order.id.replace('#', '')}`} className="flex items-center gap-1.5 px-3 py-1.5 border border-indigo-100 text-indigo-600 rounded-lg text-xs font-medium hover:bg-indigo-50 transition-colors cursor-pointer">
                          <Eye size={14} />
                          View Order
                        </Link>
                      ) : (
                        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 text-slate-400 rounded-lg text-xs font-medium cursor-not-allowed">
                          <Eye size={14} />
                          View Order
                        </button>
                      )}
                      <button className="text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-5 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing <span className="font-medium text-slate-700">1</span> to <span className="font-medium text-slate-700">10</span> of <span className="font-medium text-slate-700">36</span> orders
          </p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-indigo-600 bg-indigo-50 text-indigo-600 font-medium text-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50 transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50 transition-colors">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50 transition-colors">
              4
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
