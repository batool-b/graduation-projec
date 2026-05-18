import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { tripsAPI } from "../api";
import { TripCard } from "../components/TripCard";

const COUNTRIES = {
  1: "Thailand", 2: "France", 3: "Indonesia", 4: "Turkey",
  5: "Egypt", 6: "Switzerland", 7: "Maldives", 8: "Malaysia",
  9: "UAE", 10: "Saudi Arabia", 11: "Germany", 12: "Jordan"
};

const TRAVEL_TYPES = {
  1: "Beach", 2: "Cultural", 3: "Adventure", 4: "Romantic",
  5: "Religious", 6: "Medical", 7: "City Tour", 8: "Luxury",
  9: "Heritage"
};

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
  const countryName = t.countries?.cname || COUNTRIES[t.countries_id] || "";
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
    country: countryName || "N/A",
    travelType: TRAVEL_TYPES[t.travel_types_id] || "N/A",
    availableDates: t.trip_dates?.map((d) => d.available_date?.slice(0, 10)) || [],
    includes: [...new Set(t.includes?.map((i) => i.hotels?.hotel_name).filter(Boolean))] || [],
    hotel: t.includes?.[0]?.hotels
      ? { name: t.includes[0].hotels.hotel_name, stars: t.includes[0].hotels.stars }
      : null,
    flight: t.uses?.[0]?.flights
      ? { airline: t.uses[0].flights.airline, duration: `${t.uses[0].flights.duration} hrs` }
      : null,
  };
}

export function Trips() {
  const [searchParams] = useSearchParams();

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [countries, setCountries] = useState([]);
  const [travelTypes, setTravelTypes] = useState([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    country: searchParams.get("destination") || "",
    travelType: searchParams.get("type") || "",
    maxPrice: 5000,
    date: searchParams.get("date") || "",
  });
  const [sortBy, setSortBy] = useState("popularity");

  const fetchTrips = async () => {
    setLoading(true);
    setError("");
    try {
      const params = {};
      if (filters.maxPrice < 5000) params.price_max = filters.maxPrice;
      if (filters.date) params.date = filters.date;

      const data = await tripsAPI.getAll(params);
      const normalized = data.map(normalizeTrip);
      setTrips(normalized);
      setCountries([...new Set(normalized.map((t) => t.country).filter((c) => c !== "N/A"))]);
      setTravelTypes([...new Set(normalized.map((t) => t.travelType).filter((ty) => ty !== "N/A"))]);
    } catch (err) {
      setError("Failed to load trips. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, [filters.date, filters.maxPrice]);

  const filtered = trips
    .filter((t) => {
      if (filters.country && !t.country.toLowerCase().includes(filters.country.toLowerCase())) return false;
      if (filters.travelType && t.travelType !== filters.travelType) return false;
      if (t.price > filters.maxPrice) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return b.reviewCount - a.reviewCount;
    });

  const clearFilters = () => {
    setFilters({ country: "", travelType: "", maxPrice: 5000, date: "" });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-green-700 to-green-600 py-14 px-4 text-white text-center">
          <h1 className="text-4xl font-bold mb-2">Explore Our Trips</h1>
          <p className="text-green-100">Loading adventures for you...</p>
        </div>
        <div className="flex justify-center items-center py-24">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-sm border p-10 max-w-sm w-full">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Something went wrong</h2>
          <p className="text-gray-500 text-sm mb-5">{error}</p>
          <button
            onClick={() => { setError(""); fetchTrips(); }}
            className="bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-green-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-700 to-green-600 py-14 px-4 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Explore Our Trips</h1>
        <p className="text-green-100">Discover {trips.length}+ handpicked travel experiences</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-green-400 transition-all shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <span className="text-gray-500 text-sm">{filtered.length} trips found</span>
            {(filters.country || filters.travelType || filters.maxPrice < 5000 || filters.date) && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700"
              >
                <X className="w-3 h-3" /> Clear filters
              </button>
            )}
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Sort by Rating</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-6">
          {filtersOpen && (
            <aside className="w-64 shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sticky top-20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Filters</h3>
                  <button onClick={() => setFiltersOpen(false)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="mb-5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Country</label>
                  <select
                    value={filters.country}
                    onChange={(e) => setFilters({ ...filters, country: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    <option value="">All Countries</option>
                    {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div className="mb-5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Travel Type</label>
                  <div className="space-y-2">
                    {travelTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="travelType"
                          value={type}
                          checked={filters.travelType === type}
                          onChange={() => setFilters({ ...filters, travelType: type })}
                          className="accent-green-600"
                        />
                        <span className="text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="travelType"
                        value=""
                        checked={filters.travelType === ""}
                        onChange={() => setFilters({ ...filters, travelType: "" })}
                        className="accent-green-600"
                      />
                      <span className="text-sm text-gray-700">All Types</span>
                    </label>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                    Max Price: <span className="text-green-600">${filters.maxPrice.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min={100}
                    max={5000}
                    step={100}
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                    className="w-full accent-green-600"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>$100</span>
                    <span>$5,000</span>
                  </div>
                </div>

                <div className="mb-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Travel Date</label>
                  <input
                    type="date"
                    value={filters.date}
                    onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <button
                  onClick={clearFilters}
                  className="w-full mt-4 py-2 text-sm text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            </aside>
          )}

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">✈️</div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No trips found</h3>
                <p className="text-gray-400 text-sm">Try adjusting your filters</p>
                <button onClick={clearFilters} className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl text-sm hover:bg-green-700">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-5 ${filtersOpen ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
                {filtered.map((trip) => (
                  <TripCard key={trip.id} trip={trip} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}