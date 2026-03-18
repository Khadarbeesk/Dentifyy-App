import { useNavigate } from "react-router-dom";


export default function DentistCard({ dentist, onBook }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    const token = localStorage.getItem("token");

    // ❌ NOT LOGGED IN
    if (!token) {
      alert("Please login to book appointment");
      navigate("/login");
      return;
    }

    // ✅ LOGGED IN
    onBook(dentist);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden">

      <img 
        src={dentist.image} 
        className="h-52 w-full object-cover"
        alt={dentist.name}
      />

      <div className="p-5">

        <p className="text-green-500 text-sm font-medium">
          ● Available
        </p>

        <h2 className="text-xl font-bold text-gray-800">
          {dentist.name}
        </h2>

        <p className="text-gray-500">
          {dentist.qualification}
        </p>

        <p className="text-sm mt-1 text-gray-600">
          {dentist.experience} yrs experience
        </p>

        <p className="text-sm text-gray-600">
          {dentist.clinicName}
        </p>

       <p className="text-sm text-gray-600">
  📍 {dentist.address}
</p>
<p className="text-sm text-gray-500">
  {dentist.location}
</p>

        <button
          onClick={handleBooking}
          className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg hover:scale-105 transition"
        >
          Book Appointment
        </button>

      </div>
    </div>
  );
}