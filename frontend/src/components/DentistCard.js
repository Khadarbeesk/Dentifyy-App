import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function DentistCard({ dentist, onBook }) {

  const navigate = useNavigate();

  const handleBooking = () => {
    const token = localStorage.getItem("token");

    if (!token || token === "null" || token === "undefined") {
      alert("Please login to book appointment");
      navigate("/login");
      return;
    }

    onBook(dentist);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300"
    >

      {/* ✨ Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 blur-xl" />

      {/* 🔥 IMAGE (Hero-style animation) */}
      <div className="relative overflow-hidden">
        <motion.img
          src={dentist.image}
          initial={{ opacity: 0, y: -40, scale: 1.08 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="h-52 w-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      </div>

      <div className="p-5 relative z-10">

        {/* 🟢 Availability */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs text-green-600 font-medium">
            Available
          </span>
        </div>

        {/* NAME */}
        <h2 className="text-xl font-semibold text-gray-900">
          {dentist.name}
        </h2>

        {/* QUALIFICATION */}
        <p className="text-gray-500 text-sm">
          {dentist.qualification}
        </p>

        {/* EXPERIENCE */}
        <p className="text-sm mt-1 text-gray-600">
          {dentist.experience} yrs experience
        </p>

        {/* CLINIC */}
        <p className="text-sm text-gray-500">
          {dentist.clinicName}
        </p>

        {/* 🔘 BUTTON */}
        <button
          onClick={handleBooking}
          className="relative w-full mt-5 py-2.5 rounded-xl font-medium text-white overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300"
        >
          {/* shimmer */}
          <span className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>

          <span className="relative z-10">
            Book Appointment →
          </span>
        </button>

      </div>
    </motion.div>
  );
}