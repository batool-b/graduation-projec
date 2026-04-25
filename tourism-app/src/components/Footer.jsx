import { Link } from "react-router-dom";
import { Plane, Mail, Phone, Share2, Globe, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        
        {/* الشركة */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <Plane className="text-green-500 w-6 h-6" />
            <span>FarAway</span>
          </div>
          <p className="text-sm leading-relaxed">
            Exploring the world since 2015.
          </p>
        </div>

        {/* روابط */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-green-500 transition">Home</Link></li>
            <li><Link to="/trips" className="hover:text-green-500 transition">Trips</Link></li>
          </ul>
        </div>

        {/* اتصال */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> faraway@travel.com</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +962781232747</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Social</h4>
          <div className="flex gap-4">
            <Share2 className="w-5 h-5 cursor-pointer hover:text-green-500" />
            <Globe className="w-5 h-5 cursor-pointer hover:text-green-500" />
            <MessageSquare className="w-5 h-5 cursor-pointer hover:text-green-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}