import React, { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext(undefined);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("faraway_session");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    if (email === "rania@gmail.com" && password === "rania2004") {
      const userData = { name: "Rania", email: "rania@gmail.com", role: "admin", photo: null };
      setUser(userData);
      localStorage.setItem("faraway_session", JSON.stringify(userData));
      return { success: true };
    } else if (email === "shahd@gmail.com" && password === "shahd2004") {
      const userData = { name: "Shahd", email: "shahd@gmail.com", role: "user", photo: null };
      setUser(userData);
      localStorage.setItem("faraway_session", JSON.stringify(userData));
      return { success: true };
    } else {
      return { success: false };
    }
  };

  const register = (name, email, phone, password) => {
    const newUser = {
      id: Date.now(), name, email, phone, role: "user",
      photo: "https://images.unsplash.com/photo-1679745776849-99c231c9b27d?w=200",
    };
    setUser(newUser);
    localStorage.setItem("faraway_session", JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("faraway_session");
  };

  const updateProfile = (data) => {
    if (user) {
      const updated = { ...user, ...data };
      setUser(updated);
      localStorage.setItem("faraway_session", JSON.stringify(updated));
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, register, logout, updateProfile }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}