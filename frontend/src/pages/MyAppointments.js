import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function MyAppointments() {

  const role = localStorage.getItem("role");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const token = localStorage.getItem("token");

  console.log("TOKEN:", token); // 🔥 debug

  // ❌ if no token → stop API call
  if (!token || token === "null" || token === "undefined") {
    console.log("No token found");
    setLoading(false);
    return;
  }

  fetch("http://localhost:5000/api/appointments/my", {
    headers: {
      Authorization: `Bearer ${token}` // ✅ correct format
    }
  })
    .then(res => {
      console.log("STATUS:", res.status); // 🔥 debug
      return res.json();
    })
    .then(data => {
      console.log("MY BOOKINGS:", data);
      setAppointments(data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    });
}, []);

  if (role !== "user") {
    return <Navigate to="/" />;
  }

  return (
    <div className="p-6 min-h-screen bg-gray-50">

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        📅 My Appointments
      </h1>

      {loading && <p>Loading...</p>}

      {!loading && appointments.length === 0 && (
        <div className="bg-white p-6 rounded-xl shadow text-center">
          No bookings yet
        </div>
      )}

      {!loading && appointments.length > 0 && (
        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Doctor</th>
                <th className="p-3">Date</th>
                <th className="p-3">Time</th>
                <th className="p-3">Clinic</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((a, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3">{a.dentistName}</td>
                  <td className="p-3">
                    {new Date(a.date).toLocaleDateString()}
                  </td>
                  <td className="p-3">{a.time}</td>
                  <td className="p-3">{a.clinicName}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      )}

    </div>
  );
}