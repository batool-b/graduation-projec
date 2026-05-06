import React, { createContext, useContext, useState, useEffect } from "react";
import { authAPI } from "../api";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const userData = await authAPI.getMe();

        // ✅ FIX 1: اقرأ is_admin من localStorage كـ fallback
        const savedIsAdmin = localStorage.getItem("is_admin") === "true";
        setUser({
          ...userData,
          is_admin: userData.is_admin === true || savedIsAdmin,
        });
      } catch (err) {
        localStorage.removeItem("token");
        localStorage.removeItem("is_admin");
        setUser(null);
      }

      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const data = await authAPI.login(email, password);

      // ✅ FIX 2: احفظ is_admin بـ localStorage جنب التوكن
      localStorage.setItem("token", data.token);
      localStorage.setItem("is_admin", data.user.is_admin === true ? "true" : "false");

      const userToSave = {
        ...data.user,
        is_admin: data.user.is_admin === true,
      };

      setUser(userToSave);
      return { success: true, user: userToSave };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const register = async (userData) => {
    try {
      const data = await authAPI.register(userData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("is_admin", "false");
      setUser({ ...data.user, is_admin: false });
      return { success: true, user: data.user };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("is_admin"); // ✅ FIX 3: امسح is_admin عند الـ logout
    setUser(null);
  };

  const updateProfile = async (data) => {
    try {
      const result = await authAPI.updateProfile(data);
      // ✅ حافظ على is_admin الحالية عند تحديث البروفايل
      setUser((prev) => ({
        ...result.user,
        is_admin: prev?.is_admin === true,
      }));
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