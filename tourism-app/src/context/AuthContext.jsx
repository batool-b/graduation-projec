import React, { createContext, useContext, useState, useEffect } from "react";

// إنشاء السياق (Context)
const AuthContext = createContext(undefined);

// بيانات تجريبية (Mock Data) لمحاكاة "جدول الأدمن" و "جدول اليوزر"
// في الواقع، الباك إند هو من سيبحث في الجداول المختلفة
const mockUsers = [
  {
    id: 1,
    name: "Ahmed (Admin)",
    email: "admin@faraway.com",
    role: "admin", // صلاحيات كاملة + داشبورد إحصائيات
    photo: "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?w=200",
  },
  {
    id: 2,
    name: "Sarah (User)",
    email: "user@faraway.com",
    role: "user", // صلاحيات محدودة + حجوزات شخصية
    photo: "https://images.unsplash.com/photo-1768933294181-82778103e501?w=200",
  },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // التأكد من بقاء المستخدم مسجل دخول عند تحديث المتصفح
  useEffect(() => {
    const savedUser = localStorage.getItem("faraway_session");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // دالة تسجيل الدخول - تقوم بالتحقق وإرجاع الدور (Role)
  const login = async (email, password) => {
  // فحص يدوي للحساب الخاص بك
  if (email === "rania@gmail.com" && password === "rania2004") {
    const userData = {
      success: true,
      name: "Rania",
      email: "rania@gmail.com",
      role: "user", // أو "admin" إذا أردت تجربة لوحة التحكم
      photo: null // سيظهر أول حرف من اسمك تلقائياً
    };
    
    setUser(userData);
    setIsLoggedIn(true);
    return userData; // إرجاع البيانات لصفحة اللوجين
  } else {
    // إذا كانت البيانات خاطئة
    return { success: false };
  }
};

  // دالة تسجيل الحساب (دائماً تضاف لجدول اليوزر بشكل افتراضي)
  const register = (name, email, phone, password) => {
    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
      role: "user", // أي شخص يسجل من الموقع هو User
      photo: "https://images.unsplash.com/photo-1679745776849-99c231c9b27d?w=200",
    };
    setUser(newUser);
    localStorage.setItem("faraway_session", JSON.stringify(newUser));
    return true;
  };

  // تسجيل الخروج
  const logout = () => {
    setUser(null);
    localStorage.removeItem("faraway_session");
  };

  // تحديث البيانات (بروفايل)
  const updateProfile = (data) => {
    if (user) {
      const updated = { ...user, ...data };
      setUser(updated);
      localStorage.setItem("faraway_session", JSON.stringify(updated));
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isLoggedIn: !!user, 
        login, 
        register, 
        logout, 
        updateProfile 
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Hook مخصص لاستدعاء البيانات بسهولة في أي صفحة
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}