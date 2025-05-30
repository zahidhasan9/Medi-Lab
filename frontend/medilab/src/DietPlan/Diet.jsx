// Diet.jsx
import { useState } from 'react';
import DietForm from './DietForm';
import ResultDisplay from './ResultDisplay';

function Diet() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Smart Diet Plan Generator</h1>
      <div className="max-w-4xl mx-auto">
        {!userData ? (
          <DietForm onSubmit={setUserData} />
        ) : (
          <ResultDisplay data={userData} onBack={() => setUserData(null)} />
        )}
      </div>
    </div>
  );
}

export default Diet;
