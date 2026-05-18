import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  MapPin, Clock, Star, Plane, Hotel, Calendar,
  DollarSign, CheckCircle, Send, ArrowRight
} from "lucide-react";
import { tripsAPI, reviewsAPI } from "../api";
import { TripCard, StarRating } from "../components/TripCard";
import { useAuth } from "../context/AuthContext";

// ─── نفس الـ normalizeTrip من Trips.jsx ───────────────────────────────────────
const COUNTRY_IMAGES = {
  "Thailand":     "/images/bankok.avif",
  "France":       "/images/paris.jpg",
  "Indonesia":    "/images/baliiii.jpg",
  "Turkey":       "/images/istanbul.jpg",
  "Egypt":        "/images/eqyptt.jpg",
  "Switzerland":  "/images/swiss.jpg",
  "Maldives":     "/images/maldives.jpg",
  "Malaysia":     "/images/KualaLumpur.jpg.jpg",
  "UAE":          "/images/dubai.jpg",
  "Saudi Arabia": "/images/umrah.jpg.png",
  "Germany":      "/images/german.jpg",
  "Jordan":       "/images/jordan.jpg.jpg",
};

function normalizeTrip(t) {
  const countryName = t.countries?.cname || "";
  const firstImage = COUNTRY_IMAGES[countryName] || "/images/hero.png";
  return {
    id: t.id,
    title: t.title,
    description: t.description,
    price: parseFloat(t.price),
    duration: t.duration ? `${t.duration} Days` : "N/A",
    rating: t.rating || 0,
    reviewCount: t.review?.length || 0,
    image: firstImage,
    images: [firstImage],
    country: t.countries?.cname || "N/A",
    travelType: t.travel_types?.tname || "N/A",
    availableDates: t.trip_dates?.map((d) => d.available_date?.slice(0, 10)) || [],
    includes: t.includes?.map((i) => i.hotels?.hotel_name).filter(Boolean) || [],
    hotel: t.includes?.[0]?.hotels
      ? { name: t.includes[0].hotels.hotel_name, stars: t.includes[0].hotels.stars, location: "" }
      : null,
    flight: t.uses?.[0]?.flights
      ? { airline: t.uses[0].flights.airline, duration: `${t.uses[0].flights.duration} hrs`, departure: "", arrival: "" }
      : null,
    reviews: t.review || [],
  };
}

export function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  // ─── State ──────────────────────────────────────────────────────────────────
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reviewForm, setReviewForm] = useState({ rating: 5, comment: "" });
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const [reviewError, setReviewError] = useState("");

  // ─── جلب الرحلة من الباك ──────────────────────────────────────────────────
  useEffect(() => {
    const fetchTrip = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await tripsAPI.getById(id);
        setTrip(normalizeTrip(data));
      } catch (err) {
        setError("Trip not found or server error.");
      } finally {
        setLoading(false);
      }
    };
    fetchTrip();
  }, [id]);

  // ─── إرسال تقييم ───────────────────────────────────────────────────────────
  const handleReviewSubmit = async () => {
    if (!isLoggedIn) {
      setReviewError("Please login to submit a review.");
      return;
    }
    if (!reviewForm.comment.trim()) {
      setReviewError("Please write a comment.");
      return;
    }
    setReviewSubmitting(true);
    setReviewError("");
    try {
      await reviewsAPI.create({
        trips_id: parseInt(id),
        rating: reviewForm.rating,
        comment: reviewForm.comment,
      });
      setReviewSuccess(true);
      setReviewForm({ rating: 5, comment: "" });
      // إعادة تحميل الرحلة لعرض التقييم الجديد
      const updated = await tripsAPI.getById(id);
      setTrip(normalizeTrip(updated));
      setTimeout(() => setReviewSuccess(false), 3000);
    } catch (err) {
      setReviewError(err.message || "Failed to submit review.");
    } finally {
      setReviewSubmitting(false);
    }
  };

  // ─── Loading ────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Loading trip details...</p>
        </div>
      </div>
    );
  }

  // ─── Error ──────────────────────────────────────────────────────────────────
  if (error || !trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-700 mb-4">Trip not found</p>
          <Link to="/trips" className="bg-green-600 text-white px-6 py-2 rounded-xl">Back to Trips</Link>
        </div>
      </div>
    );
  }

  // ─── UI ─────────────────────────────────────────────────────────────────────
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <Link to="/trips" className="hover:text-green-600">Trips</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{trip.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>

            {/* Trip Info */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">{trip.travelType}</span>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 text-green-600" />
                  {trip.country}
                </div>
                <StarRating rating={trip.rating} />
                <span className="text-sm text-gray-400">({trip.reviewCount} reviews)</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{trip.title}</h1>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <DollarSign className="w-5 h-5 text-green-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-500">Price</p>
                  <p className="font-bold text-gray-900">${trip.price.toLocaleString()}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <Clock className="w-5 h-5 text-green-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="font-bold text-gray-900 text-xs">{trip.duration}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <Plane className="w-5 h-5 text-green-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-500">Type</p>
                  <p className="font-bold text-gray-900">{trip.travelType}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <Calendar className="w-5 h-5 text-green-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-500">Next Date</p>
                  <p className="font-bold text-gray-900 text-xs">
                    {trip.availableDates[0] || "TBD"}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-3">About This Trip</h2>
              <p className="text-gray-600 leading-relaxed">{trip.description}</p>
              {trip.includes.length > 0 && (
                <>
                  <h3 className="font-semibold text-gray-900 mt-5 mb-3">What's Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {trip.includes.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Hotel Info */}
            {trip.hotel && (
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-5 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-green-600" /> Hotel Information
                  </h2>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{trip.hotel.name}</h3>
                  {trip.hotel.stars > 0 && (
                    <div className="flex items-center gap-0.5 mb-2">
                      {Array.from({ length: trip.hotel.stars }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  )}
                  {trip.hotel.location && (
                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-green-600" />
                      {trip.hotel.location}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Flight Info */}
            {trip.flight && (
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Plane className="w-5 h-5 text-green-600" /> Flight Information
                </h2>
                <div className="bg-gray-50 rounded-xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Airline</p>
                      <p className="font-bold text-gray-900">{trip.flight.airline}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Duration</p>
                      <p className="font-bold text-gray-900">{trip.flight.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-5">
                Customer Reviews ({trip.reviews.length})
              </h2>

              {/* قائمة التقييمات */}
              {trip.reviews.length === 0 ? (
                <p className="text-gray-400 text-sm mb-6">No reviews yet. Be the first!</p>
              ) : (
                <div className="space-y-4 mb-6">
                  {trip.reviews.map((r) => (
                    <div key={r.id} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <div>
                          <span className="font-semibold text-gray-900 text-sm">
                            {r.users ? `${r.users.first_name} ${r.users.last_name}` : "Anonymous"}
                          </span>
                          <p className="text-xs text-gray-400">{r.created_at?.slice(0, 10)}</p>
                        </div>
                        <StarRating rating={r.rating} />
                      </div>
                      <p className="text-gray-600 text-sm">{r.comment}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* فورم التقييم */}
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-4">Leave a Review</h3>

                {reviewSuccess && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-4 text-green-700 text-sm font-medium">
                    ✅ Review submitted successfully!
                  </div>
                )}
                {reviewError && (
                  <div className="bg-red-50 border border-red-100 rounded-xl p-3 mb-4 text-red-600 text-sm">
                    {reviewError}
                  </div>
                )}

                <div className="mb-3">
                  <label className="text-xs font-medium text-gray-600 mb-1 block">Your Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <button key={i} onClick={() => setReviewForm({ ...reviewForm, rating: i })}>
                        <Star className={`w-6 h-6 ${i <= reviewForm.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                      </button>
                    ))}
                  </div>
                </div>
                <textarea
                  rows={3}
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                  placeholder="Share your experience..."
                  className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none mb-3"
                />
                <button
                  onClick={handleReviewSubmit}
                  disabled={reviewSubmitting}
                  className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-green-700 transition-all disabled:bg-gray-300"
                >
                  {reviewSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {reviewSubmitting ? "Submitting..." : "Submit Review"}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Booking Card */}
          <div className="space-y-5">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg sticky top-20">
              <div className="text-center mb-5">
                <p className="text-sm text-gray-500">Starting from</p>
                <p className="text-4xl font-extrabold text-green-600">${trip.price.toLocaleString()}</p>
                <p className="text-xs text-gray-400">per person</p>
              </div>
              <div className="space-y-3 mb-5">
                {[
                  { label: "Duration", value: trip.duration },
                  { label: "Country", value: trip.country },
                  { label: "Travel Type", value: trip.travelType },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-500">{item.label}</span>
                    <span className="font-medium text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>

              {trip.availableDates.length > 0 && (
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Available Dates</p>
                  <div className="flex flex-wrap gap-2">
                    {trip.availableDates.map((date) => (
                      <span key={date} className="text-xs bg-green-50 text-green-700 border border-green-200 rounded-lg px-2.5 py-1">
                        {date}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <Link
                to={`/booking/${trip.id}`}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-semibold transition-all"
              >
                Book Now <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => navigate("/trips")}
                className="w-full mt-2 py-3 text-sm text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
              >
                Back to Trips
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}