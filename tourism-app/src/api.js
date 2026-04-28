// =====================================================
// api.js — نقطة التواصل الوحيدة مع الباك إند
// =====================================================

const BASE_URL = "http://localhost:3000/api";

// دالة مساعدة: تجيب التوكن من localStorage
const getToken = () => localStorage.getItem("token");

// دالة مساعدة: ترسل طلب مع headers صح
const request = async (endpoint, options = {}) => {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || data.error || "Something went wrong");
  }

  return data;
};

// ====================== AUTH ======================
export const authAPI = {
  login: (email, password) =>
    request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  register: (userData) =>
    request("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    }),

  changePassword: (data) =>
    request("/auth/change-password", {
      method: "PUT",
      body: JSON.stringify(data),
    }),
};

// ====================== TRIPS ======================
export const tripsAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/trips${query ? "?" + query : ""}`);
  },

  getById: (id) => request(`/trips/${id}`),
};

// ====================== BOOKINGS ======================
export const bookingsAPI = {
  create: (bookingData) =>
    request("/bookings", {
      method: "POST",
      body: JSON.stringify(bookingData),
    }),

  getMyBookings: () => request("/bookings/my"),

  cancel: (id) =>
    request(`/bookings/${id}/cancel`, { method: "PUT" }),
};

// ====================== REVIEWS ======================
export const reviewsAPI = {
  create: (reviewData) =>
    request("/reviews", {
      method: "POST",
      body: JSON.stringify(reviewData),
    }),
};

// ====================== PROFILE ======================
export const profileAPI = {
  getMe: () => request("/auth/me"),

  update: (data) =>
    request("/auth/profile", {
      method: "PUT",
      body: JSON.stringify(data),
    }),
};

// ====================== CONTACT ======================
export const contactAPI = {
  send: (data) =>
    request("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
