import React from 'react';

const footer = () => {
  return (
    <div>
      <footer id="footer" className="footer light-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Renal Health Portal</span>
              </a>
              <div className="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>afiaanjum52@gmail.com</span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/myappointment">Appointment Find</a>
                </li>
                <li>
                  <a href="/donorlist">Find Donor</a>
                </li>
                <li>
                  <a href="/doctors">Find Doctors</a>
                </li>
                <li>
                  <a href="/hospital">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">Renal Health Portal || Afia Anjum</strong>{' '}
            <span>All Rights Reserved 2025</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default footer;
