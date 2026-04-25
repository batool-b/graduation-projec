import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // تأكد من استخدام react-router-dom
import { Eye, EyeOff, Plane, CheckCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function Register() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    password: "", 
    confirmPassword: "" 
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({}); // تم تحويلها لـ Object عادي
  const { register } = useAuth();
  const navigate = useNavigate();

  // دالة التحقق من البيانات (Validation)
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // استدعاء دالة التسجيل من الـ Context
    register(form.name, form.email, form.phone, form.password);
    
    // التوجه للصفحة الرئيسية بعد النجاح
    navigate("/");
  };

  // دالة قياس قوة كلمة المرور
  const passwordStrength = () => {
    const p = form.password;
    if (!p) return 0;
    let score = 0;
    if (p.length >= 6) score++;
    if (p.length >= 10) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return score;
  };

  const strength = passwordStrength();
  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong", "Very Strong"][strength];
  const strengthColor = ["", "bg-red-400", "bg-orange-400", "bg-yellow-400", "bg-green-400", "bg-green-600"][strength];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 font-poppins">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-green-700 group">
            <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center shadow-lg shadow-green-100 group-hover:scale-110 transition-transform">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight">FarAway</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-1">Create your account</h1>
          <p className="text-gray-500 text-sm">Join thousands of happy travelers</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2 block ml-1">Full Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Smith"
                className={`w-full bg-gray-50 border rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-green-500/10 transition-all ${errors.name ? "border-red-400" : "border-gray-100 focus:border-green-500"}`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2 block ml-1">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className={`w-full bg-gray-50 border rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-green-500/10 transition-all ${errors.email ? "border-red-400" : "border-gray-100 focus:border-green-500"}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2 block ml-1">Phone Number</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+962 7XXX XXXX"
                className={`w-full bg-gray-50 border rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-green-500/10 transition-all ${errors.phone ? "border-red-400" : "border-gray-100 focus:border-green-500"}`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.phone}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2 block ml-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className={`w-full bg-gray-50 border rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-green-500/10 pr-12 transition-all ${errors.password ? "border-red-400" : "border-gray-100 focus:border-green-500"}`}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Password Strength Bar */}
              {form.password && (
                <div className="mt-3 animate-in fade-in duration-500">
                  <div className="flex gap-1.5 mb-1.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= strength ? strengthColor : "bg-gray-100"}`} />
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Strength: <span className="text-gray-900">{strengthLabel}</span></p>
                </div>
              )}
              {errors.password && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2 block ml-1">Confirm Password</label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                placeholder="••••••••"
                className={`w-full bg-gray-50 border rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-green-500/10 transition-all ${errors.confirmPassword ? "border-red-400" : "border-gray-100 focus:border-green-500"}`}
              />
              {form.confirmPassword && form.password === form.confirmPassword && (
                <div className="flex items-center gap-1.5 mt-2 ml-1 animate-in zoom-in-50">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <p className="text-green-600 text-xs font-bold">Passwords match</p>
                </div>
              )}
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.confirmPassword}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-green-200 active:scale-[0.98] mt-4"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8 font-medium">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 font-bold hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}