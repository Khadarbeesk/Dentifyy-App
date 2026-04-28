import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import DoctorDashboard from "./pages/DoctorDashboard";
import MyAppointments from "./pages/MyAppointments";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
      </Routes>
    </BrowserRouter>
  );
}
