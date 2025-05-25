import React, { useState } from 'react';

const faqData = [
  {
    question: 'What are the early symptoms of kidney disease?',
    answer:
      'Early symptoms can be subtle and include fatigue, swelling in the legs or feet, changes in urination, or trouble concentrating. Regular checkups are important to detect kidney issues early.'
  },
  {
    question: 'How can I keep my kidneys healthy?',
    answer:
      "Stay hydrated, maintain a balanced diet low in salt, manage blood pressure and diabetes, avoid smoking, and get regular kidney function tests if you're at risk."
  },
  {
    question: 'What is chronic kidney disease (CKD)?',
    answer:
      'CKD is a long-term condition where the kidneys lose function over time. It often progresses slowly and may not show symptoms until advanced stages. Managing risk factors can slow its progression.'
  },
  {
    question: 'Is dialysis the only option if my kidneys fail?',
    answer:
      "No. While dialysis is a common treatment for kidney failure, kidney transplant is another option. In some cases, conservative care without dialysis may also be considered depending on the patient's condition and choices."
  },
  {
    question: 'Can I donate a kidney while I’m alive?',
    answer:
      'Yes. Living kidney donation is possible and many people live healthy lives with one kidney. Donors undergo evaluations to ensure they’re healthy enough to donate safely.'
  },
  {
    question: 'I still have questions. Can I chat with a kidney health assistant?',
    answer: (
      <>
        Absolutely!{' '}
        <a href="#chatbot" className="chat-link">
          Click here to chat
        </a>{' '}
        with our virtual kidney assistant and get answers in real time.
      </>
    ),
    icon: 'bi-chat-dots'
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <section id="faq" className="faq section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>Get answers to common questions about kidney health, treatment options, and lifestyle management.</p>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay={100}>
              <div className="faq-container">
                {faqData.map((item, index) => (
                  <div
                    className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                    key={index}
                    onClick={() => toggleFaq(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h3>{item.question}</h3>
                    <div className="faq-content" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                      <p>{item.answer}</p>
                    </div>
                    <i className={`faq-toggle bi ${item.icon || 'bi-chevron-right'}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
