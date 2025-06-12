import React from 'react';

const contact = () => {
  return (
    <div>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.785152460683!2d90.3515819697754!3d23.80272420000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0dc71152879%3A0x2046685ec015f326!2sKidney%20Foundation%20Bangladesh!5e0!3m2!1sen!2sbd!4v1748773615221!5m2!1sen!2sbd"
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
                  <p>Dhaka 1212</p>
                </div>
              </div>
              {/* End Info Item */}
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
                <i className="bi bi-telephone flex-shrink-0" />
                <div>
                  <h3>Call Us</h3>
                  <p>+880124885697</p>
                </div>
              </div>
              {/* End Info Item */}
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={500}>
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h3>Email Us</h3>
                  <p>medilab@example.com</p>
                </div>
              </div>
              {/* End Info Item */}
            </div>
          </div>
        </div>
      </section>
      {/* /Contact Section */}
    </div>
  );
};

export default contact;
