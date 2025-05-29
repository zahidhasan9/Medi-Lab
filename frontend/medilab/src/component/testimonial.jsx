// src/components/Testimonial.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// import image

import doc1Img from '../assets/img/testimonials/testimonials-1.jpg';
import doc2Img from '../assets/img/testimonials/testimonials-2.jpg';
import doc3Img from '../assets/img/testimonials/testimonials-3.jpg';
import doc4Img from '../assets/img/testimonials/testimonials-4.jpg';

const testimonialsData = [
  {
    img: doc1Img,
    name: 'James Anderson',
    title: 'Kidney Transplant Recipient',
    quote:
      'The kidney transplant I received here changed my life. The team provided incredible support throughout the process, from diagnosis to post-transplant care.'
  },
  {
    img: doc2Img,
    name: 'Susan Mitchell',
    title: 'Dialysis Patient',
    quote:
      'The dialysis treatments have been lifesaving. The nurses are caring and always ensure I am comfortable throughout my sessions. I feel supported every step of the way.'
  },
  {
    img: doc3Img,
    name: 'Linda Roberts',
    title: 'Kidney Disease Awareness Advocate',
    quote:
      'This center helped me understand how to manage my kidney disease. The information, support groups, and resources were invaluable in my journey to better health.'
  },
  {
    img: doc4Img,
    name: 'Dr. Mike Thompson',
    title: 'Nephrologist',
    quote:
      'I trust this center to provide high-quality care for kidney patients. Their approach to patient treatment and the latest research makes a real difference in improving lives.'
  }
];

const Testimonial = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Hear from patients who have benefited from our kidney care services. We are committed to improving kidney
          health and providing support at every stage of treatment.
        </p>

        <Swiper modules={[Pagination]} spaceBetween={30} pagination={{ clickable: true }} className="w-full">
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500"
                  />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-indigo-500 text-sm">{testimonial.title}</p>
                    <div className="flex gap-1 text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09L5.845 12 1 7.91l6.061-.91L10 2l2.939 5 6.061.91L14.155 12l1.723 6.09z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 italic">“{testimonial.quote}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
