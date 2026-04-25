import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // تأكد من المسار الصحيح
import { Plane, Calendar, MapPin, DollarSign, Eye, X, ChevronRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const statusConfig = {
  Confirmed: { color: "bg-green-100 text-green-700 border-green-200", dot: "bg-green-500" },
  Pending: { color: "bg-amber-100 text-amber-700 border-amber-200", dot: "bg-amber-500" },
  Cancelled: { color: "bg-red-100 text-red-700 border-red-200", dot: "bg-red-500" },
  Completed: { color: "bg-blue-100 text-blue-700 border-blue-200", dot: "bg-blue-500" },
};

export function MyBookings() {
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  
  const [bookings, setBookings] = useState([]); // تبدأ بمصفوفة فارغة
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  // جلب الحجوزات من الداتابيس عند تحميل الصفحة
  useEffect(() => {
    if (isLoggedIn && user) {
      // هنا نقوم باستدعاء الـ API الخاص بالحجوزات
      // fetch(`/api/bookings?userId=${user.id}`)
      
      // للمثال الحالي، سنحاكي جلب البيانات مع تأخير بسيط
      setLoading(true);
      setTimeout(() => {
        // افترض أن هذه البيانات قادمة من الداتابيس بناءً على user.id
        // const data = await response.json();
        // setBookings(data);
        
        // سأضع بيانات فارغة مؤقتاً لتعرف أنها مرتبطة بالـ state
        setLoading(false);
      }, 800);
    }
  }, [isLoggedIn, user]);

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

  const handleCancel = async (id) => {
    // 1. استدعاء السيرفر لحذف أو إلغاء الحجز
    // await fetch(`/api/bookings/${id}/cancel`, { method: 'POST' });
    
    // 2. تحديث الواجهة فوراً
    setBookings(bookings.map((b) => b.id === id ? { ...b, status: "Cancelled" } : b));
  };

  const filtered = filter === "All" ? bookings : bookings.filter((b) => b.status === filter);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-linear-to-r from-green-700 to-green-600 py-14 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-1">My Bookings</h1>
          <p className="text-green-100">Welcome back, {user?.name}. Here are your travel plans.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* أزرار التصفية */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {["All", "Confirmed", "Pending", "Completed", "Cancelled"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === status
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-green-400"
              }`}
            >
              {status}
              <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${filter === status ? "bg-white/20" : "bg-gray-100"}`}>
                {status === "All" ? bookings.length : bookings.filter((b) => b.status === status).length}
              </span>
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-500">Loading your bookings...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="text-5xl mb-4">📋</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No bookings found</h3>
            <p className="text-gray-400 text-sm mb-5">You haven't made any {filter !== "All" ? filter.toLowerCase() : ""} trips yet</p>
            <Link to="/trips" className="bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-green-700">
              Find Your Next Adventure
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((booking) => {
              const config = statusConfig[booking.status] || statusConfig.Pending;
              return (
                <div key={booking.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all">
                  <div className="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{booking.tripTitle}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">Booking ID: {booking.id}</p>
                      </div>
                      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${config.color} w-fit`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
                        {booking.status}
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
                      {(booking.status === "Confirmed" || booking.status === "Pending") && (
                        <button
                          onClick={() => handleCancel(booking.id)}
                          className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-red-600 border border-red-100 rounded-xl hover:bg-red-50 transition-all"
                        >
                          <X className="w-4 h-4" /> Cancel Booking
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