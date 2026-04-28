import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HealthCarousel() {

  const data = [
  {
    title: "Cough & Cold",
    price: 699,
    img: "https://images.unsplash.com/photo-1588776814546-ec7e4c0b3f6d?w=800"
  },
  {
    title: "Fever",
    price: 599,
    img: "https://images.unsplash.com/photo-1600959907703-125ba1374a12?w=800"
  },
  {
    title: "Dental Pain",
    price: 699,
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800"
  },
  {
    title: "Skin Problems",
    price: 699,
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800"
  },
  {
    title: "Hair Fall",
    price: 599,
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800"
  },
  {
    title: "Headache",
    price: 499,
    img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800"
  }
];
  return (
    <div className="px-6 md:px-20 py-16 bg-gradient-to-b from-white to-blue-50">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Common Health Concerns
          </h2>
          <p className="text-gray-500 mt-1">
            Quick consultations for everyday issues
          </p>
        </div>

        <button className="px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
          Explore All →
        </button>
      </div>

      {/* SLIDER */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>

            <div className="group relative h-56 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

              {/* IMAGE */}
              <img
                src={item.img}
                className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-4 text-white">

                {/* PRICE BADGE */}
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 text-xs rounded-full">
                  ₹{item.price}
                </span>

                <h3 className="text-lg font-semibold mt-2">
                  {item.title}
                </h3>

                <button className="mt-2 text-sm text-blue-300 group-hover:text-white transition">
                  Consult Now →
                </button>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}