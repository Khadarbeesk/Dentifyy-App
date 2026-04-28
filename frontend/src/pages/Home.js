import { useEffect, useState } from "react";
import DentistCard from "../components/DentistCard";
import BookingModal from "../components/BookingModal";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HealthCarousel from "../components/HealthCarousel";
import DentalCategories from "../components/DentalCategories";
import ExperienceSection from "../components/ExperienceSection";


export default function Home() {
  const [dentists, setDentists] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 6;

  // 🔍 SEARCH FILTER
  const filtered = dentists.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 PAGINATION
  const paginated = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

  useEffect(() => {
    fetch("http://localhost:5000/api/dentists")
      .then(res => res.json())
      .then(data => {
        setDentists(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      {/* HERO */}
      <Hero />

      {/* TITLE + SEARCH */}
      <div className="px-6 md:px-20 mt-16 text-center">
      <h2 id="doctors" className="text-3xl md:text-4xl font-bold text-gray-800">
          Top Doctors to Book
        </h2>

        <p className="text-gray-500 mt-3">
          Browse through our trusted dentists and book instantly.
        </p>

        {/* 🔍 SEARCH BAR */}
        <input
          type="text"
          placeholder="Search doctors..."
          className="mt-6 p-3 w-full md:w-1/3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* LOADING SPINNER */}
      {loading && (
        <div className="flex justify-center mt-10">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && filtered.length === 0 && (
        <div className="text-center mt-10 text-gray-400 text-lg">
          No doctors found.
        </div>
      )}

      {/* 🏥 DOCTOR CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 py-10">
        {paginated.map((d) => (
          <DentistCard
            key={d._id}
            dentist={d}
            onBook={setSelected}
          />
        ))}
      </div>

      {/* 📄 PAGINATION BUTTONS */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>

      {/* BOOKING MODAL */}
      {selected && (
        <BookingModal
          dentist={selected}
          close={() => setSelected(null)}
        />
      )}
<HealthCarousel />
<DentalCategories /> 
<ExperienceSection />
      
      <Footer />
    </div>
  );
}