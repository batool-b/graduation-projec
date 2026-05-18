import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Phone, Edit, Key, Plane, LogOut, Calendar, ChevronRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { bookingsAPI } from "../api";
import { useEffect, useState } from "react";

export function Profile() {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [recentBookings, setRecentBookings] = useState([]);
  const [bookingsLoading, setBookingsLoading] = useState(true);

  // الأدمن ما له شغل هنا، نحوله للداشبورد
  useEffect(() => {
    if (isLoggedIn && user?.is_admin) {
      navigate("/admin", { replace: true });
    }
  }, [isLoggedIn, user, navigate]);

  // ✅ جيب الحجوزات الحقيقية من الـ API
  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchBookings = async () => {
      setBookingsLoading(true);
      try {
        const data = await bookingsAPI.getMyBookings();
        // خذ آخر حجزين بس للعرض
        const normalized = data.slice(0, 2).map((b) => ({
          id: b.id,
          tripTitle: b.trips?.title || "Unknown Trip",
          travelDate: b.travel_date?.slice(0, 10) || "—",
          status: b.status?.toLowerCase() || "pending",
        }));
        setRecentBookings(normalized);
      } catch {
        setRecentBookings([]);
      } finally {
        setBookingsLoading(false);
      }
    };
    fetchBookings();
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
        <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-sm w-full">
          <div className="text-5xl mb-4">🔒</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Please Login</h2>
          <p className="text-gray-500 text-sm mb-6">
            You need to be logged in to view your profile
          </p>
          <Link
            to="/login"
            className="block w-full bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const fullName =
    user?.first_name && user?.last_name
      ? `${user.first_name} ${user.last_name}`
      : user?.name || "User";

  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-white">
          {user?.profile_image ? (
            <img
              src={user.profile_image}
              alt={fullName}
              className="w-24 h-24 rounded-full object-cover border-4 border-white/50 shadow-xl"
            />
          ) : (
            <div className="w-24 h-24 rounded-full border-4 border-white/50 shadow-xl bg-white/20 flex items-center justify-center text-3xl font-bold text-white">
              {initials}
            </div>
          )}
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold">{fullName}</h1>
            <p className="text-green-100 mt-1">{user?.email}</p>
            <span className="inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white">
              👤 Member
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Sidebar */}
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-3">
                Account Settings
              </h3>
              <div className="space-y-1">
                <Link
                  to="/edit-profile"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all text-sm"
                >
                  <Edit className="w-4 h-4" /> Edit Profile
                </Link>
                <Link
                  to="/change-password"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all text-sm"
                >
                  <Key className="w-4 h-4" /> Change Password
                </Link>
                <Link
                  to="/my-bookings"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all text-sm"
                >
                  <Plane className="w-4 h-4" /> My Bookings
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-red-600 hover:bg-red-50 transition-all text-sm mt-2"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-5">
            {/* Personal Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-gray-900">Personal Information</h2>
                <Link
                  to="/edit-profile"
                  className="text-sm text-green-600 flex items-center gap-1 hover:underline"
                >
                  <Edit className="w-3.5 h-3.5" /> Edit
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  { icon: User, label: "Full Name", value: fullName },
                  { icon: Mail, label: "Email Address", value: user?.email },
                  { icon: Phone, label: "Phone Number", value: user?.phone || "Not provided" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-900">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Recent Bookings</h2>
                <Link
                  to="/my-bookings"
                  className="text-sm text-green-600 font-medium flex items-center gap-1 hover:underline"
                >
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-3">
                {bookingsLoading ? (
                  // Loading skeleton
                  [1, 2].map((i) => (
                    <div key={i} className="animate-pulse flex items-center justify-between bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg" />
                        <div>
                          <div className="h-3 bg-gray-200 rounded w-32 mb-2" />
                          <div className="h-2 bg-gray-200 rounded w-20" />
                        </div>
                      </div>
                      <div className="h-5 bg-gray-200 rounded w-16" />
                    </div>
                  ))
                ) : recentBookings.length === 0 ? (
                  <div className="text-center py-6">
                    <p className="text-sm text-gray-400">No bookings yet</p>
                    <Link
                      to="/trips"
                      className="mt-2 inline-block text-sm text-green-600 font-medium hover:underline"
                    >
                      Explore Trips →
                    </Link>
                  </div>
                ) : (
                  recentBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <Plane className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{booking.tripTitle}</p>
                          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                            <Calendar className="w-3 h-3" /> {booking.travelDate}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-lg ${
                          booking.status === "confirmed"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "cancelled"
                            ? "bg-red-100 text-red-700"
                            : booking.status === "completed"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}