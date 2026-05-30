import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";
import {
  Users, Globe, BookOpen, DollarSign, TrendingUp, BarChart2,
  Eye, Edit, Trash2, Plus, Search, ChevronRight, X, Check, Calendar
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";
import { useAuth } from "../context/AuthContext";
import { adminAPI } from "../api";

// ====================== IMPORT FROM MOCK DATA ======================
import {
  trips as mockTrips,
  mockBookings,
  mockUsers,
  adminStats,
  bookingsPerMonth as mockBookingsPerMonth,
} from "../data/mockData";

// ====================== COUNTRY IMAGES MAP ======================
const COUNTRY_IMAGES = {
  1: "/images/bankok.avif",
  2: "/images/paris.jpg",
  3: "/images/baliiii.jpg",
  4: "/images/istanbul.jpg",
  5: "/images/eqyptt.jpg",
  6: "/images/swiss.jpg",
  7: "/images/maldives.jpg",
  8: "/images/KualaLumpur.jpg.jpg",
  9: "/images/dubai.jpg",
  10: "/images/umrah.jpg.png",
  11: "/images/german.jpg",
  12: "/images/jordan.jpg.jpg",
};

// ====================== TRANSFORM MOCK DATA TO API SHAPE ======================
const FALLBACK_OVERVIEW = {
  users: adminStats.totalUsers,
  trips: adminStats.totalTrips,
  bookings: adminStats.totalBookings,
  revenue: adminStats.totalRevenue,
};

const FALLBACK_USERS = mockUsers.map((u) => ({
  id: u.id,
  first_name: u.name.split(" ")[0],
  last_name: u.name.split(" ")[1] ?? "",
  email: u.email,
  phone: u.phone,
  created_at: new Date().toISOString(),
  _count: { bookings: u.bookings },
}));

const FALLBACK_TRIPS = mockTrips.map((t) => ({
  id: t.id,
  title: t.title,
  price: t.price,
  duration: parseInt(t.duration),
  description: t.description ?? "",
  countries_id: t.id,
  travel_types_id: t.id,
  countries: { name: t.country },
  travel_types: { name: t.travelType },
  trip_images: t.image ? [{ image_url: t.image }] : [],
}));

const FALLBACK_BOOKINGS = mockBookings.map((b) => ({
  id: b.id,
  users: {
    first_name: b.id.includes("8821")
      ? "Ahmed"
      : b.id.includes("9045")
      ? "Sara"
      : b.id.includes("1120")
      ? "Khaled"
      : "Lina",
    last_name: b.id.includes("8821")
      ? "Ali"
      : b.id.includes("9045")
      ? "Mahmoud"
      : b.id.includes("1120")
      ? "Omar"
      : "Nassar",
  },
  trips: { title: b.tripTitle },
  travel_date: b.travelDate,
  total_price: b.totalPrice,
  status: b.status.toLowerCase(),
}));

const bookingsPerMonth = mockBookingsPerMonth;

const PIE_COLORS = ["#16a34a", "#0ea5e9", "#f59e0b", "#8b5cf6", "#f43f5e"];

// ====================== MODAL ======================
function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function InputField({ label, value, onChange, type = "text", placeholder }) {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-400"
      />
    </div>
  );
}

export function AdminDashboard() {
  const { isLoggedIn, user, loading } = useAuth();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.tab || "overview");
  const [search, setSearch] = useState("");

  const [overview, setOverview] = useState(FALLBACK_OVERVIEW);
  const [users, setUsers] = useState(FALLBACK_USERS);
  const [trips, setTrips] = useState(FALLBACK_TRIPS);
  const [bookings, setBookings] = useState(FALLBACK_BOOKINGS);
  const [dataLoading, setDataLoading] = useState(false);

  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // ====================== FETCH WITH FALLBACK ======================
  useEffect(() => {
    if (!isLoggedIn || !user?.is_admin) return;
    fetchOverview();
    fetchBookings();
  }, [user]);

  useEffect(() => {
    if (!isLoggedIn || !user?.is_admin) return;
    if (activeTab === "users") fetchUsers();
    if (activeTab === "trips") fetchTrips();
    if (activeTab === "bookings") fetchBookings();
  }, [activeTab]);

  const fetchOverview = async () => {
    try {
      const data = await adminAPI.getOverview();
      setOverview(data);
    } catch {
      setOverview(FALLBACK_OVERVIEW);
    }
  };

  const fetchUsers = async () => {
    setDataLoading(true);
    try {
      const data = await adminAPI.getUsers();
      if (data?.length) {
        const realEmails = new Set(data.map((u) => u.email));
        const maxRealId = Math.max(...data.map((u) => u.id));
        const extraFallback = FALLBACK_USERS
          .filter((u) => !realEmails.has(u.email))
          .map((u, i) => ({ ...u, id: maxRealId + i + 1 }));
        setUsers([...data, ...extraFallback]);
      } else {
        setUsers(FALLBACK_USERS);
      }
    } catch {
      setUsers(FALLBACK_USERS);
    }
    setDataLoading(false);
  };

  const fetchTrips = async () => {
    setDataLoading(true);
    try {
      const data = await adminAPI.getTrips();
      setTrips(data?.length ? data : FALLBACK_TRIPS);
    } catch {
      setTrips(FALLBACK_TRIPS);
    }
    setDataLoading(false);
  };

  const fetchBookings = async () => {
    setDataLoading(true);
    try {
      const data = await adminAPI.getBookings();
      setBookings(data?.length ? data : FALLBACK_BOOKINGS);
    } catch {
      setBookings(FALLBACK_BOOKINGS);
    }
    setDataLoading(false);
  };

  // ====================== OPEN MODALS ======================
  const openAddUser = () => {
    setForm({ first_name: "", last_name: "", email: "", phone: "", password: "" });
    setError("");
    setModal({ type: "addUser" });
  };

  const openEditUser = (u) => {
    setForm({ first_name: u.first_name, last_name: u.last_name, email: u.email, phone: u.phone });
    setError("");
    setModal({ type: "editUser", data: u });
  };

  const openViewUser = (u) => setModal({ type: "viewUser", data: u });

  const openAddTrip = () => {
    setForm({ title: "", description: "", price: "", duration: "", countries_id: "", travel_types_id: "", trip_dates: [], newDate: "" });
    setError("");
    setModal({ type: "addTrip" });
  };

  const openEditTrip = async (t) => {
    setError("");
    // fetch fresh trip data from DB to get real trip_dates with correct ids
    let tripDates = [];
    try {
      const freshTrips = await adminAPI.getTrips();
      const freshTrip = freshTrips.find((ft) => ft.id === t.id);
      tripDates = freshTrip?.trip_dates ? freshTrip.trip_dates.map((d) => ({ ...d })) : [];
    } catch {
      tripDates = t.trip_dates ? t.trip_dates.map((d) => ({ ...d })) : [];
    }
    setForm({
      title: t.title,
      description: t.description,
      price: t.price,
      duration: t.duration,
      countries_id: t.countries_id,
      travel_types_id: t.travel_types_id,
      trip_dates: tripDates,
      newDate: "",
    });
    setModal({ type: "editTrip", data: t });
  };

  const openEditBooking = (b) => {
    setForm({ status: b.status });
    setError("");
    setModal({ type: "editBooking", data: b });
  };

  const closeModal = () => setModal(null);

  // ====================== ACTIONS ======================
  const handleSaveUser = async () => {
    setSaving(true);
    setError("");
    try {
      if (modal.type === "addUser") {
        await adminAPI.createUser(form);
      } else {
        await adminAPI.updateUser(modal.data.id, form);
      }
      await fetchUsers();
      await fetchOverview(); // ✅ تحديث الـ overview بعد إضافة/تعديل يوزر
      closeModal();
    } catch (err) {
      setError(err.message);
    }
    setSaving(false);
  };

  const handleDeleteUser = async (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      await adminAPI.deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
      await fetchOverview(); // ✅ تحديث الـ KPI cards والرسومات بعد الحذف
    } catch (err) {
      alert("Cannot delete user: " + err.message);
    }
  };

  const handleSaveTrip = async () => {
    setSaving(true);
    setError("");
    try {
      let tripId;
      if (modal.type === "addTrip") {
        const res = await adminAPI.createTrip(form);
        tripId = res.trip?.id;
      } else {
        await adminAPI.updateTrip(modal.data.id, form);
        tripId = modal.data.id;
      }


      // Add new date if entered
      if (form.newDate && tripId) {
        await adminAPI.createTripDate({
          trips_id: tripId,
          available_date: form.newDate,
        });
      }

      await fetchTrips();
      await fetchOverview();
      closeModal();
    } catch (err) {
      setError(err.message);
    }
    setSaving(false);
  };

  const handleDeleteTripDate = async (dateId) => {
    // if no real DB id, just remove from local state
    if (!dateId) {
      setForm((prev) => ({
        ...prev,
        trip_dates: prev.trip_dates.filter((d) => d._localId !== dateId && d.id !== dateId),
      }));
      return;
    }
    try {
      await adminAPI.deleteTripDate(dateId);
      setForm((prev) => ({
        ...prev,
        trip_dates: prev.trip_dates.filter((d) => d.id !== dateId),
      }));
    } catch (err) {
      setError("Failed to delete date: " + err.message);
    }
  };

  const handleAddTripDate = async () => {
    if (!form.newDate) return;
    setSaving(true);
    try {
      const res = await adminAPI.createTripDate({
        trips_id: modal.data.id,
        available_date: form.newDate,
      });
      setForm((prev) => ({
        ...prev,
        trip_dates: [...(prev.trip_dates || []), res.tripDate],
        newDate: "",
      }));
    } catch (err) {
      setError("Failed to add date: " + err.message);
    }
    setSaving(false);
  };

  const handleDeleteTrip = async (id) => {
    if (!confirm("Are you sure you want to delete this trip?")) return;
    try {
      await adminAPI.deleteTrip(id);
      setTrips((prev) => prev.filter((t) => t.id !== id));
      await fetchOverview(); // ✅ تحديث الـ KPI cards بعد حذف تريب
    } catch (err) {
      alert("Cannot delete trip: " + err.message);
    }
  };

  const handleSaveBooking = async () => {
    setSaving(true);
    setError("");
    try {
      await adminAPI.updateBookingStatus(modal.data.id, form.status);
      await fetchBookings(); // يحدث bookings state → pieData يتحدث تلقائياً
      await fetchOverview(); // ✅ تحديث الـ KPI cards بعد تغيير status
      closeModal();
    } catch (err) {
      setError(err.message);
    }
    setSaving(false);
  };

  const handleDeleteBooking = async (id) => {
    if (!confirm("Are you sure you want to delete this booking?")) return;
    try {
      await adminAPI.deleteBooking(id);
      setBookings((prev) => prev.filter((b) => b.id !== id));
      await fetchOverview(); // ✅ تحديث الـ KPI cards والـ pie chart بعد الحذف
    } catch (err) {
      alert("Cannot delete booking: " + err.message);
    }
  };

  // ====================== GUARD ======================
  if (loading) return null;
  if (!isLoggedIn || !user?.is_admin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Access Denied</h2>
          <p className="text-gray-500 mb-4">Admin access required.</p>
          <Link to="/" className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-semibold">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const kpis = [
    { icon: Users,      label: "Total Users",    value: overview?.users   ?? "—", color: "bg-blue-500" },
    { icon: Globe,      label: "Total Trips",    value: overview?.trips   ?? "—", color: "bg-green-500" },
    { icon: BookOpen,   label: "Total Bookings", value: overview?.bookings ?? "—", color: "bg-amber-500" },
    {
      icon: DollarSign,
      label: "Total Revenue",
      value: overview ? `$${Number(overview.revenue).toLocaleString()}` : "—",
      color: "bg-purple-500",
    },
  ];

  const tabs = [
    { id: "overview",  label: "Overview" },
    { id: "users",     label: "Manage Users" },
    { id: "trips",     label: "Manage Trips" },
    { id: "bookings",  label: "Manage Bookings" },
  ];

  const statusColors = {
    confirmed: "bg-green-100 text-green-700",
    completed:  "bg-blue-100 text-blue-700",
    cancelled:  "bg-red-100 text-red-700",
    pending:    "bg-amber-100 text-amber-700",
  };

  const filteredUsers = users.filter(
    (u) =>
      `${u.first_name} ${u.last_name}`.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  // Pie chart مبنية على live bookings state — تتحدث تلقائياً مع setBookings
  const pieData = [
    { name: "Confirmed", value: bookings.filter((b) => b.status === "confirmed").length },
    { name: "Pending",   value: bookings.filter((b) => b.status === "pending").length },
    { name: "Completed", value: bookings.filter((b) => b.status === "completed").length },
    { name: "Cancelled", value: bookings.filter((b) => b.status === "cancelled").length },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ====================== MODALS ====================== */}

      {(modal?.type === "addUser" || modal?.type === "editUser") && (
        <Modal title={modal.type === "addUser" ? "Add User" : "Edit User"} onClose={closeModal}>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <InputField label="First Name" value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} />
              <InputField label="Last Name"  value={form.last_name}  onChange={(e) => setForm({ ...form, last_name: e.target.value })} />
            </div>
            <InputField label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <InputField label="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            {modal.type === "addUser" && (
              <InputField label="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              onClick={handleSaveUser}
              disabled={saving}
              className="w-full bg-green-600 text-white py-2.5 rounded-xl font-semibold text-sm mt-2 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </Modal>
      )}

      {modal?.type === "viewUser" && (
        <Modal title="User Details" onClose={closeModal}>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-lg">
                {modal.data.first_name?.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-gray-900">{modal.data.first_name} {modal.data.last_name}</p>
                <p className="text-gray-500">{modal.data.email}</p>
              </div>
            </div>
            <p><span className="font-semibold text-gray-600">Phone:</span> {modal.data.phone}</p>
            <p><span className="font-semibold text-gray-600">Bookings:</span> {modal.data._count?.bookings ?? 0}</p>
            <p><span className="font-semibold text-gray-600">Joined:</span> {new Date(modal.data.created_at).toLocaleDateString()}</p>
          </div>
        </Modal>
      )}

      {(modal?.type === "addTrip" || modal?.type === "editTrip") && (
        <Modal title={modal.type === "addTrip" ? "Add Trip" : "Edit Trip"} onClose={closeModal}>
          <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
            <InputField label="Title"       value={form.title}       onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <InputField label="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            <div className="grid grid-cols-2 gap-3">
              <InputField label="Price ($)"      type="number" value={form.price}    onChange={(e) => setForm({ ...form, price: e.target.value })} />
              <InputField label="Duration (days)" type="number" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <InputField label="Country ID"     type="number" value={form.countries_id}    onChange={(e) => setForm({ ...form, countries_id: e.target.value })} />
              <InputField label="Travel Type ID" type="number" value={form.travel_types_id} onChange={(e) => setForm({ ...form, travel_types_id: e.target.value })} />
            </div>

            {/* ── Trip Dates Management ── */}
            <div className="border border-gray-200 rounded-xl p-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Available Dates
              </p>

              {/* Existing dates */}
              {(form.trip_dates || []).length > 0 ? (
                <div className="space-y-1.5 mb-3">
                  {form.trip_dates.map((d, idx) => (
                    <div key={d.id ?? `local-${idx}`} className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">
                      <span className="text-xs text-green-800 font-medium">
                        {d.available_date?.slice(0, 10) || d.start_date?.slice(0, 10)}
                      </span>
                      <button
                        onClick={() => d.id ? handleDeleteTripDate(d.id) : setForm(prev => ({ ...prev, trip_dates: prev.trip_dates.filter((_, i) => i !== idx) }))}
                        className="text-red-400 hover:text-red-600 p-0.5 rounded"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-400 mb-3">No dates added yet.</p>
              )}

              {/* Add new date */}
              <div className="flex gap-2">
                <input
                  type="date"
                  value={form.newDate || ""}
                  min={new Date().toISOString().slice(0, 10)}
                  onChange={(e) => setForm({ ...form, newDate: e.target.value })}
                  className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-green-400"
                />
                {modal.type === "editTrip" ? (
                  <button
                    onClick={handleAddTripDate}
                    disabled={saving || !form.newDate}
                    className="flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium disabled:opacity-50"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (!form.newDate) return;
                      setForm((prev) => ({
                        ...prev,
                        trip_dates: [...(prev.trip_dates || []), { id: null, available_date: form.newDate }],
                        newDate: "",
                      }));
                    }}
                    disabled={!form.newDate}
                    className="flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium disabled:opacity-50"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add
                  </button>
                )}
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              onClick={handleSaveTrip}
              disabled={saving}
              className="w-full bg-green-600 text-white py-2.5 rounded-xl font-semibold text-sm mt-2 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </Modal>
      )}

      {modal?.type === "editBooking" && (
        <Modal title="Update Booking Status" onClose={closeModal}>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-400"
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              onClick={handleSaveBooking}
              disabled={saving}
              className="w-full bg-green-600 text-white py-2.5 rounded-xl font-semibold text-sm mt-2 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Update Status"}
            </button>
          </div>
        </Modal>
      )}

      {/* ====================== HEADER ====================== */}
      <div className="bg-green-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <p className="text-green-200 text-sm mb-0.5">Admin Panel</p>
            <h1 className="text-white" style={{ fontSize: "1.75rem", fontWeight: 700 }}>Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-lg">
              {user.first_name?.charAt(0)}
            </div>
            <div className="text-white text-sm hidden sm:block">
              <div className="font-semibold">{user.first_name} {user.last_name}</div>
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
                activeTab === tab.id ? "bg-green-600 text-white shadow-sm" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ====================== OVERVIEW ====================== */}
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
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e5e7eb" }} />
                    <Bar dataKey="bookings" fill="#16a34a" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Bookings by Status</h3>
                </div>
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={80}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {PIE_COLORS.map((color, i) => (
                        <Cell key={i} fill={color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend iconSize={10} iconType="circle" wrapperStyle={{ fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Bookings Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Recent Bookings</h3>
                <button
                  onClick={() => setActiveTab("bookings")}
                  className="text-green-600 text-sm flex items-center gap-1 hover:underline"
                >
                  View all <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      {["ID", "User", "Trip", "Amount", "Status"].map((h) => (
                        <th key={h} className="text-left py-2.5 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.slice(0, 5).map((b) => (
                      <tr key={b.id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-3 px-2 font-mono text-xs text-gray-500">#{b.id}</td>
                        <td className="py-3 px-2 font-medium text-gray-900">{b.users?.first_name} {b.users?.last_name}</td>
                        <td className="py-3 px-2 text-gray-600">{b.trips?.title}</td>
                        <td className="py-3 px-2 font-semibold text-gray-900">${Number(b.total_price || 0).toLocaleString()}</td>
                        <td className="py-3 px-2">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${statusColors[b.status] || "bg-gray-100 text-gray-500"}`}>
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

        {/* ====================== USERS ====================== */}
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
                <button
                  onClick={openAddUser}
                  className="flex items-center gap-1 bg-green-600 text-white px-3 py-2 rounded-xl text-sm font-medium"
                >
                  <Plus className="w-4 h-4" /> Add User
                </button>
              </div>
            </div>

            {dataLoading ? (
              <div className="text-center py-10 text-gray-400">Loading...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      {["ID", "Name", "Email", "Phone", "Bookings", "Joined", "Actions"].map((h) => (
                        <th key={h} className="text-left py-2.5 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((u) => (
                      <tr key={u.id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-3 px-2 font-mono text-xs text-gray-400">{u.id}</td>
                        <td className="py-3 px-2 font-medium text-gray-900">{u.first_name} {u.last_name}</td>
                        <td className="py-3 px-2 text-gray-500">{u.email}</td>
                        <td className="py-3 px-2 text-gray-500">{u.phone}</td>
                        <td className="py-3 px-2 text-gray-900">{u._count?.bookings ?? 0}</td>
                        <td className="py-3 px-2 text-gray-500">{new Date(u.created_at).toLocaleDateString()}</td>
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-1">
                            <button onClick={() => openViewUser(u)} className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50"><Eye className="w-3.5 h-3.5" /></button>
                            <button onClick={() => openEditUser(u)} className="p-1.5 rounded-lg text-green-600 hover:bg-green-50"><Edit className="w-3.5 h-3.5" /></button>
                            <button onClick={() => handleDeleteUser(u.id)} className="p-1.5 rounded-lg text-red-500 hover:bg-red-50"><Trash2 className="w-3.5 h-3.5" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ====================== TRIPS ====================== */}
        {activeTab === "trips" && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
              <h3 className="font-semibold text-gray-900">Manage Trips</h3>
              <button
                onClick={openAddTrip}
                className="flex items-center gap-1 bg-green-600 text-white px-3 py-2 rounded-xl text-sm font-medium"
              >
                <Plus className="w-4 h-4" /> Add Trip
              </button>
            </div>

            {dataLoading ? (
              <div className="text-center py-10 text-gray-400">Loading...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      {["ID", "Title", "Country", "Type", "Price", "Duration", "Actions"].map((h) => (
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
                            <img
                              src={COUNTRY_IMAGES[t.countries_id] || "/images/hero.png"}
                              alt={t.title}
                              className="w-8 h-8 rounded-lg object-cover shrink-0"
                              onError={(e) => { e.target.src = "/images/hero.png"; }}
                            />
                            <span className="font-medium text-gray-900 truncate max-w-[120px]">{t.title}</span>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-gray-500">{t.countries?.name ?? t.countries_id}</td>
                        <td className="py-3 px-2">
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                            {t.travel_types?.name ?? t.travel_types_id}
                          </span>
                        </td>
                        <td className="py-3 px-2 font-semibold text-gray-900">${Number(t.price).toLocaleString()}</td>
                        <td className="py-3 px-2 text-gray-500">{t.duration}d</td>
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-1">
                            <Link to={`/trips/${t.id}`} className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50"><Eye className="w-3.5 h-3.5" /></Link>
                            <button onClick={() => openEditTrip(t)} className="p-1.5 rounded-lg text-green-600 hover:bg-green-50"><Edit className="w-3.5 h-3.5" /></button>
                            <button onClick={() => handleDeleteTrip(t.id)} className="p-1.5 rounded-lg text-red-500 hover:bg-red-50"><Trash2 className="w-3.5 h-3.5" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ====================== BOOKINGS ====================== */}
        {activeTab === "bookings" && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
              <h3 className="font-semibold text-gray-900">Manage Bookings</h3>
            </div>

            {dataLoading ? (
              <div className="text-center py-10 text-gray-400">Loading...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      {["ID", "User", "Trip", "Date", "Amount", "Status", "Actions"].map((h) => (
                        <th key={h} className="text-left py-2.5 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b) => (
                      <tr key={b.id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-3 px-2 font-mono text-xs text-gray-400">#{b.id}</td>
                        <td className="py-3 px-2 font-medium text-gray-900">{b.users?.first_name} {b.users?.last_name}</td>
                        <td className="py-3 px-2 text-gray-600 truncate max-w-[120px]">{b.trips?.title}</td>
                        <td className="py-3 px-2 text-gray-500">{new Date(b.travel_date).toLocaleDateString()}</td>
                        <td className="py-3 px-2 font-semibold text-gray-900">${Number(b.total_price || 0).toLocaleString()}</td>
                        <td className="py-3 px-2">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${statusColors[b.status] || "bg-gray-100 text-gray-500"}`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-1">
                            <button onClick={() => openEditBooking(b)} className="p-1.5 rounded-lg text-green-600 hover:bg-green-50"><Edit className="w-3.5 h-3.5" /></button>
                            <button onClick={() => handleDeleteBooking(b.id)} className="p-1.5 rounded-lg text-red-500 hover:bg-red-50"><Trash2 className="w-3.5 h-3.5" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}