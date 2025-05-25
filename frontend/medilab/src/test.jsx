import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="main">
        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 info" data-aos="fade-up" data-aos-delay={100}>
                <h3>What Our Patients Say</h3>
                <p>
                  Hear from patients who have benefited from our kidney care services. We are committed to improving
                  kidney health and providing support at every stage of treatment.
                </p>
              </div>
              <div className="col-lg-7" data-aos="fade-up" data-aos-delay={200}>
                <div className="swiper init-swiper">
                  <div className="swiper-wrapper">
                    {/* Testimonial 1 */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="d-flex">
                          <img
                            src="assets/img/testimonials/testimonials-1.jpg"
                            className="testimonial-img flex-shrink-0"
                            alt="Patient 1"
                          />
                          <div>
                            <h3>James Anderson</h3>
                            <h4>Kidney Transplant Recipient</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>
                            "The kidney transplant I received here changed my life. The team provided incredible support
                            throughout the process, from diagnosis to post-transplant care."
                          </span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                      </div>
                    </div>
                    {/* End testimonial item */}
                    {/* Testimonial 2 */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="d-flex">
                          <img
                            src="assets/img/testimonials/testimonials-2.jpg"
                            className="testimonial-img flex-shrink-0"
                            alt="Patient 2"
                          />
                          <div>
                            <h3>Susan Mitchell</h3>
                            <h4>Dialysis Patient</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>
                            "The dialysis treatments have been lifesaving. The nurses are caring and always ensure I am
                            comfortable throughout my sessions. I feel supported every step of the way."
                          </span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                      </div>
                    </div>
                    {/* End testimonial item */}
                    {/* Testimonial 3 */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="d-flex">
                          <img
                            src="assets/img/testimonials/testimonials-3.jpg"
                            className="testimonial-img flex-shrink-0"
                            alt="Patient 3"
                          />
                          <div>
                            <h3>Linda Roberts</h3>
                            <h4>Kidney Disease Awareness Advocate</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>
                            "This center helped me understand how to manage my kidney disease. The information, support
                            groups, and resources were invaluable in my journey to better health."
                          </span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                      </div>
                    </div>
                    {/* End testimonial item */}
                    {/* Testimonial 4 */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="d-flex">
                          <img
                            src="assets/img/testimonials/testimonials-4.jpg"
                            className="testimonial-img flex-shrink-0"
                            alt="Patient 4"
                          />
                          <div>
                            <h3>Dr. Mike Thompson</h3>
                            <h4>Nephrologist</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>
                            "I trust this center to provide high-quality care for kidney patients. Their approach to
                            patient treatment and the latest research makes a real difference in improving lives."
                          </span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                      </div>
                    </div>
                    {/* End testimonial item */}
                    {/* Testimonial 5 */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="d-flex">
                          <img
                            src="assets/img/testimonials/testimonials-5.jpg"
                            className="testimonial-img flex-shrink-0"
                            alt="Patient 5"
                          />
                          <div>
                            <h3>George Carter</h3>
                            <h4>Post-Dialysis Care Patient</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>
                            "I’ve been receiving post-dialysis care for months, and the experience has been amazing. The
                            staff is knowledgeable and always ready to answer any questions I have. Highly recommend."
                          </span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                      </div>
                    </div>
                    {/* End testimonial item */}
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Testimonials Section */}
        {/* Gallery Section */}
        <section id="gallery" className="gallery section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Gallery</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          {/* End Section Title */}
          <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
            <div className="row g-0">
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-1.jpg" className="glightbox" data-gallery="images-gallery">
                    <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-2.jpg" className="glightbox" data-gallery="images-gallery">
                    <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-3.jpg" className="glightbox" data-gallery="images-gallery">
                    <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-4.jpg" className="glightbox" data-gallery="images-gallery">
                    <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-5.jpg" className="glightbox" data-gallery="images-gallery">
                    <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-6.jpg" className="glightbox" data-gallery="images-gallery">
                    <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-7.jpg" className="glightbox" data-gallery="images-gallery">
                    <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-8.jpg" className="glightbox" data-gallery="images-gallery">
                    <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              {/* End Gallery Item */}
            </div>
          </div>
        </section>
        {/* /Gallery Section */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          {/* End Section Title */}
          <div className="mb-5" data-aos="fade-up" data-aos-delay={200}>
            <iframe
              style={{ border: 0, width: '100%', height: 270 }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              frameBorder={0}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* End Google Maps */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>Location</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
                  <i className="bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={500}>
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
              <div className="col-lg-8">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                    </div>
                    <div className="col-md-6 ">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                    </div>
                    <div className="col-md-12">
                      <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        required=""
                        defaultValue={''}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
        {/* /Contact Section */}
      </main>
    </>
  );
}

export default App;
