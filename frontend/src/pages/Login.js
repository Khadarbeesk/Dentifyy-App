import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  // ================= VALIDATION =================
  const validate = () => {
    let newErrors = {};

    if (!form.email || !form.password) {
      newErrors.general = "All fields required";
    }

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const login = async (e) => {
    e.preventDefault();

    // ✅ VALIDATION ADDED
    if (!validate()) return;

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);
      console.log("TOKEN SAVED:", data.token);

      alert("Login successful");

      if (data.user.role === "doctor") {
        navigate("/doctor");
      } else if (data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

    } else {
      alert(data.msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">

      <form onSubmit={login} className="bg-white p-10 rounded-2xl shadow-xl w-96">

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* GENERAL ERROR */}
        {errors.general && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {errors.general}
          </p>
        )}

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg mb-2"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mb-3">{errors.email}</p>
        )}

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-6"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
          Login
        </button>

        <p className="text-center mt-4">
          New user? <Link to="/register" className="text-blue-500">Register</Link>
        </p>

        <p className="text-xs text-gray-400 mt-2 text-center italic">
          Demo Admin → admin@gmail.com / 1234
        </p>

      </form>
    </div>
  );
}