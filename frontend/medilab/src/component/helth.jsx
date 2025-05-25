import React, { useState } from 'react';
import Nephrology from '../assets/img/nephrology.jpg';
import Dialysis from '../assets/img/dialysis.jpg';
import kidneyTransplant from '../assets/img/kidney-transplant.jpg';
import kidneyDiagnosis from '../assets/img/kidney-diagnosis.jpg';
import emergencyCare from '../assets/img/emergency-care.jpg';
const departments = [
  {
    id: 'nephrology',
    title: 'Nephrology',
    icon: 'bi-heart-pulse',
    image: Nephrology,
    shortDesc: 'Specialized care for chronic kidney diseases, including prevention, diagnosis, and management.',
    longDesc:
      'Our nephrologists provide expert care for individuals with kidney diseases. From monitoring kidney function to diagnosing early-stage conditions, our team helps you manage your health.'
  },
  {
    id: 'dialysis',
    title: 'Dialysis',
    icon: 'bi-droplet-half',
    image: Dialysis,
    shortDesc: 'Comprehensive dialysis services for patients with kidney failure.',
    longDesc:
      'Dialysis is a life-saving treatment for individuals with kidney failure. Our specialized teams offer hemodialysis and peritoneal dialysis in a comfortable and caring environment.'
  },
  {
    id: 'transplant',
    title: 'Kidney Transplantation',
    icon: 'bi-archive',
    image: kidneyTransplant,
    shortDesc: 'Guidance and expert care throughout the kidney transplant process.',
    longDesc:
      'We provide comprehensive care for patients considering or undergoing a kidney transplant. Our transplant team works closely with patients and their families, ensuring the best possible outcomes.'
  },
  {
    id: 'diagnosis',
    title: 'Kidney Disease Diagnosis',
    icon: 'bi-file-earmark-medical',
    image: kidneyDiagnosis,
    shortDesc: 'Accurate diagnostic testing to detect kidney diseases early.',
    longDesc:
      'Early diagnosis of kidney diseases is crucial for effective treatment. Our diagnostic services include lab tests, imaging, and screenings to catch potential problems at the earliest stages.'
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    icon: 'bi-plus-circle',
    image: emergencyCare,
    shortDesc: 'Quick access to emergency kidney care when you need it the most.',
    longDesc:
      'In emergencies, time is critical. Our emergency care department ensures fast access to kidney specialists and treatment facilities to manage acute kidney problems effectively.'
  }
];

const KidneyDepartments = () => {
  const [activeTab, setActiveTab] = useState(departments[0].id);

  return (
    <section id="departments" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">Our Kidney Health Departments</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore the specialized areas of kidney health care, from prevention to treatment, diagnosis, and emergency
            care.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs */}
          <div className="lg:w-1/4">
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept.id}>
                  <button
                    onClick={() => setActiveTab(dept.id)}
                    className={`w-full px-4 py-3 rounded-lg font-medium flex items-center transition-all duration-200 ${
                      activeTab === dept.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-800 hover:bg-blue-100 border'
                    }`}
                  >
                    <i className={`bi ${dept.icon} mr-3 text-lg`}></i>
                    {dept.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="lg:w-3/4 bg-white p-8 rounded-xl shadow-md">
            {departments.map(
              (dept) =>
                activeTab === dept.id && (
                  <div key={dept.id} className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold text-blue-700 flex items-center mb-2">
                        <i className={`bi ${dept.icon} mr-2 text-xl`}></i>
                        {dept.title}
                      </h3>
                      <p className="text-gray-500 italic">{dept.shortDesc}</p>
                      <p className="mt-4 text-gray-700 leading-relaxed">{dept.longDesc}</p>
                    </div>
                    <div className="md:w-1/3">
                      <img
                        src={dept.image}
                        alt={dept.title}
                        className="w-full h-auto rounded-lg border border-gray-200"
                      />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidneyDepartments;
