import { motion } from "framer-motion";
import { FaTooth, FaCalendarCheck, FaUserMd, FaCheckCircle } from "react-icons/fa";

export default function ExperienceSection() {
  return (
    <div className="bg-gradient-to-b from-[#f8fafc] via-white to-[#eef2ff] py-24 px-6 md:px-20">

      {/* ================= HOW IT WORKS ================= */}
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-14">
        How <span className="text-blue-600">Dentify</span> Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-24">

        {[
          {
            icon: <FaTooth />,
            title: "Find a Dentist",
            desc: "Browse verified dentists based on location, experience, and reviews."
          },
          {
            icon: <FaCalendarCheck />,
            title: "Book Instantly",
            desc: "Select your preferred slot and confirm appointment in seconds."
          },
          {
            icon: <FaUserMd />,
            title: "Visit & Get Care",
            desc: "Meet your dentist and receive professional treatment."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-md hover:shadow-2xl transition"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xl mb-5 group-hover:scale-110 transition">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ================= BENEFITS ================= */}
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
        Why Choose Dentify
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-24">

        {[
          "Instant booking with real-time slots",
          "Trusted & verified dentists",
          "Seamless and fast experience",
          "Secure and private data handling",
          "No waiting, no hassle",
          "Modern and easy-to-use interface"
        ].map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm hover:shadow-lg transition"
          >
            <FaCheckCircle className="text-green-500 mt-1" />
            <p className="text-gray-700 text-sm">{text}</p>
          </motion.div>
        ))}
      </div>

      {/* ================= TESTIMONIALS ================= */}
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        What Our Users Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {[
          {
            name: "Rahul Sharma",
            role: "Software Engineer",
            text: "I booked a dentist in under 2 minutes. The process was smooth and hassle-free."
          },
          {
            name: "Sneha Reddy",
            role: "Student",
            text: "Loved the clean interface. Finding doctors and booking was super easy."
          },
          {
            name: "Arjun Verma",
            role: "Business Owner",
            text: "No waiting at clinics anymore. Just book and go. Highly convenient!"
          }
        ].map((user, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-md hover:shadow-2xl transition"
          >
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              “{user.text}”
            </p>

            <div>
              <h4 className="font-semibold text-gray-900">
                {user.name}
              </h4>
              <p className="text-xs text-gray-500">
                {user.role}
              </p>
            </div>
          </motion.div>
        ))}

      </div>

    </div>
  );
}