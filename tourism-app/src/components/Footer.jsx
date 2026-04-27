import { Link } from "react-router-dom";
import { Plane, Mail, Phone, Heart, Star, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 font-poppins">
      
      {/* CTA Strip */}
      <div className="bg-green-700 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold">Ready for your next adventure?</h3>
            <p className="text-green-200 text-sm mt-1">Discover handpicked trips tailored just for you.</p>
          </div>
          <Link
            to="/trips"
            className="flex items-center gap-2 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-all shadow-lg shrink-0"
          >
            Explore Trips <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="space-y-5">
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <div className="bg-green-600 rounded-xl p-1.5">
              <Plane className="w-5 h-5 text-white" />
            </div>
            FarAway
          </Link>
          <p className="text-sm leading-relaxed text-gray-500">
            Crafting unforgettable journeys since 2015. From hidden gems to iconic destinations — we take you there.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
              <Heart className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
              <Star className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Explore</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "All Trips", path: "/trips" },
              { label: "About Us", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="hover:text-green-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Account</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Login", path: "/login" },
              { label: "Register", path: "/register" },
              { label: "My Profile", path: "/profile" },
              { label: "My Bookings", path: "/my-bookings" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="hover:text-green-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
              <span>faraway@travel.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
              <span>+962 781 232 747</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
              <span>Irbid, Jordan</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} FarAway. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}