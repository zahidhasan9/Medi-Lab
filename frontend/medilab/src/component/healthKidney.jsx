import { useInView } from 'react-intersection-observer';

function HealthOfKidney() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const sections = [
    {
      title: '1. Chronic Kidney Disease (CKD)',
      content:
        'Chronic Kidney Disease is a condition where kidney function gradually declines. It can be caused by diabetes, high blood pressure, or genetic factors. Symptoms include fatigue, swelling, and urination issues.',
      image: 'https://www.carehospitals.com/ckfinder/userfiles/images/chronic-kidney-disease.webp',
      alt: 'Illustration of chronic kidney disease'
    },
    {
      title: '2. Kidney Stones',
      content:
        'Kidney stones are hard deposits of minerals and salts that form in the kidneys. They cause severe pain, blood in urine, and infections. Drinking plenty of water and dietary changes can help prevent them.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcC4Zp3Uhbwl38R2dgcXLSKkWZGckMNkxlw&s',
      alt: 'Illustration of kidney stones'
    },
    {
      title: '3. Kidney Infection',
      content:
        'Kidney infections are typically caused by bacteria spreading from the urinary tract. Symptoms include fever, back pain, and urinary issues. Treatment involves antibiotics.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNnWP0zA647JYPypgPPY9IM_Gav8smWp_iw&s',
      alt: 'Illustration of kidney infection'
    },
    {
      title: '4. Kidney Failure',
      content:
        'Kidney failure occurs when kidneys can no longer filter blood effectively. It can be acute or chronic. Treatments include dialysis or kidney transplantation.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8k__pqvKsX2AgXtsUpH5_UpfNz1V5lPOIA&s',
      alt: 'Illustration of kidney failure'
    },
    {
      title: '5. Kidney Disease Treatments',
      content:
        'Treatments for kidney diseases include medications, dialysis, and transplantation. Lifestyle changes, such as a healthy diet and exercise, can improve kidney health.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlzpgYrnd_kslhik_k_teWzF17FrB5ON5iA&s',
      alt: 'Illustration of kidney disease treatments'
    },
    {
      title: '6. Kidney Stones',
      content:
        'Kidney stones are hard deposits of minerals and salts that form in the kidneys. They cause severe pain, blood in urine, and infections. Drinking plenty of water and dietary changes can help prevent them.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcC4Zp3Uhbwl38R2dgcXLSKkWZGckMNkxlw&s',
      alt: 'Illustration of kidney stones'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                <img src={section.image} alt={section.alt} className="w-full h-52 object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{section.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{section.content}</p>
                  <button className="self-start bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                    Explore Treatments
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HealthOfKidney;
