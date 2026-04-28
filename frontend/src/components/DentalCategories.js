import { motion } from "framer-motion";

export default function DentalCategories() {

  const data = [
    { name: "General Dentist", price: 699, icon: "🦷" },
    { name: "Orthodontist", price: 799, icon: "😁" },
    { name: "Kids Dentistry", price: 649, icon: "👶" },
    { name: "Oral Surgery", price: 999, icon: "🔬" },
    { name: "Cosmetic Care", price: 899, icon: "✨" },
    { name: "Root Canal", price: 749, icon: "🧪" }
  ];

  return (
    <div className="px-6 md:px-20 py-20 mt-10 bg-gradient-to-b from-blue-50 to-white">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dental Categories
          </h2>
          <p className="text-gray-500 mt-2">
            Find the right dental service for your needs
          </p>
        </div>

        <button className="px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
          View All →
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition duration-300 cursor-pointer"
          >

            {/* ICON */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-2xl mb-4 group-hover:scale-110 transition">
              {item.icon}
            </div>

            {/* NAME */}
            <h3 className="font-semibold text-gray-800 text-sm">
              {item.name}
            </h3>

            {/* PRICE */}
            <p className="text-gray-500 text-sm mt-1">
              ₹{item.price}
            </p>

            {/* CTA */}
            <button className="text-blue-600 text-sm mt-2 font-medium hover:underline">
              Consult →
            </button>

          </motion.div>
        ))}

      </div>

    </div>
  );
}