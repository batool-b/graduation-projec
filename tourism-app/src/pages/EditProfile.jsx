import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // تأكد من المسار react-router-dom
import { Camera, Save, ArrowLeft, CheckCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function EditProfile() {
  const { user, isLoggedIn, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  
  // الحالة الابتدائية للنموذج
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    photo: user?.photo || "",
  });

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center font-poppins">
        <div className="text-center">
          <p className="mb-4 text-gray-600">Please login to edit your profile</p>
          <Link to="/login" className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-bold">Login</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // تحديث البيانات في الـ Context
    updateProfile(form);
    
    setSaved(true);
    
    // إخفاء رسالة النجاح والعودة للبروفايل بعد ثانيتين
    setTimeout(() => { 
      setSaved(false); 
      navigate("/profile"); 
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-poppins">
      {/* Header */}
      <div className="bg-linear-to-r from-green-700 to-green-600 py-10 px-4 text-white">
        <div className="max-w-2xl mx-auto">
          <Link to="/profile" className="flex items-center gap-2 text-green-100 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Profile
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Edit Profile</h1>
          <p className="text-green-100 mt-1 opacity-90">Update your personal information</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-10">
        {/* Success Message */}
        {saved && (
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl p-4 mb-6 animate-in fade-in slide-in-from-top-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-700 font-bold">Profile updated successfully!</p>
          </div>
        )}

        <div className="bg-white rounded-4xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8">
          
          {/* Profile Picture Display */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative">
              <img
                src={form.photo || `https://ui-avatars.com/api/?name=${form.name}&background=15803d&color=fff`}
                alt="Profile"
                className="w-28 h-28 rounded-3xl object-cover border-4 border-white shadow-md"
              />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg text-white">
                <Camera className="w-5 h-5" />
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4 font-medium uppercase tracking-wider">Preview Profile Image</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2 block ml-1">Full Name</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Rania ..."
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none font-medium"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2 block ml-1">Email Address</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="rania@example.com"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none font-medium"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2 block ml-1">Phone Number</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+962 7XXX XXXX"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none font-medium"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2 block ml-1">Profile Photo URL</label>
              <input
                type="url"
                value={form.photo}
                onChange={(e) => setForm({ ...form, photo: e.target.value })}
                placeholder="https://example.com/photo.jpg"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none font-medium"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-green-200 active:scale-[0.98]"
              >
                <Save className="w-5 h-5" /> Save Changes
              </button>
              <Link
                to="/profile"
                className="flex-1 text-center py-4 text-sm font-bold text-gray-500 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}