import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle, Download, Plane, Calendar, Users, DollarSign, Home } from "lucide-react";
import { trips } from "../data/mockData";

export function BookingSuccess() {
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get("bookingId") || `BK-${Date.now()}`;
  const tripId = Number(searchParams.get("tripId"));
  const travelers = Number(searchParams.get("travelers") || 1);
  const total = Number(searchParams.get("total") || 0);
  const trip = trips.find((t) => t.id === tripId);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-14 h-14 text-green-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Booking Confirmed! 🎉</h1>
          <p className="text-gray-500">
            Congratulations! Your trip has been successfully booked. Check your email for confirmation.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-5 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-xs mb-0.5">Booking Reference</p>
                <p className="text-2xl font-bold font-mono tracking-wider">{bookingId}</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-3">
                <Plane className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          {/* Trip Info */}
          {trip && (
            <div className="flex items-center gap-4 p-5 border-b border-gray-100">
              <img src={trip.image} alt={trip.title} className="w-20 h-16 rounded-xl object-cover" />
              <div>
                <h3 className="font-bold text-gray-900">{trip.title}</h3>
                <p className="text-sm text-gray-500">{trip.country} • {trip.duration}</p>
              </div>
            </div>
          )}

          {/* Details */}
          <div className="p-5 space-y-3">
            {[
              { icon: Calendar, label: "Travel Type", value: trip?.travelType || "N/A" },
              { icon: Users, label: "Travelers", value: `${travelers} person${travelers > 1 ? "s" : ""}` },
              { icon: DollarSign, label: "Total Paid", value: `$${total.toLocaleString()}`, highlight: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-500">{item.label}</span>
                </div>
                <span className={`text-sm font-semibold ${item.highlight ? "text-green-600" : "text-gray-900"}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Status Badge */}
          <div className="mx-5 mb-5">
            <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-green-700 text-sm font-medium">Booking Confirmed — Confirmation email sent</p>
            </div>
          </div>

          {/* Actions */}
          <div className="px-5 pb-6 space-y-3">
            <Link
              to="/my-bookings"
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-bold transition-all"
            >
              <Plane className="w-4 h-4" /> View My Bookings
            </Link>
            <button className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition-all">
              <Download className="w-4 h-4" /> Download Confirmation
            </button>
            <Link
              to="/"
              className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 py-2 text-sm"
            >
              <Home className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}