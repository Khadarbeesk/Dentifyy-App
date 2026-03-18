import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const register = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("All fields required");
      return;
    }

    const res = await fetch("https://dentist-backend-iam4.onrender.com/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    alert(data.msg);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">

      <form onSubmit={register} className="bg-white p-10 rounded-2xl shadow-xl w-96">

        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <input
          placeholder="Name"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) => setForm({...form, name: e.target.value})}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) => setForm({...form, email: e.target.value})}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-6"
          onChange={(e) => setForm({...form, password: e.target.value})}
        />

        <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition">
          Register
        </button>

        <p className="text-center mt-4">
          Already have account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>

      </form>
    </div>
  );
}