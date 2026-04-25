import React from "react";
import { Link } from "react-router-dom"; // تأكد من المسار حسب إصدار react-router لديك
import { Star, Clock, MapPin } from "lucide-react";

/**
 * مكون تقييم النجوم - StarRating
 */
export function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i <= Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
          }`}
        />
      ))}
      <span className="text-xs text-gray-500 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

/**
 * مكون بطاقة الرحلة - TripCard
 */
export function TripCard({ trip, compact }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={trip.image}
          alt={trip.title}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            compact ? "h-40" : "h-52"
          }`}
        />
        <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {trip.travelType}
        </div>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
          ${trip.price.toLocaleString()}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <MapPin className="w-3.5 h-3.5 text-green-600" />
          <span className="text-xs text-green-600 font-medium">{trip.country}</span>
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-green-700 transition-colors">
          {trip.title}
        </h3>

        {!compact && (
          <p className="text-gray-500 text-xs line-clamp-2 mb-3 leading-relaxed">
            {trip.description}
          </p>
        )}

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
            <Clock className="w-3.5 h-3.5" />
            <span>{trip.duration}</span>
          </div>
          <StarRating rating={trip.rating} />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            to={`/trips/${trip.id}`}
            className="flex-1 text-center py-2 text-sm font-medium text-green-700 border border-green-600 rounded-lg hover:bg-green-50 transition-all"
          >
            View Details
          </Link>
          <Link
            to={`/booking/${trip.id}`}
            className="flex-1 text-center py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}