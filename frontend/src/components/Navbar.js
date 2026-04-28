import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    alert("Logged out");
    navigate("/login");
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 py-4 bg-white shadow-md z-50">

      {/* LOGO */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img 
          src="/logoo.png" 
          alt="Dentify logo" 
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-xl md:text-2xl font-bold text-blue-600">
          Dent<span className="text-indigo-600">ify</span>
        </h1>
      </div>

      {/* DESKTOP MENU */}
      <div className="space-x-6 font-medium hidden md:flex items-center">
        <Link to="/" className="hover:text-blue-500">Home</Link>

        {role === "admin" && (
          <Link to="/admin" className="hover:text-blue-500">
            Bookings
          </Link>
        )}

        {role === "user" && (
          <Link to="/my-appointments" className="hover:text-blue-500">
            My Bookings
          </Link>
        )}

        <button onClick={scrollToContact} className="hover:text-blue-500">
          Contact
        </button>

        {token ? (
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Login
          </Link>
        )}
      </div>

      {/* MOBILE BUTTON */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-2xl">
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">

          <Link to="/" onClick={() => setOpen(false)}>Home</Link>

          {role === "admin" && (
            <Link to="/admin" onClick={() => setOpen(false)}>
              Bookings
            </Link>
          )}

          {role === "user" && (
            <Link to="/my-appointments" onClick={() => setOpen(false)}>
              My Bookings
            </Link>
          )}

          <button onClick={scrollToContact}>Contact</button>

          {token ? (
            <button
              onClick={() => { logout(); setOpen(false); }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          )}

        </div>
      )}
    </div>
  );
}