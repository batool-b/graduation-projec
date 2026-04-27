import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; 
import Home from './pages/home';
import { Trips } from './pages/Trips';
import About from './pages/About'; 
import { Contact } from './pages/Contact';
import { Login } from "./pages/Login";
import { MyBookings } from "./pages/MyBookings";
import { Profile } from "./pages/Profile";
import { EditProfile } from "./pages/EditProfile";
import { Register } from './pages/Register';  
import { ChangePassword } from './pages/ChangePassword';
import { Payment } from './pages/Payment';
import { TripDetails } from './pages/TripDetails';
import { Booking } from './pages/Booking';
import { BookingSuccess } from './pages/BookingSuccess';
import { AdminDashboard } from './pages/AdminDashboard'; // تأكد من المسار الصحيح

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="trips" element={<Trips />} />
        <Route path="trips/:id" element={<TripDetails />} />
        <Route path="booking/:id" element={<Booking />} />
        <Route path="payment/:id" element={<Payment />} />
        <Route path="booking-success" element={<BookingSuccess />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="my-bookings" element={<MyBookings />} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="admin" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;