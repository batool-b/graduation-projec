import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Plane, Menu, X, User, LayoutDashboard, LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  
  const { isLoggedIn, user, logout } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Trips", path: "/trips" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    navigate("/");
  };

  // ✅ FIX: استخدم is_admin بدل role
  const isAdmin = user?.is_admin === true;

  return (
    <nav className="bg-green-700 sticky top-0 z-50 shadow-lg font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="bg-white/20 rounded-full p-1.5">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">FarAway</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-white/20 text-white shadow-inner"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Area */}
          <div className="hidden md:flex items-center gap-2">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-white border border-white/40 rounded-lg hover:bg-white/10 transition-all"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium bg-white text-green-700 rounded-lg hover:bg-green-50 transition-all shadow-sm"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-all rounded-lg px-3 py-1.5 border border-white/10"
                >
                  <img
                    src={user?.photo || "https://ui-avatars.com/api/?name=" + user?.first_name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-white/50"
                  />
                  <span className="text-white text-sm font-medium">{user?.first_name}</span>
                  <ChevronDown className="w-4 h-4 text-white/70" />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
                    <div className="px-4 py-4 bg-gray-50/50 border-b border-gray-100">
                      <p className="text-sm font-bold text-gray-800">{user?.first_name} {user?.last_name}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                    </div>
                    
                    <div className="p-1">
                      {isAdmin ? (
                        // ✅ الأدمن: Dashboard + Profile
                        <>
                          <Link
                            to="/admin"
                            onClick={() => setProfileOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-xl transition-colors"
                          >
                            <LayoutDashboard className="w-4 h-4" /> Dashboard
                          </Link>
                          <Link
                            to="/profile"
                            onClick={() => setProfileOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-xl transition-colors"
                          >
                            <User className="w-4 h-4" /> Profile
                          </Link>
                        </>
                      ) : (
                        // اليوزر العادي: Profile + My Bookings
                        <>
                          <Link
                            to="/profile"
                            onClick={() => setProfileOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-xl transition-colors"
                          >
                            <User className="w-4 h-4" /> Profile
                          </Link>
                          <Link
                            to="/my-bookings"
                            onClick={() => setProfileOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-xl transition-colors"
                          >
                            <Plane className="w-4 h-4" /> My Bookings
                          </Link>
                        </>
                      )}
                      
                      <div className="h-px bg-gray-100 my-1 mx-2" />
                      
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                      >
                        <LogOut className="w-4 h-4" /> Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-800 border-t border-green-600 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive(link.path) ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="pt-4 border-t border-green-700">
            {!isLoggedIn ? (
              <div className="grid grid-cols-2 gap-3">
                <Link to="/login" onClick={() => setMenuOpen(false)} className="text-center py-3 bg-white/10 text-white rounded-xl text-sm font-medium">Login</Link>
                <Link to="/register" onClick={() => setMenuOpen(false)} className="text-center py-3 bg-white text-green-700 rounded-xl text-sm font-medium">Register</Link>
              </div>
            ) : (
              <div className="space-y-1">
                {isAdmin ? (
                  // ✅ الأدمن موبايل: Dashboard + Profile
                  <>
                    <Link to="/admin" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-xl text-sm">
                      <LayoutDashboard className="w-4 h-4" /> Dashboard
                    </Link>
                    <Link to="/profile" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-xl text-sm">
                      <User className="w-4 h-4" /> Profile
                    </Link>
                  </>
                ) : (
                  // اليوزر العادي موبايل
                  <>
                    <Link to="/profile" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-xl text-sm">
                      <User className="w-4 h-4" /> Profile
                    </Link>
                    <Link to="/my-bookings" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-xl text-sm">
                      <Plane className="w-4 h-4" /> My Bookings
                    </Link>
                  </>
                )}
                <button onClick={handleLogout} className="flex items-center gap-3 w-full px-4 py-3 text-red-300 hover:bg-white/10 rounded-xl text-sm">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}