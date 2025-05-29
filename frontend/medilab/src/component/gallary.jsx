import React from 'react';
import heroImg1 from '../assets/img/gallery/gallery-1.jpg';
import heroImg2 from '../assets/img/gallery/gallery-2.jpg';
import heroImg3 from '../assets/img/gallery/gallery-3.jpg';
import heroImg4 from '../assets/img/gallery/gallery-4.jpg';
import heroImg5 from '../assets/img/gallery/gallery-5.jpg';
import heroImg6 from '../assets/img/gallery/gallery-6.jpg';
import heroImg7 from '../assets/img/gallery/gallery-7.jpg';
import heroImg8 from '../assets/img/gallery/gallery-8.jpg';
const galleryImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6, heroImg7, heroImg8];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-gray-100">
      {/* Section Title */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800">Gallery</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg group">
              <a href={`../assets/img/gallery/${img}`} className="block glightbox">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
