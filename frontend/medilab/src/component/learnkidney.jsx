import { useInView } from 'react-intersection-observer';

// LearnKidney component for educational content about kidneys
function LearnKidney() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const sections = [
    {
      title: '1. Kidney Anatomy',
      content:
        'The kidneys are two bean-shaped organs located on either side of the spine, below the rib cage. Each kidney is about the size of a fist and consists of an outer cortex and an inner medulla. The nephron, the functional unit, filters blood to remove waste.',
      image: 'https://www.news-medical.net/image-handler/picture/2018/10/shutterstock_1027902178.jpg',
      alt: 'Medical diagram of kidney anatomy'
    },
    {
      title: '2. Kidney Functions',
      content:
        'Kidneys filter about 180 liters of blood daily, removing waste and excess water to form urine. They regulate electrolytes, blood pressure, and red blood cell production, maintaining overall body homeostasis.',
      image: 'https://cdn1.byjus.com/wp-content/uploads/2022/06/kidney-diagram.png',
      alt: 'Illustration of kidney filtration process'
    },
    {
      title: '3. Kidney Structure',
      content:
        'Each kidney contains over a million nephrons, which filter blood. Nephrons consist of a glomerulus and tubule, working together to remove toxins and excess substances from the body.',
      image: 'https://www.kcuk.org.uk/wp-content/uploads/2022/03/diagramofkidneys.jpg',
      alt: 'Diagram of nephron structure'
    },
    {
      title: '4. Kidneys and Hormones',
      content:
        'Kidneys produce erythropoietin, a hormone that stimulates red blood cell production. They also release renin, which helps regulate blood pressure.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrP3SVxX6XhR99W-DNmrDSE9BBgfVctH__PQ&s',
      alt: 'Visual of hormone production in kidneys'
    },
    {
      title: '5. Importance of Kidneys',
      content:
        'Kidneys are vital for removing waste, balancing fluids, and maintaining acid-base balance. Without them, toxins can accumulate, leading to serious health issues.',
      image: 'https://www.homeocare.in/articles/wp-content/uploads/2017/09/Importance-of-Kidneys.jpg',
      alt: 'Representation of kidney importance'
    },
    {
      title: '6. Kidney Structure',
      content:
        'Each kidney contains over a million nephrons, which filter blood. Nephrons consist of a glomerulus and tubule, working together to remove toxins and excess substances from the body.',
      image: 'https://www.kcuk.org.uk/wp-content/uploads/2022/03/diagramofkidneys.jpg',
      alt: 'Diagram of nephron structure'
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

export default LearnKidney;
