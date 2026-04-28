import React, { createContext, useContext, useState, useEffect } from "react";
import { authAPI } from "../api";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // عند بداية التطبيق: تحقق إذا في token محفوظ وجيب بيانات اليوزر
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const userData = await authAPI.getMe();
          setUser(userData);
        } catch (err) {
          // التوكن انتهى أو غلط
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  // ====================== LOGIN ======================
  const login = async (email, password) => {
    try {
      const data = await authAPI.login(email, password);
      // حفظ التوكن
      localStorage.setItem("token", data.token);
      setUser(data.user);
      return { success: true, user: data.user };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // ====================== REGISTER ======================
  const register = async (userData) => {
    try {
      const data = await authAPI.register(userData);
      // auto-login بعد التسجيل
      localStorage.setItem("token", data.token);
      setUser(data.user);
      return { success: true, user: data.user };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // ====================== LOGOUT ======================
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // ====================== UPDATE PROFILE ======================
  const updateProfile = async (data) => {
    try {
      const result = await authAPI.updateProfile(data);
      setUser(result.user);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        isAdmin: user?.is_admin === true,
        loading,
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}