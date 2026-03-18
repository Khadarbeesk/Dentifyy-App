export default function Hero() {
  const scrollToDoctors = () => {
    document.getElementById("doctors").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 px-6 md:px-20">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">

        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Book Appointment <br /> With Trusted Doctors
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Browse top dentists, check availability and book instantly.
          </p>

          <button
            onClick={scrollToDoctors}
            className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Book Appointment →
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex mt-10 md:mt-0 space-x-4">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Doctor 1"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="Doctor 2"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <img 
            src="https://randomuser.me/api/portraits/men/50.jpg" 
            alt="Doctor 3"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
        </div>

      </div>
    </div>
  );
}