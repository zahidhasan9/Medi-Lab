import React from 'react';
import aboutImg from '../assets/img/about.jpg';
import aboutImg2 from '../assets/img/about2.jpg';
const about = () => {
  return (
    <div>
      {/* Combined Horizontal About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4 gx-5">
            {/* First About Block */}
            <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay={200}>
              <img src={aboutImg} className="img-fluid rounded shadow" alt="About Kidney Health" />
              <a href="https://www.youtube.com/watch?v=FN3MFhYPWWo" className="glightbox pulsating-play-btn" />
            </div>
            {/* Second About Block */}
            <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay={200}>
              <img src={aboutImg2} className="img-fluid rounded shadow" alt="Kidney Video" />
              <a href="https://www.youtube.com/watch?v=CShAIAD-ask" className="glightbox pulsating-play-btn" />
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-us"
        style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #eaf6ff, #f4faff)',
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: 'auto',
            background: '#ffffff',
            borderRadius: 20,
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            padding: '60px 40px',
            textAlign: 'center'
          }}
        >
          <h2 style={{ fontSize: '2.8em', color: '#1b3c74', marginBottom: 20 }}>About Us</h2>
          <p
            style={{
              fontSize: '1.2em',
              color: '#444',
              lineHeight: '1.8',
              marginBottom: 25
            }}
          >
            <strong style={{ color: '#4c91f2' }}>Renal Health Portal</strong> is a student-driven initiative focused on
            spreading awareness about kidney health and helping people take better care of their kidneys. We believe
            education can empower prevention and early treatment.
          </p>
          <p
            style={{
              fontSize: '1.2em',
              color: '#444',
              lineHeight: '1.8',
              marginBottom: 25
            }}
          >
            Our platform provides{' '}
            <span style={{ color: '#1b3c74', fontWeight: 600 }}>simple, medically reviewed content</span> on kidney
            diseases and offers tools to help users connect with certified nephrologists, hospitals, and emergency care
            services across regions.
          </p>
          <p style={{ fontSize: '1.2em', color: '#444', lineHeight: '1.8' }}>
            This portal is proudly developed as a final-year{' '}
            <span style={{ color: '#4c91f2', fontWeight: 600 }}>Computer Science project</span> to make kidney
            healthcare knowledge accessible for all. Whether you’re here to learn, find help, or support someone—you're
            in the right place.
          </p>
        </div>
      </section>
    </div>
  );
};

export default about;
