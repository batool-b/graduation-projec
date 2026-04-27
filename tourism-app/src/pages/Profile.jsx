import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Phone, Edit, Key, Plane, LogOut, Calendar, ChevronRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { trips } from "../data/mockData";
import { TripCard } from "../components/TripCard";
import { useEffect } from "react";

export function Profile() {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  // الأدمن ما له شغل هنا، نحوله للداشبورد
  useEffect(() => {
    if (isLoggedIn && user?.role === "admin") {
      navigate("/admin", { replace: true });
    }
  }, [isLoggedIn, user, navigate]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
        <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-sm w-full">
          <div className="text-5xl mb-4">🔒</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Please Login</h2>
          <p className="text-gray-500 text-sm mb-6">You need to be logged in to view your profile</p>
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

  const recommended = trips ? trips.slice(0, 3) : [];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-linear-to-r from-green-700 to-green-600 py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-white">
          <img
            src={user?.photo || "https://via.placeholder.com/150"}
            alt={user?.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white/50 shadow-xl"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold">{user?.name}</h1>
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
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-3">Account Settings</h3>
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
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-gray-900">Personal Information</h2>
                <Link to="/edit-profile" className="text-sm text-green-600 flex items-center gap-1 hover:underline">
                  <Edit className="w-3.5 h-3.5" /> Edit
                </Link>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: User, label: "Full Name", value: user?.name },
                  { icon: Mail, label: "Email Address", value: user?.email },
                  { icon: Phone, label: "Phone Number", value: user?.phone || "Not provided" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0">
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
                <Link to="/my-bookings" className="text-sm text-green-600 font-medium flex items-center gap-1 hover:underline">
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-3">
                {[
                  { id: "BK-101", trip: "Magical Maldives Escape", date: "May 5, 2026", status: "Confirmed" },
                  { id: "BK-102", trip: "Bali Spiritual Retreat", date: "Jun 20, 2026", status: "Pending" },
                ].map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Plane className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{booking.trip}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                          <Calendar className="w-3 h-3" /> {booking.date}
                        </p>
                      </div>
                    </div>
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-lg ${
                      booking.status === "Confirmed" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Trips */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recommended For You</h2>
            <Link to="/trips" className="text-green-600 font-semibold hover:underline">Explore More</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recommended.map((trip) => (
              <TripCard key={trip.id} trip={trip} compact={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}