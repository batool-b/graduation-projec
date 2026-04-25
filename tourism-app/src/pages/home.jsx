import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Calendar,
  DollarSign,
  ChevronRight,
  Plane,
  Shield,
  HeadphonesIcon,
  Award,
} from "lucide-react";

// استدعاء البيانات والمكونات
import { trips, destinations, testimonials } from "../data/mockData";
import { TripCard, StarRating } from "../components/TripCard";

const HERO_IMAGE = "/images/hero.png";

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    destination: "",
    travelType: "",
    priceRange: "",
    date: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search.destination) params.set("destination", search.destination);
    if (search.travelType) params.set("type", search.travelType);
    if (search.priceRange) params.set("price", search.priceRange);
    if (search.date) params.set("date", search.date);
    navigate(`/trips?${params.toString()}`);
  };

  return (
    <div className="flex flex-col text-left">
      {/* ─── 1. قسم الـ Hero ─── */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
<div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/70" />        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 text-sm font-medium border border-white/10">
            <Plane className="w-4 h-4 text-green-400" />
            <span>Trusted by 50,000+ travelers worldwide</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-5 leading-tight tracking-tight">
            Explore the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-300">
                   World
           </span>{" "}
            With Us
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Find the best travel experiences around the globe. Handpicked destinations, expert guides, and memories that last a lifetime.
          </p>

          {/* نموذج البحث الذكي */}
          <form onSubmit={handleSearch} className="bg-white rounded-2xl p-4 shadow-2xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                <input
                  type="text"
                  placeholder="Where to?"
                  value={search.destination}
                  onChange={(e) => setSearch({ ...search, destination: e.target.value })}
                  className="w-full pl-10 pr-3 py-3.5 text-gray-800 bg-gray-50 rounded-xl text-sm border border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="relative">
                <Plane className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                <select
                  value={search.travelType}
                  onChange={(e) => setSearch({ ...search, travelType: e.target.value })}
                  className="w-full pl-10 pr-3 py-3.5 text-gray-800 bg-gray-50 rounded-xl text-sm border border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
                >
                  <option value="">Travel Type</option>
                  <option value="Beach">Beach</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                <select
                  value={search.priceRange}
                  onChange={(e) => setSearch({ ...search, priceRange: e.target.value })}
                  className="w-full pl-10 pr-3 py-3.5 text-gray-800 bg-gray-50 rounded-xl text-sm border border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
                >
                  <option value="">Price Range</option>
                  <option value="0-1000">Under $1,000</option>
                  <option value="1000-2000">$1,000 – $2,000</option>
                  <option value="2000-3000">$2,000 – $3,000</option>
                  <option value="3000+">$3,000+</option>
                </select>
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                <input
                  type="date"
                  value={search.date}
                  onChange={(e) => setSearch({ ...search, date: e.target.value })}
                  className="w-full pl-10 pr-3 py-3.5 text-gray-800 bg-gray-50 rounded-xl text-sm border border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-green-200"
            >
              <Search className="w-5 h-5" />
              Find My Dream Trip
            </button>
          </form>
        </div>
      </section>

      {/* ─── 2. قسم الإحصائيات السريعة ─── */}
      <section className="bg-green-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Happy Travelers", value: "5000+" },
            { label: "Global Destinations", value: "120+" },
            { label: "Certified Guides", value: "350+" },
            { label: "Years Experience", value: "10+" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
              <div className="text-green-200 text-xs uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. قسم الرحلات المقترحة ─── */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-green-600 text-sm font-bold uppercase tracking-widest">Our Top Picks</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Recommended Journeys</h2>
          </div>
          <Link
            to="/trips"
            className="inline-flex items-center gap-2 text-green-700 font-bold hover:gap-3 transition-all"
          >
            View All Adventures <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips && trips.slice(0, 6).map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </section>

      {/* ─── 4. قسم الوجهات الشهيرة ─── */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Handpicked locations that offer unique experiences, stunning landscapes, and rich cultures.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {destinations && destinations.map((dest) => (
              <Link
                key={dest.id}
                to={`/trips?destination=${dest.country}`}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />                <div className="absolute bottom-0 p-5">
                  <h3 className="text-white font-bold text-xl">{dest.country}</h3>
                  <p className="text-green-400 text-sm">{dest.tripCount} available trips</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. قسم لماذا تختارنا ─── */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why Travel with FarAway?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: "Safe & Secure", desc: "Premium travel insurance and 24/7 on-ground support for your peace of mind.", color: "bg-green-100 text-green-600" },
            { icon: DollarSign, title: "Best Value", desc: "No hidden fees. We provide high-quality experiences at the most competitive rates.", color: "bg-blue-100 text-blue-600" },
            { icon: HeadphonesIcon, title: "Personalized Support", desc: "Our travel experts are just a call away to customize your perfect itinerary.", color: "bg-purple-100 text-purple-600" },
            { icon: Award, title: "Expert Guides", desc: "Learn from the best. Our guides are local experts with years of storytelling experience.", color: "bg-amber-100 text-amber-600" },
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. قسم آراء العملاء ─── */}
      <section className="py-20 bg-green-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Stories from our Travelers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials && testimonials.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.photo} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-4 ring-green-50" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-green-600 font-medium uppercase tracking-tighter">{t.trip}</p>
                  </div>
                </div>
                <StarRating rating={t.rating} />
                <p className="text-gray-600 mt-4 italic text-sm leading-relaxed">"{t.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. قسم الـ CTA النهائي ─── */}
      <section className="py-24 bg-green-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Write Your Next Story?</h2>
          <p className="text-green-100 mb-10 text-lg opacity-90">Join 5000+ happy explorers. Your dream destination is just a click away.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/trips" className="bg-white text-green-700 px-10 py-4 rounded-2xl font-bold hover:bg-green-50 transition-all shadow-2xl">
              Start Exploring
            </Link>
            <Link to="/contact" className="border-2 border-white/50 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}