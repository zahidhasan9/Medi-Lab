// components/InputForm.jsx
import { useState } from 'react';

const goals = ['Lose', 'Gain', 'Maintain'];
const genders = ['Male', 'Female'];
const preferences = ['Vegetarian', 'Non-Vegetarian', 'Vegan'];
const activityLevels = ['Sedentary', 'Moderate', 'Active'];
const conditions = ['Diabetes', 'High BP', 'Heart Disease'];

export default function InputForm({ onSubmit }) {
  const [form, setForm] = useState({
    age: '',
    weight: '',
    height: '',
    goal: '',
    gender: '',
    preference: '',
    allergies: '',
    conditions: [],
    activity: '',
    meals: 3
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        conditions: checked ? [...prev.conditions, value] : prev.conditions.filter((c) => c !== value)
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="grid gap-4 bg-white p-6 rounded shadow" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <input name="age" type="number" placeholder="Age" className="input" onChange={handleChange} required />
        <input
          name="weight"
          type="number"
          placeholder="Weight (kg)"
          className="input"
          onChange={handleChange}
          required
        />
        <input
          name="height"
          type="number"
          placeholder="Height (cm)"
          className="input"
          onChange={handleChange}
          required
        />
        <select name="goal" className="input" onChange={handleChange} required>
          <option value="">Select Goal</option>
          {goals.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
        <select name="gender" className="input" onChange={handleChange} required>
          <option value="">Select Gender</option>
          {genders.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
        <select name="preference" className="input" onChange={handleChange} required>
          <option value="">Food Preference</option>
          {preferences.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
        <select name="activity" className="input" onChange={handleChange} required>
          <option value="">Activity Level</option>
          {activityLevels.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
        <input
          name="meals"
          type="number"
          min="3"
          max="6"
          placeholder="Meals/Day"
          className="input"
          onChange={handleChange}
          required
        />
      </div>

      <textarea name="allergies" placeholder="Allergies (comma separated)" className="input" onChange={handleChange} />

      <div className="flex gap-4">
        {conditions.map((c) => (
          <label key={c} className="flex gap-1">
            <input type="checkbox" name="conditions" value={c} onChange={handleChange} /> {c}
          </label>
        ))}
      </div>

      <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Generate Plan</button>
    </form>
  );
}
