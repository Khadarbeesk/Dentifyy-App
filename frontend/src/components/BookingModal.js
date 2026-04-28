import { useState, useEffect } from "react";

export default function BookingModal({ dentist, close }) {

  const [form, setForm] = useState({
    patientName: "",
    age: "",
    gender: "",
    date: "",
    time: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);

  const today = new Date().toISOString().split("T")[0];

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM"
  ];

  // ✅ FETCH BOOKED SLOTS
  useEffect(() => {
    if (!form.date) return;

    fetch("http://localhost:5000/api/appointments")
      .then(res => res.json())
      .then(data => {
        const slots = data
          .filter(a =>
            a.dentistName === dentist.name &&
            new Date(a.date).toISOString().split("T")[0] === form.date
          )
          .map(a => a.time);

        setBookedSlots(slots);
      })
      .catch(err => console.log(err));
  }, [form.date, dentist.name]);

  // ✅ VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.patientName) newErrors.patientName = "Name required";
    if (!form.age || form.age <= 0 || form.age > 120)
      newErrors.age = "Enter valid age (1-120)";
    if (!form.gender) newErrors.gender = "Select gender";
    if (!form.date || form.date < today)
      newErrors.date = "Select valid date";
    if (!form.time) newErrors.time = "Select time slot";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ SUBMIT BOOKING
  const submit = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          ...form,
          dentistName: dentist.name,
          clinicName: dentist.clinicName
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.msg || "Slot already booked ❌");
        setLoading(false);
        return;
      }

      alert("Appointment Booked ✅");
      close();

    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  // ✅ PAYMENT FUNCTION (FIXED)
  const handlePayment = async () => {
    if (!validate()) return;

    try {
      const res = await fetch("http://localhost:5000/api/payment/create-order", {
        method: "POST"
      });

      const data = await res.json();

      const options = {
        key: "rzp_test_SgTDrJlO9yXKVh",
        amount: data.amount,
        currency: data.currency,
        name: "Dentify",
        description: "Appointment Booking",
        order_id: data.id,

        handler: async function () {
          await submit(); // ✅ now works perfectly
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      alert("Payment failed ❌");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4">

      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 md:p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Book <span className="text-blue-600">{dentist.name}</span>
          </h2>

          <button onClick={close} className="text-gray-500 hover:text-red-500 text-xl">
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setForm({ ...form, patientName: e.target.value })}
          />

          <input
            type="number"
            min="1"
            placeholder="Age"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />

          <select
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            type="date"
            min={today}
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

        </div>

        {/* Time Slots */}
        <div className="mt-5">
          <p className="mb-2 font-medium">Select Time Slot</p>

          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((slot) => {
              const isBooked = bookedSlots.includes(slot);

              return (
                <button
                  key={slot}
                  disabled={isBooked}
                  onClick={() => setForm({ ...form, time: slot })}
                  className={`p-2 rounded-lg border ${
                    isBooked
                      ? "bg-gray-300 cursor-not-allowed text-gray-500"
                      : form.time === slot
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>

        {/* FINAL BUTTON */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg"
        >
          {loading ? "Processing..." : "Pay & Book Appointment"}
        </button>

      </div>
    </div>
  );
}