import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, Users, MessageSquare, ArrowRight, MapPin, Clock } from "lucide-react";
import { trips } from "../data/mockData";
import { useAuth } from "../context/AuthContext";

export function Booking() {
  const { id } = useParams();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const trip = trips.find((t) => t.id === Number(id));
  
  const [form, setForm] = useState({ travelers: 1, date: "", requests: "" });
  const [errors, setErrors] = useState({});

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Trip not found. <Link to="/trips" className="text-green-600">Browse Trips</Link></p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-lg p-10 max-w-sm w-full">
          <div className="text-4xl mb-4">🔒</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Login Required</h2>
          <p className="text-gray-500 text-sm mb-5">Please login to book this trip</p>
          <Link to="/login" className="block w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 text-center">
            Login to Continue
          </Link>
        </div>
      </div>
    );
  }

  const totalPrice = trip.price * form.travelers;

  const validate = () => {
    const newErrors = {};
    if (!form.date) newErrors.date = "Please select a travel date";
    if (form.travelers < 1) newErrors.travelers = "At least 1 traveler required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { 
      setErrors(validationErrors); 
      return; 
    }
    navigate(`/payment/${trip.id}?travelers=${form.travelers}&date=${form.date}&total=${totalPrice}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-linear-to-r from-green-700 to-green-600 py-12 px-4 text-white">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-green-200 mb-4">
            <Link to="/trips" className="hover:text-white">Trips</Link>
            <span className="mx-2">/</span>
            <Link to={`/trips/${trip.id}`} className="hover:text-white">{trip.title}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Book Now</span>
          </nav>
          <h1 className="text-3xl font-bold">Complete Your Booking</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Booking Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-600" /> Number of Travelers
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, travelers: Math.max(1, form.travelers - 1) })}
                      className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700"
                    > − </button>
                    <span className="w-12 text-center text-xl font-bold text-gray-900">{form.travelers}</span>
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, travelers: Math.min(20, form.travelers + 1) })}
                      className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700"
                    > + </button>
                    <span className="text-sm text-gray-500 ml-2">max 20 travelers</span>
                  </div>
                  {errors.travelers && <p className="text-red-500 text-xs mt-1">{errors.travelers}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-600" /> Travel Date
                  </label>
                  <select
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 ${errors.date ? "border-red-400" : "border-gray-200"}`}
                  >
                    <option value="">Select a date</option>
                    {trip.availableDates.map((date) => (
                      <option key={date} value={date}>{date}</option>
                    ))}
                  </select>
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-green-600" /> Special Requests
                    <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    value={form.requests}
                    onChange={(e) => setForm({ ...form, requests: e.target.value })}
                    placeholder="Any dietary requirements, accessibility needs, or special preferences..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition-all text-base shadow-lg shadow-green-200"
                >
                  Continue to Payment <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-20">
              <h3 className="font-bold text-gray-900 mb-4">Trip Summary</h3>
              <img src={trip.image} alt={trip.title} className="w-full h-36 object-cover rounded-xl mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">{trip.title}</h4>
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-3.5 h-3.5 text-green-600" /> {trip.country}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-3.5 h-3.5 text-green-600" /> {trip.duration}
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Price per person</span>
                  <span className="font-medium">${trip.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Travelers</span>
                  <span className="font-medium">× {form.travelers}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t border-gray-100 pt-3 mt-3">
                  <span>Total</span>
                  <span className="text-green-600">${totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}