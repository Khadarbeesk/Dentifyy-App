import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  // ================= VALIDATION =================
  const validate = () => {
    let newErrors = {};

    // Name
    if (!form.name || form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Password (STRONG)
    if (
      !form.password ||
      form.password.length < 6 ||
      !/[A-Z]/.test(form.password) ||
      !/[0-9]/.test(form.password)
    ) {
      newErrors.password =
        "Password must be 6+ chars, include 1 uppercase & 1 number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= REGISTER =================
  const register = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    alert(data.msg);

    if (data.success) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">

      <form onSubmit={register} className="bg-white p-10 rounded-2xl shadow-xl w-96">

        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {/* NAME */}
        <input
          placeholder="Name"
          className="w-full p-3 border rounded-lg mb-2"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mb-2">{errors.name}</p>
        )}

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg mb-2"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mb-2">{errors.email}</p>
        )}

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-2"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mb-2">{errors.password}</p>
        )}

        <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition mt-2">
          Register
        </button>

        <p className="text-center mt-4">
          Already have account?{" "}
          <Link to="/login" className="text-blue-500">Login</Link>
        </p>

      </form>
    </div>
  );
}