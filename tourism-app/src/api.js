const BASE_URL = "http://localhost:3000/api";

const getToken = () => localStorage.getItem("token");

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

  getMe: () =>
    request("/auth/me", {
      headers: {
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
      },
    }),

  updateProfile: (data) =>
    request("/auth/profile", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  changePassword: (data) =>
    request("/auth/change-password", {
      method: "PUT",
      body: JSON.stringify(data),
    }),
};

//TRIPS
export const tripsAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/trips${query ? "?" + query : ""}`);
  },

  getById: (id) => request(`/trips/${id}`),
};

// AI RECOMMENDATIONS
export const recommendationsAPI = {
  getPersonalized: (preferences) =>
    request("/recommendations/ai", {
      method: "POST",
      body: JSON.stringify(preferences),
    }),

  getPreferences: (userId) => request(`/recommendations/preferences/${userId}`),
};

// BOOKINGS 
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

// PAYMENTS 
export const paymentsAPI = {
  create: (paymentData) =>
    request("/payments", {
      method: "POST",
      body: JSON.stringify(paymentData),
    }),
};

//  REVIEWS 
export const reviewsAPI = {
  create: (reviewData) =>
    request("/reviews", {
      method: "POST",
      body: JSON.stringify(reviewData),
    }),
};

// CONTACT
export const contactAPI = {
  send: (data) =>
    request("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

// ADMIN 
export const adminAPI = {
  // Overview
  getOverview: () => request("/admin/overview"),

  // Users
  getUsers: () => request("/admin/users"),
  getUser: (id) => request(`/admin/users/${id}`),
  createUser: (data) =>
    request("/admin/users", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateUser: (id, data) =>
    request(`/admin/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deleteUser: (id) =>
    request(`/admin/users/${id}`, { method: "DELETE" }),

  // Trips
  getTrips: () => request("/admin/trips"),
  createTrip: (data) =>
    request("/admin/trips", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateTrip: (id, data) =>
    request(`/admin/trips/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deleteTrip: (id) =>
    request(`/admin/trips/${id}`, { method: "DELETE" }),

  // Bookings
  getBookings: () => request("/admin/bookings"),
  updateBookingStatus: (id, status) =>
    request(`/admin/bookings/${id}/status`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    }),
  deleteBooking: (id) =>
    request(`/admin/bookings/${id}`, { method: "DELETE" }),
};
