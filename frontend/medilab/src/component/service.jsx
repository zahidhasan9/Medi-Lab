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
        <div className="container cursor-pointer">
          <div className="row gy-4">
            <a href="/learn"></a>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fas fa-book-medical" />
                </div>

                <h3>Kidney Education</h3>

                <p>Explore simple, verified content about kidney diseases, treatment options, and prevention tips.</p>
              </div>
              <a />
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <a href="/doctors">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-user-md" />
                  </div>

                  <h3>Find Nephrologists</h3>

                  <p>Connect with licensed kidney specialists near your location for consultation and care.</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
              <a href="/donorlist">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i class="bi bi-search-heart"></i>
                  </div>

                  <h3>Find Donor</h3>

                  <p>
                    Get real-time access to nearby hospitals and emergency care centers specializing in kidney health.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
              <a href="/hospital">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-clinic-medical" />
                  </div>

                  <h3>Locate Kidney Clinics</h3>

                  <p>Use our map to find kidney care centers, dialysis units, and specialty clinics near you.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default service;
