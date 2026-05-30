import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  CalendarDays,
  CheckCircle2,
  Clock,
  DollarSign,
  Loader2,
  MapPin,
  Sparkles,
  Star,
  SlidersHorizontal,
  Wand2,
} from 'lucide-react';
import { recommendationsAPI } from '../api';
import { useAuth } from '../context/AuthContext';

const travelTypes = [
  'Beach',
  'Cultural',
  'Adventure',
  'Romantic',
  'Religious',
  'Medical',
  'City Tour',
  'Luxury',
  'Heritage',
];

const countries = [
  'Thailand',
  'France',
  'Indonesia',
  'Turkey',
  'Egypt',
  'Switzerland',
  'Maldives',
  'Malaysia',
  'UAE',
  'Saudi Arabia',
  'Germany',
  'Jordan',
];

const countryImages = {
  Thailand: '/images/bankok.avif',
  France: '/images/paris.jpg',
  Indonesia: '/images/baliiii.jpg',
  Turkey: '/images/istanbul.jpg',
  Egypt: '/images/eqyptt.jpg',
  Switzerland: '/images/swiss.jpg',
  Maldives: '/images/maldives.jpg',
  Malaysia: '/images/KualaLumpur.jpg.jpg',
  UAE: '/images/dubai.jpg',
  'Saudi Arabia': '/images/umrah.jpg.png',
  Germany: '/images/german.jpg',
  Jordan: '/images/jordan.jpg.jpg',
};

const getImage = (trip) => trip?.image || countryImages[trip?.country] || '/images/hero.png';
const getFallbackImage = (trip) => countryImages[trip?.country] || '/images/hero.png';

export const AIRecommendations = () => {
  const { isLoggedIn } = useAuth();
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [meta, setMeta] = useState(null);
  const [showTuning, setShowTuning] = useState(false);
  const [filters, setFilters] = useState({
    budget: '',
    travel_type: '',
    country: '',
    max_duration: '',
    interests: '',
    min_rating: '',
  });

  const topScore = useMemo(
    () => recommendations.reduce((best, item) => Math.max(best, item.score || 0), 0),
    [recommendations]
  );

  const fetchAIRecommendations = async () => {
    if (!isLoggedIn) {
      setError('Please login to get recommendations');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const payload = Object.fromEntries(
        Object.entries(filters).filter(([, value]) => value !== '' && value !== null)
      );
      const data = await recommendationsAPI.getPersonalized(payload);

      setRecommendations(data.recommendations || []);
      setMeta({
        source: data.source,
        totalTripsAnalyzed: data.totalTripsAnalyzed,
        filtersMatched: data.filtersMatched,
        mode: data.userProfile?.mode,
        basedOnTrips: data.userProfile?.basedOnTrips || [],
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-8">
      <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-6">
          <div>
            <div className="flex items-center gap-2 text-green-700 text-sm font-semibold mb-2">
              <Brain className="w-4 h-4" />
              Smart Recommendation System
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Find the trips that fit you best</h2>
            <p className="text-sm text-gray-500 mt-2 max-w-2xl">
              No form is required. The system learns from your bookings and reviews, then ranks
              trips that match your travel pattern. You can fine-tune it only when you want.
            </p>
          </div>

          {meta && (
            <div className="grid grid-cols-3 gap-3 min-w-full sm:min-w-[360px]">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Best score</p>
                <p className="text-xl font-bold text-green-700">{topScore}%</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Analyzed</p>
                <p className="text-xl font-bold text-gray-900">{meta.totalTripsAnalyzed}</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Mode</p>
                <p className="text-sm font-bold text-gray-900 capitalize">
                  {meta.mode === 'history-based' ? 'History' : 'Popular'}
                </p>
              </div>
            </div>
          )}
        </div>

        {meta?.basedOnTrips?.length > 0 && (
          <div className="mb-5 rounded-xl bg-green-50 border border-green-100 p-4">
            <p className="text-xs font-semibold text-green-800 uppercase tracking-wide mb-2">
              Based on your recent activity
            </p>
            <div className="flex flex-wrap gap-2">
              {meta.basedOnTrips.map((trip) => (
                <span
                  key={trip.id}
                  className="rounded-full bg-white border border-green-100 px-3 py-1 text-xs text-green-900"
                >
                  {trip.title}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={fetchAIRecommendations}
            disabled={loading}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-xl disabled:opacity-60 transition-all"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
            {loading ? 'Building recommendations...' : 'Recommend For Me'}
          </button>

          <button
            type="button"
            onClick={() => setShowTuning((open) => !open)}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-gray-200 bg-white text-gray-700 font-semibold py-3 px-5 rounded-xl hover:bg-gray-50 transition-all"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Optional Tuning
          </button>
        </div>

        {showTuning && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5 pt-5 border-t border-gray-100">
            <label className="block">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                Budget
              </span>
              <input
                type="number"
                name="budget"
                value={filters.budget}
                onChange={handleFilterChange}
                min="100"
                step="100"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Optional max budget"
              />
            </label>

            <label className="block">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                Travel Type
              </span>
              <select
                name="travel_type"
                value={filters.travel_type}
                onChange={handleFilterChange}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Infer from my history</option>
                {travelTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                Country
              </span>
              <select
                name="country"
                value={filters.country}
                onChange={handleFilterChange}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Infer from my history</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                Max Duration
              </span>
              <input
                type="number"
                name="max_duration"
                value={filters.max_duration}
                onChange={handleFilterChange}
                min="1"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Optional max days"
              />
            </label>

            <label className="block">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                Interests
              </span>
              <input
                type="text"
                name="interests"
                value={filters.interests}
                onChange={handleFilterChange}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Optional, e.g. beaches, culture"
              />
            </label>

            <label className="block">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                Minimum Rating
              </span>
              <select
                name="min_rating"
                value={filters.min_rating}
                onChange={handleFilterChange}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Any rating</option>
                {[3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}+ stars
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}
      </section>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
          {error}
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center py-16 text-gray-500">
          <Loader2 className="w-10 h-10 animate-spin text-green-600 mb-3" />
          <p className="text-sm">Analyzing trips and ranking the best matches...</p>
        </div>
      )}

      {!loading && recommendations.length > 0 && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {recommendations.map((rec) => (
            <article
              key={rec.trip?.id || rec.tripId}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative">
                <img
                  src={getImage(rec.trip)}
                  alt={rec.trip?.title || 'Recommended trip'}
                  onError={(event) => {
                    const fallback = getFallbackImage(rec.trip);
                    if (event.currentTarget.src.endsWith(fallback)) {
                      event.currentTarget.src = '/images/hero.png';
                      return;
                    }
                    event.currentTarget.src = fallback;
                  }}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/95 text-green-700 rounded-full px-3 py-1 text-xs font-bold shadow-sm">
                  {rec.score || 0}% match
                </div>
                <div className="absolute top-3 right-3 bg-gray-900/80 text-white rounded-full px-3 py-1 text-xs font-semibold">
                  {rec.matchLabel}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {rec.trip?.title || 'Recommended Trip'}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-2">
                      {rec.trip?.country && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-green-600" />
                          {rec.trip.country}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-4 h-4 text-green-600" />
                        {rec.trip?.duration} days
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        {rec.trip?.rating || 0}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">From</p>
                    <p className="text-xl font-bold text-green-700">
                      ${Number(rec.trip?.price || 0).toLocaleString()}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">{rec.reason}</p>

                {(rec.basedOn?.length > 0 || rec.matchFactors?.length > 0) && (
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 mb-4">
                    <p className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3">
                      Why recommended?
                    </p>

                    {rec.basedOn?.length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Based on</p>
                        <div className="flex flex-wrap gap-2">
                          {rec.basedOn.slice(0, 2).map((trip) => (
                            <span
                              key={trip.id}
                              className="rounded-full bg-white border border-gray-200 px-3 py-1 text-xs text-gray-700"
                            >
                              {trip.title}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {rec.matchFactors?.length > 0 && (
                      <div className="space-y-2">
                        {rec.matchFactors.slice(0, 4).map((factor) => (
                          <div key={`${factor.label}-${factor.detail}`} className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                            <p className="text-xs text-gray-600">
                              <span className="font-semibold text-gray-800">{factor.label}:</span>{' '}
                              {factor.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="rounded-xl bg-green-50 border border-green-100 p-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-green-800 mb-1">
                      <CalendarDays className="w-4 h-4" />
                      Best time to book
                    </div>
                    <p className="text-xs text-green-900">{rec.bestTimeToBook}</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-800 mb-1">
                      <Sparkles className="w-4 h-4 text-green-600" />
                      Traveler tip
                    </div>
                    <p className="text-xs text-gray-600">{rec.travelerTip}</p>
                  </div>
                </div>

                {rec.highlights?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {rec.highlights.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
                      >
                        <Sparkles className="w-3 h-3 text-green-600" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-gray-100">
                  <Link
                    to={`/trips/${rec.trip?.id}`}
                    className="flex-1 text-center py-2.5 text-sm font-semibold text-green-700 border border-green-600 rounded-xl hover:bg-green-50 transition-all"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/booking/${rec.trip?.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all"
                  >
                    <DollarSign className="w-4 h-4" />
                    Book Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      {!loading && recommendations.length === 0 && !error && (
        <div className="text-center py-16 bg-white border border-dashed border-gray-200 rounded-2xl">
          <Brain className="w-10 h-10 text-green-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-1">Your recommendation board is ready</h3>
          <p className="text-sm text-gray-500">
            Click Recommend For Me and the system will use your bookings and reviews automatically.
          </p>
        </div>
      )}
    </div>
  );
};

export default AIRecommendations;
