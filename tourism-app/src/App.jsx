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
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="trips" element={<Trips />} /> 
        <Route path="login" element={<Login />} /> 
        <Route path="register" element={<Register />} />
        <Route path="my-bookings" element={<MyBookings />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="payment/:id" element={<Payment />} />
      </Route>
    </Routes>
  );
}

export default App;