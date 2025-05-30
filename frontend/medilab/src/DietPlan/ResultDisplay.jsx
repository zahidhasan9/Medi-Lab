// components/ResultDisplay.jsx
import { calculateBMI, calculateCalorie, generateMealPlan } from './DietLogic';
import html2pdf from 'html2pdf.js';

export default function ResultDisplay({ data, onBack }) {
  const bmi = calculateBMI(data.weight, data.height);
  const calorie = calculateCalorie(data);
  const plan = generateMealPlan({
    calorie,
    foodType: data.preference,
    allergies: data.allergies,
    conditions: data.conditions
  });

  const handleDownload = () => {
    const element = document.getElementById('plan');
    html2pdf().from(element).save('diet-plan.pdf');
  };

  return (
    <div className="bg-white p-6 rounded shadow" id="plan">
      <h2 className="text-xl font-bold mb-4">Your Diet Plan</h2>
      <p>
        <strong>BMI:</strong> {bmi}
      </p>
      <p>
        <strong>Daily Calories:</strong> {calorie} kcal
      </p>
      <div className="mt-4">
        {Object.keys(plan).map((meal) => (
          <div key={meal} className="mb-2">
            <h3 className="font-semibold capitalize">{meal}</h3>
            <ul className="list-disc ml-6">
              {plan[meal].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <button onClick={handleDownload} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Download PDF
        </button>
        <button onClick={onBack} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Back
        </button>
      </div>
    </div>
  );
}
