import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import { HiOutlineUserCircle } from 'react-icons/hi';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/review/get') // ✅ Replace with your backend URL if needed
      .then((res) => setReviews(res.data))
      .catch((err) => console.error('Error fetching reviews:', err));
  }, []);

  return (
    <section id="testimonials" className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">What People Say</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Real experiences shared by our patients and their families — we are proud to make a difference.
        </p>

        {reviews.length > 0 ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={40}
            pagination={{ clickable: true }}
            className="w-full max-w-4xl mx-auto"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-xl p-8 transition-transform transform hover:scale-105">
                  <div className="flex items-center gap-5 mb-4">
                    <div className="bg-indigo-100 rounded-full p-3">
                      <HiOutlineUserCircle className="text-indigo-600 w-10 h-10" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
                      <p className="text-sm text-gray-500">Verified Patient</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed text-base">“{review.comment}”</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-gray-500">No reviews available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
