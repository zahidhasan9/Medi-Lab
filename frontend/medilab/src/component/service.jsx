import React from 'react';

const service = () => {
  return (
    <div>
      {/* Services Section */}
      <section id="services" className="services section" style={{ padding: '60px 0' }}>
        <div className="container section-title" data-aos="fade-up" style={{ textAlign: 'center' }}>
          <h2>Our Services</h2>
          <p>Everything you need to support your kidney health journey — from education to emergency help.</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fas fa-book-medical" />
                </div>
                <h3>Kidney Education</h3>
                <p>Explore simple, verified content about kidney diseases, treatment options, and prevention tips.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fas fa-user-md" />
                </div>
                <h3>Find Nephrologists</h3>
                <p>Connect with licensed kidney specialists near your location for consultation and care.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fas fa-ambulance" />
                </div>
                <h3>Emergency Services</h3>
                <p>
                  Get real-time access to nearby hospitals and emergency care centers specializing in kidney health.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fas fa-comments-medical" />
                </div>
                <h3>Live Chat &amp; Support</h3>
                <p>Need help or have questions? Our virtual assistant and team support you 24/7.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fas fa-clinic-medical" />
                </div>
                <h3>Locate Kidney Clinics</h3>
                <p>Use our map to find kidney care centers, dialysis units, and specialty clinics near you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default service;
