import { motion } from "framer-motion";

export default function Hero() {

  // ✅ KEEP YOUR ORIGINAL FUNCTIONALITY
  const scrollToDoctors = () => {
    document.getElementById("doctors")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="relative overflow-hidden py-28 px-6 md:px-20 text-gray-800">

      {/* 🌿 Soft premium background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5f7fb] via-[#eef2ff] to-[#f3e8e6]" />

      {/* ✨ subtle glow */}
      <div className="absolute w-96 h-96 bg-blue-200/30 blur-3xl rounded-full top-[-80px] left-[-80px]" />
      <div className="absolute w-96 h-96 bg-indigo-200/30 blur-3xl rounded-full bottom-[-80px] right-[-80px]" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Smart Dental <br /> Booking Platform
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Find top dentists, book instantly, and manage appointments effortlessly.
          </p>

          {/* ✅ BUTTON (WORKS SAME AS BEFORE) */}
          <button
            onClick={scrollToDoctors}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-blue-700 transition"
          >
            Book Appointment →
          </button>

          {/* 👇 Extra premium touch */}
          <p className="mt-4 text-sm text-gray-500">
            ✔ Verified doctors &nbsp; ✔ Instant booking &nbsp; ✔ Trusted by patients
          </p>
        </motion.div>

        {/* RIGHT SIDE IMAGES */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex space-x-4 mt-10 md:mt-0"
        >
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md hover:scale-105 transition"
          />
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md hover:scale-105 transition"
          />
          <img 
            src="https://randomuser.me/api/portraits/men/50.jpg"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md hover:scale-105 transition"
          />
        </motion.div>

      </div>
    </div>
  );
}