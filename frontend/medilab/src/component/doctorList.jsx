import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAppointment } from '../features/appointmentSlice';
import { getallDoctor } from '../features/doctorSlice';

import doc1Img from '../assets/img/doctors/doctors-1.jpg';
import doc2Img from '../assets/img/doctors/doctors-2.jpg';
import doc3Img from '../assets/img/doctors/doctors-3.jpg';
import doc4Img from '../assets/img/doctors/doctors-4.jpg';

const doctorsData = [
  {
    name: 'Dr. John Doe',
    title: 'Senior Nephrologist',
    description:
      'With over 15 years of experience, Dr. John specializes in chronic kidney disease management and dialysis treatments.',
    img: doc1Img,
    email: 'dr.john@example.com',
    phone: '+1234567890',
    linkedin: '#'
  },
  {
    name: 'Dr. Emily White',
    title: 'Kidney Transplant Specialist',
    description:
      'Dr. White has expertise in kidney transplants, guiding patients from the assessment process to post-surgery care.',
    img: doc2Img,
    email: 'dr.emily@example.com',
    phone: '+1234567891',
    linkedin: '#'
  },
  {
    name: 'Dr. Sarah Taylor',
    title: 'Dialysis Expert',
    description:
      'Dr. Taylor is an expert in managing dialysis for patients with end-stage renal disease and offers personalized treatment plans.',
    img: doc3Img,
    email: 'dr.sarah@example.com',
    phone: '+1234567892',
    linkedin: '#'
  },
  {
    name: 'Dr. Michael Brown',
    title: 'Kidney Disease Specialist',
    description:
      'Dr. Brown specializes in diagnosing and managing various types of kidney diseases, including glomerulonephritis and polycystic kidney disease.',
    img: doc4Img,
    email: 'dr.michael@example.com',
    phone: '+1234567893',
    linkedin: '#'
  }
];

const Doctor = () => {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.doctor);
  console.log('doc', doctors);

  useEffect(() => {
    dispatch(getallDoctor());
  }, [dispatch]);

  return (
    <div>
      {/* Doctors Section */}
      <section id="doctors" className="doctors section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Kidney Specialists</h2>
          <p>
            Meet our experienced nephrologists and kidney health experts who are committed to providing the best care
            for your kidney health.
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {doctors.map((doctor, index) => (
              <div key={index} className="col-lg-6" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                <div className="team-member d-flex align-items-start">
                  <div className="pic">
                    <img src={doctor.img} className="img-fluid" alt={doctor.name} />
                  </div>
                  <div className="member-info">
                    <h4>{doctor.name}</h4>
                    <span>{doctor.specialization}</span>
                    <p>{doctor.degree}</p>
                    <p>{doctor.bmdc_no}</p>
                    <p>{doctor.hospital}</p>
                    <p>{doctor.location}</p>
                    <p>{doctor.visiting_Hours}</p>
                    <p>{doctor.phone}</p>
                    {/* <div className="social">
                      <a href={`mailto:${doctor.email}`}>
                        <i className="bi bi-envelope" />
                      </a>
                      <a href={`tel:${doctor.phone}`}>
                        <i className="bi bi-phone" />
                      </a>
                      <a href={doctor.linkedin}>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
