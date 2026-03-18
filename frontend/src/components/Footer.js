import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white px-6 md:px-20 py-14 mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            Dent<span className="text-indigo-400">ify</span>
          </h2>

          <p className="text-gray-300 mt-3 leading-relaxed">
            Making dental care simple and accessible for everyone.
          </p>

          <p className="text-gray-400 mt-2 text-sm">
            Trusted by 1000+ patients
          </p>

          {/* Social style icons */}
          <div className="flex space-x-3 mt-4">
            <span className="bg-blue-500 p-2 rounded-full">👍</span>
            <span className="bg-indigo-500 p-2 rounded-full">💬</span>
            <span className="bg-purple-500 p-2 rounded-full">⭐</span>
          </div>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>

          <ul className="space-y-2 text-gray-300">

            {/* FIXED HOME */}
            <li>
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="hover:text-blue-400 transition duration-200 hover:translate-x-1"
              >
                Home
              </button>
            </li>

            <li>
              <Link
                to="/admin"
                className="hover:text-blue-400 transition duration-200 hover:translate-x-1"
              >
                Admin
              </Link>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-blue-400 transition duration-200 hover:translate-x-1"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>

          <div className="space-y-2 text-gray-300">
            <p>📍 Bangalore, India</p>
            <p>📞 +91 9876543210</p>
            <p>✉ support@dentify.com</p>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        © 2026 Dentify. All rights reserved.
      </div>
    </footer>
  );
}