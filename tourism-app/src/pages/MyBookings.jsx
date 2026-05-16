import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plane, Calendar, MapPin, DollarSign, Eye, X, ChevronRight } from "lucide-react";
import { bookingsAPI } from "../api";
import { useAuth } from "../context/AuthContext";

const statusConfig = {
  confirmed: { color: "bg-green-100 text-green-700 border-green-200", dot: "bg-green-500", label: "Confirmed" },
  pending:   { color: "bg-amber-100 text-amber-700 border-amber-200", dot: "bg-amber-500", label: "Pending" },
  cancelled: { color: "bg-red-100 text-red-700 border-red-200",       dot: "bg-red-500",   label: "Cancelled" },
  completed: { color: "bg-blue-100 text-blue-700 border-blue-200",    dot: "bg-blue-500",  label: "Completed" },
};

// ─── تحويل بيانات الباك للشكل اللي يفهمه الـ UI ─────────────────────────────
function normalizeBooking(b) {
  return {
    id: b.id,
    tripId: b.trips?.id,
    tripTitle: b.trips?.title || "Unknown Trip",
    destination: b.trips?.countries?.cname || "N/A",
    image: b.trips?.trip_images?.[0]?.image_url || "/images/hero.png",
    travelDate: b.travel_date?.slice(0, 10) || "—",
    travelers: b.travelers_count,
    totalPrice: parseFloat(b.total_price),
    status: b.status?.toLowerCase() || "pending",
  };
}

export function MyBookings() {
  const { user, isLoggedIn } = useAuth();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [cancellingId, setCancellingId] = useState(null);

  // ─── جلب الحجوزات من الباك ───────────────────────────────────────────────
  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchBookings = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await bookingsAPI.getMyBookings();
        setBookings(data.map(normalizeBooking));
      } catch (err) {
        setError("Failed to load bookings. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, [isLoggedIn]);

  // ─── إلغاء حجز ───────────────────────────────────────────────────────────
  const handleCancel = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;
    setCancellingId(id);
    try {
      await bookingsAPI.cancel(id);
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: "cancelled" } : b))
      );
    } catch (err) {
      alert(err.message || "Failed to cancel booking.");
    } finally {
      setCancellingId(null);
    }
  };

  // ─── Login required ───────────────────────────────────────────────────────
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center bg-white p-10 rounded-3xl shadow-sm border">
          <div className="text-5xl mb-4">✈️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Login Required</h2>
          <p className="text-gray-500 text-sm mb-5">Please login to view your personal bookings</p>
          <Link to="/login" className="bg-green-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-green-700 transition-all">
            Login Now
          </Link>
        </div>
      </div>
    );
  }

  const filtered =
    filter === "all" ? bookings : bookings.filter((b) => b.status === filter);

  // ─── UI ───────────────────────────────────────────────────────────────────
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-linear-to-r from-green-700 to-green-600 py-14 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-1">My Bookings</h1>
          <p className="text-green-100">
            Welcome back, {user?.first_name || user?.name}. Here are your travel plans.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {["all", "confirmed", "pending", "completed", "cancelled"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all ${
                filter === status
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-green-400"
              }`}
            >
              {status}
              <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${filter === status ? "bg-white/20" : "bg-gray-100"}`}>
                {status === "all"
                  ? bookings.length
                  : bookings.filter((b) => b.status === status).length}
              </span>
            </button>
          ))}
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-red-600 text-sm mb-6">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-500">Loading your bookings...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="text-5xl mb-4">📋</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No bookings found</h3>
            <p className="text-gray-400 text-sm mb-5">
              You haven't made any {filter !== "all" ? filter : ""} trips yet
            </p>
            <Link to="/trips" className="bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-green-700">
              Find Your Next Adventure
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((booking) => {
              const config = statusConfig[booking.status] || statusConfig.pending;
              const isCancelling = cancellingId === booking.id;
              return (
                <div key={booking.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all">
                  <div className="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{booking.tripTitle}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">Booking ID: #{booking.id}</p>
                      </div>
                      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${config.color} w-fit`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
                        {config.label}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-green-600 shrink-0" />
                        <div>
                          <p className="text-xs text-gray-400">Destination</p>
                          <p className="text-sm font-medium text-gray-800">{booking.destination}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-green-600 shrink-0" />
                        <div>
                          <p className="text-xs text-gray-400">Date</p>
                          <p className="text-sm font-medium text-gray-800">{booking.travelDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Plane className="w-4 h-4 text-green-600 shrink-0" />
                        <div>
                          <p className="text-xs text-gray-400">Travelers</p>
                          <p className="text-sm font-medium text-gray-800">{booking.travelers} Persons</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-600 shrink-0" />
                        <div>
                          <p className="text-xs text-gray-400">Total</p>
                          <p className="text-sm font-bold text-green-600">${booking.totalPrice?.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2 border-t border-gray-50">
                      <Link
                        to={`/trips/${booking.tripId}`}
                        className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-green-700 border border-green-600 rounded-xl hover:bg-green-50 transition-all"
                      >
                        <Eye className="w-4 h-4" /> View Trip
                      </Link>
                      {(booking.status === "confirmed" || booking.status === "pending") && (
                        <button
                          onClick={() => handleCancel(booking.id)}
                          disabled={isCancelling}
                          className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-red-600 border border-red-100 rounded-xl hover:bg-red-50 transition-all disabled:opacity-50"
                        >
                          {isCancelling ? (
                            <div className="w-4 h-4 border-2 border-red-300 border-t-red-600 rounded-full animate-spin" />
                          ) : (
                            <X className="w-4 h-4" />
                          )}
                          {isCancelling ? "Cancelling..." : "Cancel Booking"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link to="/trips" className="inline-flex items-center gap-2 text-green-600 text-sm font-medium hover:underline">
            Explore More Destinations <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
