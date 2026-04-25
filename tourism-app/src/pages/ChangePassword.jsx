import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Key, ArrowLeft, CheckCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function ChangePassword() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ current: "", newPass: "", confirm: "" });
  const [show, setShow] = useState({ current: false, new: false, confirm: false });
  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState({});

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link to="/login" className="bg-green-600 text-white px-6 py-2.5 rounded-xl">Login</Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.current) newErrors.current = "Current password is required";
    if (form.newPass.length < 6) newErrors.newPass = "New password must be at least 6 characters";
    if (form.newPass !== form.confirm) newErrors.confirm = "Passwords do not match";
    
    if (Object.keys(newErrors).length > 0) { 
        setErrors(newErrors); 
        return; 
    }

    // Replace with: POST /api/auth/change-password
    setSaved(true);
    setForm({ current: "", newPass: "", confirm: "" });
    setTimeout(() => { setSaved(false); navigate("/profile"); }, 2500);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-linear-to-r from-green-700 to-green-600 py-10 px-4 text-white">
        <div className="max-w-md mx-auto">
          <Link to="/profile" className="flex items-center gap-2 text-green-100 hover:text-white text-sm mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Profile
          </Link>
          <h1 className="text-3xl font-bold">Change Password</h1>
          <p className="text-green-100 mt-1">Update your account password</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-10">
        {saved && (
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-700 font-medium">Password updated successfully!</p>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
              <Key className="w-7 h-7 text-green-600" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {["current", "newPass", "confirm"].map((field) => {
              const labels = { current: "Current Password", newPass: "New Password", confirm: "Confirm New Password" };
              const placeholders = { current: "Enter current password", newPass: "Enter new password", confirm: "Confirm new password" };
              const showKey = field === "current" ? "current" : field === "newPass" ? "new" : "confirm";
              
              return (
                <div key={field}>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">{labels[field]}</label>
                  <div className="relative">
                    <input
                      type={show[showKey] ? "text" : "password"}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      placeholder={placeholders[field]}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 pr-12 ${errors[field] ? "border-red-400" : "border-gray-200"}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShow({ ...show, [showKey]: !show[showKey] })}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {show[showKey] ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
                </div>
              );
            })}

            <div className="bg-blue-50 rounded-xl p-4 text-xs text-blue-700">
              <p className="font-semibold mb-1">Password Requirements:</p>
              <ul className="space-y-0.5">
                <li className={form.newPass.length >= 6 ? "text-green-600" : ""}>• At least 6 characters</li>
                <li className={/[A-Z]/.test(form.newPass) ? "text-green-600" : ""}>• One uppercase letter</li>
                <li className={/[0-9]/.test(form.newPass) ? "text-green-600" : ""}>• One number</li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-semibold transition-all"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}