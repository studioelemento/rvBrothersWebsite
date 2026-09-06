import React from 'react';
import { Calendar, Download, Package, AlertCircle, AlertOctagon, IndianRupee, PlusCircle, ArrowUpRight, ArrowDownRight, ChevronDown } from 'lucide-react';

export default function Analysis() {
  return (
    <div className="p-6 max-w-[1600px] mx-auto w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Product Analysis</h1>
          <p className="text-slate-500 text-sm mt-1">Get insights and analyze your product performance and inventory.</p>
        </div>
        
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <div className="relative">
            <button className="flex items-center space-x-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 px-4 py-2.5 rounded-lg hover:bg-slate-50 shadow-sm transition-colors">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>May 15, 2024 - Jun 13, 2024</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>
          <button className="flex items-center space-x-2 text-sm font-medium text-[#4c00ff] bg-indigo-50 border border-indigo-100 px-4 py-2.5 rounded-lg hover:bg-indigo-100 shadow-sm transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        <SummaryCard 
          title="Total Products" 
          value="1,248" 
          trend="12.5%" 
          trendUp={true} 
          icon={<Package className="w-6 h-6 text-purple-600" />} 
          iconBg="bg-purple-100" 
        />
        <SummaryCard 
          title="Low Stock Products" 
          value="28" 
          trend="5.3%" 
          trendUp={false} 
          icon={<AlertCircle className="w-6 h-6 text-amber-500" />} 
          iconBg="bg-amber-100" 
        />
        <SummaryCard 
          title="Out of Stock Products" 
          value="12" 
          trend="2.1%" 
          trendUp={false} 
          icon={<AlertOctagon className="w-6 h-6 text-red-500" />} 
          iconBg="bg-red-100" 
        />
        <SummaryCard 
          title="Total Inventory Value" 
          value="₹24,58,450" 
          trend="8.7%" 
          trendUp={true} 
          icon={<IndianRupee className="w-6 h-6 text-emerald-600" />} 
          iconBg="bg-emerald-100" 
        />
        <SummaryCard 
          title="Products Added" 
          value="86" 
          trend="15.6%" 
          trendUp={true} 
          icon={<PlusCircle className="w-6 h-6 text-blue-600" />} 
          iconBg="bg-blue-100" 
        />
      </div>

      {/* Grid layout for tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Row 1 */}
        <TableCard title="Top Selling Products">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="text-slate-400 font-medium border-b border-slate-100">
              <tr>
                <th className="pb-3 w-8">#</th>
                <th className="pb-3">Product</th>
                <th className="pb-3 text-right">Units Sold</th>
                <th className="pb-3 text-right">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <ProductRow num="1" name="Stainless Steel Elbow 90°" cat="Pipe Fittings" col1="1,250" col2="₹2,37,500" icon="🔧" />
              <ProductRow num="2" name="Brass Ball Valve 1/2&quot;" cat="Valves" col1="980" col2="₹1,76,400" icon="🚰" />
              <ProductRow num="3" name="GI Pipe 1 inch" cat="Steel Pipes" col1="760" col2="₹1,14,000" icon="🔩" />
              <ProductRow num="4" name="SS Flange 4 inch" cat="Flanges" col1="620" col2="₹93,000" icon="⚙️" />
              <ProductRow num="5" name="Rubber Gasket 2 inch" cat="Gaskets" col1="540" col2="₹64,800" icon="⭕" />
            </tbody>
          </table>
        </TableCard>

        <TableCard title="Top Viewed Products">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="text-slate-400 font-medium border-b border-slate-100">
              <tr>
                <th className="pb-3 w-8">#</th>
                <th className="pb-3">Product</th>
                <th className="pb-3 text-right">Views</th>
                <th className="pb-3 text-right">Conversion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <ProductRow num="1" name="Brass Ball Valve 1/2&quot;" cat="Valves" col1="4,250" col2="22.8%" icon="🚰" col2Color="text-emerald-500" />
              <ProductRow num="2" name="Stainless Steel Pipe 2 inch" cat="Steel Pipes" col1="3,890" col2="18.7%" icon="🔩" col2Color="text-amber-500" />
              <ProductRow num="3" name="Stainless Steel Elbow 90°" cat="Pipe Fittings" col1="3,610" col2="20.1%" icon="🔧" col2Color="text-emerald-500" />
              <ProductRow num="4" name="SS Flange 4 inch" cat="Flanges" col1="3,200" col2="15.6%" icon="⚙️" col2Color="text-red-500" />
              <ProductRow num="5" name="CPVC Tee 1 inch" cat="Pipe Fittings" col1="2,780" col2="17.3%" icon="🔧" col2Color="text-amber-500" />
            </tbody>
          </table>
        </TableCard>

        {/* Row 2 */}
        <TableCard title="Low Stock Monitor">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="text-slate-400 font-medium border-b border-slate-100">
              <tr>
                <th className="pb-3 w-8">#</th>
                <th className="pb-3">Product</th>
                <th className="pb-3 text-center">Stock</th>
                <th className="pb-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <ProductRow num="1" name="Stainless Steel Elbow 45°" cat="Pipe Fittings" col1="8" col2="Low Stock" icon="🔧" statusType="warning" center />
              <ProductRow num="2" name="Butterfly Valve 2 inch" cat="Valves" col1="10" col2="Low Stock" icon="🚰" statusType="warning" center />
              <ProductRow num="3" name="Copper Pipe 1/2 inch" cat="Steel Pipes" col1="12" col2="Low Stock" icon="🔩" statusType="warning" center />
              <ProductRow num="4" name="Brass Hex Nipple 1/2&quot;" cat="Pipe Fittings" col1="15" col2="Low Stock" icon="🔧" statusType="warning" center />
              <ProductRow num="5" name="PTFE Gasket 2 inch" cat="Gaskets" col1="18" col2="Low Stock" icon="⭕" statusType="warning" center />
            </tbody>
          </table>
        </TableCard>

        <TableCard title="Out of Stock Products">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="text-slate-400 font-medium border-b border-slate-100">
              <tr>
                <th className="pb-3 w-8">#</th>
                <th className="pb-3">Product</th>
                <th className="pb-3">Last Sold</th>
                <th className="pb-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <ProductRow num="1" name="Gate Valve 2 inch" cat="Valves" col1="May 28, 2024" col2="Out of Stock" icon="🚰" statusType="danger" center2 />
              <ProductRow num="2" name="MS Pipe 2 inch" cat="Steel Pipes" col1="May 24, 2024" col2="Out of Stock" icon="🔩" statusType="danger" center2 />
              <ProductRow num="3" name="Blind Flange 6 inch" cat="Flanges" col1="May 20, 2024" col2="Out of Stock" icon="⚙️" statusType="danger" center2 />
              <ProductRow num="4" name="Reducing Tee 2x1 inch" cat="Pipe Fittings" col1="May 18, 2024" col2="Out of Stock" icon="🔧" statusType="danger" center2 />
              <ProductRow num="5" name="Spiral Wound Gasket" cat="Gaskets" col1="May 15, 2024" col2="Out of Stock" icon="⭕" statusType="danger" center2 />
            </tbody>
          </table>
        </TableCard>

        {/* Row 3 */}
        <TableCard title="Recently Added Products">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="text-slate-400 font-medium border-b border-slate-100">
              <tr>
                <th className="pb-3 w-8">#</th>
                <th className="pb-3">Product</th>
                <th className="pb-3">Date Added</th>
                <th className="pb-3 text-center">Stock</th>
                <th className="pb-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <ProductRow5 num="1" name="SS Clamp 2 inch" cat="Pipe Fittings" col1="Jun 13, 2024" col2="120" col3="Active" icon="🔗" statusType="success" />
              <ProductRow5 num="2" name="PVC Pipe 3 inch" cat="Steel Pipes" col1="Jun 12, 2024" col2="75" col3="Active" icon="🔩" statusType="success" />
              <ProductRow5 num="3" name="Check Valve 1 inch" cat="Valves" col1="Jun 11, 2024" col2="60" col3="Active" icon="🚰" statusType="success" />
              <ProductRow5 num="4" name="Union 1/2 inch" cat="Pipe Fittings" col1="Jun 10, 2024" col2="90" col3="Active" icon="🔧" statusType="success" />
              <ProductRow5 num="5" name="Pressure Gauge 0-10 Bar" cat="Instruments" col1="Jun 9, 2024" col2="45" col3="Active" icon="⏱️" statusType="success" />
            </tbody>
          </table>
        </TableCard>

        <TableCard title="Slow Moving Products">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="text-slate-400 font-medium border-b border-slate-100">
              <tr>
                <th className="pb-3 w-8">#</th>
                <th className="pb-3">Product</th>
                <th className="pb-3 text-center">Stock</th>
                <th className="pb-3 text-center">Units Sold (30 Days)</th>
                <th className="pb-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <ProductRow5 num="1" name="Y Strainer 2 inch" cat="Valves" col1="150" col2="2" col3="Slow Moving" icon="🚰" statusType="purple" />
              <ProductRow5 num="2" name="Bronze Valve 1 inch" cat="Valves" col1="120" col2="3" col3="Slow Moving" icon="🚰" statusType="purple" />
              <ProductRow5 num="3" name="Malleable Iron Cap 1/2&quot;" cat="Pipe Fittings" col1="200" col2="4" col3="Slow Moving" icon="🔧" statusType="purple" />
              <ProductRow5 num="4" name="Threaded Plug 1 inch" cat="Pipe Fittings" col1="180" col2="5" col3="Slow Moving" icon="🔧" statusType="purple" />
              <ProductRow5 num="5" name="Instrument Valve 1/2&quot;" cat="Instruments" col1="80" col2="3" col3="Slow Moving" icon="⏱️" statusType="purple" />
            </tbody>
          </table>
        </TableCard>

        {/* Row 4 */}
        <TableCard title="Inventory Value by Category">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-6 h-full">
            <div className="relative w-48 h-48 flex-shrink-0">
              <svg viewBox="0 0 36 36" className="w-full h-full drop-shadow-sm rotate-[-90deg]">
                {/* Background (optional, but good practice for full circle) */}
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#f1f5f9" strokeWidth="8"></circle>
                
                {/* Pipe Fittings: 36.0% */}
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#4c00ff" strokeWidth="8" strokeDasharray="36 64" strokeDashoffset="0"></circle>
                
                {/* Valves: 21.2% */}
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#3b82f6" strokeWidth="8" strokeDasharray="21.2 78.8" strokeDashoffset="-36"></circle>
                
                {/* Steel Pipes: 19.3% */}
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#10b981" strokeWidth="8" strokeDasharray="19.3 80.7" strokeDashoffset="-57.2"></circle>
                
                {/* Flanges: 10.6% */}
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#f59e0b" strokeWidth="8" strokeDasharray="10.6 89.4" strokeDashoffset="-76.5"></circle>
                
                {/* Gaskets: 5.5% */}
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#f97316" strokeWidth="8" strokeDasharray="5.5 94.5" strokeDashoffset="-87.1"></circle>
                
                {/* Instruments: 3.4% */}
                {/* The remaining gap is to ensure it reaches exactly 100%. Total so far = 96.0%. So Instruments + gap = 4%. We'll just draw 4 to complete the circle to avoid gaps */}
                <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#ef4444" strokeWidth="8" strokeDasharray="4 96" strokeDashoffset="-92.6"></circle>
              </svg>
              {/* Inner hole mask (already achieved by stroke, but we can add inner text if needed) */}
              <div className="absolute inset-0 rounded-full flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <table className="w-full text-sm text-slate-600">
                <thead className="text-slate-400 font-medium border-b border-slate-100">
                  <tr>
                    <th className="pb-3 text-left">Category</th>
                    <th className="pb-3 text-right">Inventory Value</th>
                    <th className="pb-3 text-right">% Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 flex items-center space-x-2"><span className="w-3 h-3 rounded-full bg-[#4c00ff]"></span><span className="font-medium text-slate-800">Pipe Fittings</span></td>
                    <td className="py-3 text-right">₹8,85,450</td>
                    <td className="py-3 text-right">36.0%</td>
                  </tr>
                  <tr>
                    <td className="py-3 flex items-center space-x-2"><span className="w-3 h-3 rounded-full bg-[#3b82f6]"></span><span className="font-medium text-slate-800">Valves</span></td>
                    <td className="py-3 text-right">₹5,20,300</td>
                    <td className="py-3 text-right">21.2%</td>
                  </tr>
                  <tr>
                    <td className="py-3 flex items-center space-x-2"><span className="w-3 h-3 rounded-full bg-[#10b981]"></span><span className="font-medium text-slate-800">Steel Pipes</span></td>
                    <td className="py-3 text-right">₹4,75,200</td>
                    <td className="py-3 text-right">19.3%</td>
                  </tr>
                  <tr>
                    <td className="py-3 flex items-center space-x-2"><span className="w-3 h-3 rounded-full bg-[#f59e0b]"></span><span className="font-medium text-slate-800">Flanges</span></td>
                    <td className="py-3 text-right">₹2,60,150</td>
                    <td className="py-3 text-right">10.6%</td>
                  </tr>
                  <tr>
                    <td className="py-3 flex items-center space-x-2"><span className="w-3 h-3 rounded-full bg-[#f97316]"></span><span className="font-medium text-slate-800">Gaskets</span></td>
                    <td className="py-3 text-right">₹1,35,600</td>
                    <td className="py-3 text-right">5.5%</td>
                  </tr>
                  <tr>
                    <td className="py-3 flex items-center space-x-2"><span className="w-3 h-3 rounded-full bg-[#ef4444]"></span><span className="font-medium text-slate-800">Instruments</span></td>
                    <td className="py-3 text-right">₹81,750</td>
                    <td className="py-3 text-right">3.4%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TableCard>

        <TableCard title="Recently Updated Products">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="text-slate-400 font-medium border-b border-slate-100">
              <tr>
                <th className="pb-3 w-8">#</th>
                <th className="pb-3">Product</th>
                <th className="pb-3 text-center">Updated By</th>
                <th className="pb-3 text-right">Updated On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <ProductRow num="1" name="Stainless Steel Elbow 90°" cat="Pipe Fittings" col1="Admin User" col2={<>Jun 13, 2024<br/><span className="text-xs text-slate-400">10:45 AM</span></>} icon="🔧" center1 />
              <ProductRow num="2" name="Brass Ball Valve 1/2&quot;" cat="Valves" col1="Admin User" col2={<>Jun 12, 2024<br/><span className="text-xs text-slate-400">04:30 PM</span></>} icon="🚰" center1 />
              <ProductRow num="3" name="GI Pipe 1 inch" cat="Steel Pipes" col1="Super Admin" col2={<>Jun 12, 2024<br/><span className="text-xs text-slate-400">11:20 AM</span></>} icon="🔩" center1 />
              <ProductRow num="4" name="SS Flange 4 inch" cat="Flanges" col1="Admin User" col2={<>Jun 11, 2024<br/><span className="text-xs text-slate-400">02:15 PM</span></>} icon="⚙️" center1 />
              <ProductRow num="5" name="CPVC Tee 1 inch" cat="Pipe Fittings" col1="Admin User" col2={<>Jun 10, 2024<br/><span className="text-xs text-slate-400">09:10 AM</span></>} icon="🔧" center1 />
            </tbody>
          </table>
        </TableCard>

      </div>
    </div>
  );
}

// Helper Components

function SummaryCard({ title, value, trend, trendUp, icon, iconBg }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}>
          {icon}
        </div>
      </div>
      <div>
        <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
      </div>
      <div className="mt-4 flex items-center space-x-1">
        {trendUp ? (
          <ArrowUpRight className="w-4 h-4 text-emerald-500" />
        ) : (
          <ArrowUpRight className="w-4 h-4 text-red-500" /> 
        )}
        <span className={`text-xs font-semibold ${trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
          {trendUp ? '+' : '-'}{trend}
        </span>
        <span className="text-xs text-slate-400 ml-1">vs last 30 days</span>
      </div>
    </div>
  );
}

function TableCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-base font-bold text-slate-900">{title}</h3>
        <button className="text-sm font-semibold text-[#4c00ff] hover:text-[#3d00cc]">View all</button>
      </div>
      <div className="flex-1 overflow-x-auto">
        {children}
      </div>
    </div>
  );
}

function ProductRow({ num, name, cat, col1, col2, icon, col2Color, statusType, center, center1, center2 }) {
  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="py-4 text-slate-900 font-medium">{num}</td>
      <td className="py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200 text-lg shadow-sm">
            {icon}
          </div>
          <div>
            <p className="font-bold text-slate-900 text-sm">{name}</p>
            <p className="text-slate-500 text-xs mt-0.5">{cat}</p>
          </div>
        </div>
      </td>
      <td className={`py-4 ${center || center1 ? 'text-center' : 'text-right'}`}>
        {col1}
      </td>
      <td className={`py-4 ${center || center2 ? 'text-center' : 'text-right'} font-medium ${col2Color || 'text-slate-700'}`}>
        {statusType ? (
          <StatusBadge type={statusType} text={col2} />
        ) : (
          col2
        )}
      </td>
    </tr>
  );
}

function ProductRow5({ num, name, cat, col1, col2, col3, icon, statusType }) {
  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="py-4 text-slate-900 font-medium">{num}</td>
      <td className="py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200 text-lg shadow-sm">
            {icon}
          </div>
          <div>
            <p className="font-bold text-slate-900 text-sm">{name}</p>
            <p className="text-slate-500 text-xs mt-0.5">{cat}</p>
          </div>
        </div>
      </td>
      <td className="py-4">{col1}</td>
      <td className="py-4 text-center">{col2}</td>
      <td className="py-4 text-center font-medium">
        <StatusBadge type={statusType} text={col3} />
      </td>
    </tr>
  );
}

function StatusBadge({ type, text }) {
  const styles = {
    warning: "bg-amber-50 text-amber-600 border-amber-100",
    danger: "bg-red-50 text-red-600 border-red-100",
    success: "bg-emerald-50 text-emerald-600 border-emerald-100",
    purple: "bg-[#f5f3ff] text-[#6d28d9] border-[#ede9fe]",
  };
  return (
    <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-md text-xs font-semibold border ${styles[type]}`}>
      {text}
    </span>
  );
}
