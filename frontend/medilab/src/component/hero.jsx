import React from 'react';
import heroImg from '../assets/img/hero-bg.jpg';

const hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="hero section light-background">
        <img src={heroImg} alt="" data-aos="fade-in" />
        <div className="container position-relative">
          <div className="welcome position-relative" data-aos="fade-down" data-aos-delay={100}>
            <h2>WELCOME To Renal Health Portal</h2>
            <p>Your Trusted Guide to Kidney Health. Learn, Prevent &amp; Connect with Kidney Specialists Near You.</p>
          </div>
          {/* End Welcome */}
          <div className="content row gy-4">
            <div className="content row gy-4">
              {/* Left Side: Why Box */}
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="why-box" data-aos="zoom-out" data-aos-delay={200}>
                  <h3>Why Choose Renal Health Portal?</h3>
                  <p>
                    We offer clear, medically reviewed information about kidney health, diseases, prevention, and
                    treatment.
                    <br />
                    <br />
                    Quickly connect with certified nephrologists near you and find emergency kidney care when time
                    matters most.
                    <br />
                    <br />
                    Our mission is to make kidney health education and support easy, free, and available to everyone —
                    no sign-up needed.
                  </p>
                  <div className="text-center">
                    <a href="#about" className="more-btn">
                      <span>Learn More</span> <i className="bi bi-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Right Side: Icon Boxes */}
              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="d-flex flex-column justify-content-center w-100">
                  <div className="row gy-4">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box" data-aos="zoom-out" data-aos-delay={300}>
                        <i className="bi bi-clipboard-data" />
                        <h4>Trusted Info</h4>
                        <p>Kidney health resources reviewed by medical experts.</p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box" data-aos="zoom-out" data-aos-delay={400}>
                        <i className="bi bi-gem" />
                        <h4>Find Doctors</h4>
                        <p>Search certified nephrologists and kidney specialists.</p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box" data-aos="zoom-out" data-aos-delay={500}>
                        <i className="bi bi-inboxes" />
                        <h4>Emergency Help</h4>
                        <p>Instant access to nearby hospitals and urgent care.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default hero;
