import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Plane, AlertCircle, Lock, Mail } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const result = await login(form.email, form.password);
    setIsLoading(false);

    if (result.success) {
      // ✅ التوجيه بناءً على is_admin من الداتابيس
      navigate(result.user.is_admin ? "/admin" : "/profile");
    } else {
      setError(result.error || "Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 font-poppins">
      <div className="w-full max-w-md">

        {/* Logo Section */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2.5 text-green-700 group">
            <div className="w-12 h-12 bg-green-700 rounded-2xl flex items-center justify-center shadow-lg shadow-green-200 group-hover:scale-110 transition-transform">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-black tracking-tighter">FarAway</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-6">Welcome Back</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to access your bookings and profile</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-10">

          {error && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-2xl p-4 mb-6">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <p className="text-red-600 text-sm font-semibold">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2 block ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="traveler@example.com"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-12 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:bg-white focus:border-green-500 transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400 block">
                  Password
                </label>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-12 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:bg-white focus:border-green-500 transition-all pr-14"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-green-200 active:scale-[0.98] mt-4 flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-50 text-center">
            <p className="text-gray-500 text-sm font-medium">
              New to FarAway?{" "}
              <Link to="/register" className="text-green-600 font-bold hover:underline">
                Create Account
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
