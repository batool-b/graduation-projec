import { useState } from "react";
import { Link } from "react-router";
import {
  Users, Globe, BookOpen, DollarSign, TrendingUp, BarChart2,
  Eye, Edit, Trash2, Plus, Search, ChevronRight
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";
import { useAuth } from "../context/AuthContext";
import { trips, mockBookings, mockUsers } from "../data/mockData";

const bookingsPerMonth = [
  { month: "Jan", bookings: 42 },
  { month: "Feb", bookings: 58 },
  { month: "Mar", bookings: 75 },
  { month: "Apr", bookings: 90 },
  { month: "May", bookings: 110 },
  { month: "Jun", bookings: 95 },
  { month: "Jul", bookings: 130 },
  { month: "Aug", bookings: 145 },
  { month: "Sep", bookings: 88 },
  { month: "Oct", bookings: 70 },
  { month: "Nov", bookings: 62 },
  { month: "Dec", bookings: 105 },
];

const popularTrips = [
  { name: "Maldives", value: 145 },
  { name: "Dubai", value: 110 },
  { name: "Bali", value: 98 },
  { name: "Paris", value: 87 },
  { name: "Thailand", value: 75 },
];

const PIE_COLORS = ["#16a34a", "#0ea5e9", "#f59e0b", "#8b5cf6", "#f43f5e"];

export function AdminDashboard() {
  const { isLoggedIn, user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [search, setSearch] = useState("");

  if (!isLoggedIn || user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Access Denied</h2>
          <p className="text-gray-500 mb-4">Admin access required.</p>
          <Link to="/" className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-semibold">Go Home</Link>
        </div>
      </div>
    );
  }

  const kpis = [
    { icon: Users, label: "Total Users", value: "1,248", change: "+12%", color: "bg-blue-500" },
    { icon: Globe, label: "Total Trips", value: trips.length.toString(), change: "+3", color: "bg-green-500" },
    { icon: BookOpen, label: "Total Bookings", value: "1,070", change: "+8%", color: "bg-amber-500" },
    { icon: DollarSign, label: "Total Revenue", value: "$2.4M", change: "+15%", color: "bg-purple-500" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "users", label: "Manage Users" },
    { id: "trips", label: "Manage Trips" },
    { id: "bookings", label: "Manage Bookings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <p className="text-green-200 text-sm mb-0.5">Admin Panel</p>
            <h1 className="text-white" style={{ fontSize: "1.75rem", fontWeight: 700 }}>Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-lg">
              {user.name?.charAt(0)}
            </div>
            <div className="text-white text-sm hidden sm:block">
              <div className="font-semibold">{user.name}</div>
              <div className="text-green-200">Administrator</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-xl p-1 shadow-sm border border-gray-100 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`${kpi.color} rounded-xl p-2.5 w-10 h-10 flex items-center justify-center`}>
                      <kpi.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {kpi.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-0.5">{kpi.value}</div>
                  <div className="text-sm text-gray-500">{kpi.label}</div>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart2 className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Bookings per Month</h3>
                </div>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={bookingsPerMonth} margin={{ top: 5, right: 10, bottom: 5, left: -10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#9ca3af" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#9ca3af" }} />
                    <Tooltip
                      contentStyle={{ borderRadius: 12, border: "1px solid #e5e7eb", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }}
                    />
                    <Bar dataKey="bookings" fill="#16a34a" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Popular Trips</h3>
                </div>
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie data={popularTrips} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={3} dataKey="value">
                      {popularTrips.map((_, i) => (
                        <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend iconSize={10} iconType="circle" wrapperStyle={{ fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Recent Bookings</h3>
                <button onClick={() => setActiveTab("bookings")} className="text-green-600 text-sm flex items-center gap-1 hover:underline">
                  View all <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-2.5 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Booking ID</th>
                      <th className="text-left py-2.5 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Trip</th>
                      <th className="text-left py-2.5 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Destination</th>
                      <th className="text-left py-2.5 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="text-left py-2.5 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockBookings.map((b) => (
                      <tr key={b.id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-3 px-2 font-mono text-xs text-gray-500">{b.id}</td>
                        <td className="py-3 px-2 font-medium text-gray-900">{b.tripTitle}</td>
                        <td className="py-3 px-2 text-gray-600 hidden sm:table-cell">{b.destination}</td>
                        <td className="py-3 px-2 font-semibold text-gray-900">${(b.totalPrice || 0).toLocaleString()}</td>
                        <td className="py-3 px-2">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${
                            b.status === "Confirmed" ? "bg-green-100 text-green-700" :
                            b.status === "Completed" ? "bg-blue-100 text-blue-700" :
                            b.status === "Cancelled" ? "bg-red-100 text-red-700" :
                            "bg-amber-100 text-amber-700"
                          }`}>
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Manage Users */}
        {activeTab === "users" && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
              <h3 className="font-semibold text-gray-900">Manage Users</h3>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400"
                  />
                </div>
                <button className="flex items-center gap-1 bg-green-600 text-white px-3 py-2 rounded-xl text-sm font-medium">
                  <Plus className="w-4 h-4" /> Add User
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    {["ID", "Name", "Email", "Phone", "Bookings", "Status", "Actions"].map((h) => (
                      <th key={h} className="text-left py-2.5 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mockUsers
                    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()))
                    .map((u) => (
                      <tr key={u.id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-3 px-2 font-mono text-xs text-gray-400">{u.id}</td>
                        <td className="py-3 px-2 font-medium text-gray-900">{u.name}</td>
                        <td className="py-3 px-2 text-gray-500">{u.email}</td>
                        <td className="py-3 px-2 text-gray-500">{u.phone}</td>
                        <td className="py-3 px-2 text-gray-900">{u.bookings}</td>
                        <td className="py-3 px-2">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                            (u.status || "").toLowerCase() === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                          }`}>
                            {u.status}
                          </span>
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-1">
                            <button className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50"><Eye className="w-3.5 h-3.5" /></button>
                            <button className="p-1.5 rounded-lg text-green-600 hover:bg-green-50"><Edit className="w-3.5 h-3.5" /></button>
                            <button className="p-1.5 rounded-lg text-red-500 hover:bg-red-50"><Trash2 className="w-3.5 h-3.5" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Manage Trips */}
        {activeTab === "trips" && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
              <h3 className="font-semibold text-gray-900">Manage Trips</h3>
              <button className="flex items-center gap-1 bg-green-600 text-white px-3 py-2 rounded-xl text-sm font-medium">
                <Plus className="w-4 h-4" /> Add Trip
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    {["ID", "Trip", "Country", "Type", "Price", "Rating", "Actions"].map((h) => (
                      <th key={h} className="text-left py-2.5 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {trips.map((t) => (
                    <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-3 px-2 font-mono text-xs text-gray-400">#{t.id}</td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <img src={t.image} alt={t.title} className="w-8 h-8 rounded-lg object-cover shrink-0" />
                          <span className="font-medium text-gray-900 truncate max-w-30">{t.title}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-gray-500">{t.country}</td>
                      <td className="py-3 px-2">
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">{t.travelType}</span>
                      </td>
                      <td className="py-3 px-2 font-semibold text-gray-900">${t.price.toLocaleString()}</td>
                      <td className="py-3 px-2 text-amber-500">{t.rating} ★</td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-1">
                          <Link to={`/trips/${t.id}`} className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50"><Eye className="w-3.5 h-3.5" /></Link>
                          <button className="p-1.5 rounded-lg text-green-600 hover:bg-green-50"><Edit className="w-3.5 h-3.5" /></button>
                          <button className="p-1.5 rounded-lg text-red-500 hover:bg-red-50"><Trash2 className="w-3.5 h-3.5" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Manage Bookings */}
        {activeTab === "bookings" && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
              <h3 className="font-semibold text-gray-900">Manage Bookings</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    {["Booking ID", "Trip", "Destination", "Date", "Amount", "Status", "Actions"].map((h) => (
                      <th key={h} className="text-left py-2.5 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mockBookings.map((b) => (
                    <tr key={b.id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-3 px-2 font-mono text-xs text-gray-400">{b.id}</td>
                      <td className="py-3 px-2 font-medium text-gray-900 max-w-37.5 truncate">{b.tripTitle}</td>
                      <td className="py-3 px-2 text-gray-500">{b.destination}</td>
                      <td className="py-3 px-2 text-gray-500">{b.travelDate}</td>
                      <td className="py-3 px-2 font-semibold text-gray-900">${(b.totalPrice || 0).toLocaleString()}</td>
                      <td className="py-3 px-2">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${
                          b.status === "Confirmed" ? "bg-green-100 text-green-700" :
                          b.status === "Completed" ? "bg-blue-100 text-blue-700" :
                          b.status === "Cancelled" ? "bg-red-100 text-red-700" :
                          "bg-amber-100 text-amber-700"
                        }`}>
                          {b.status}
                        </span>
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-1">
                          <button className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50"><Eye className="w-3.5 h-3.5" /></button>
                          <button className="p-1.5 rounded-lg text-green-600 hover:bg-green-50"><Edit className="w-3.5 h-3.5" /></button>
                          <button className="p-1.5 rounded-lg text-red-500 hover:bg-red-50"><Trash2 className="w-3.5 h-3.5" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}