// utils/dietLogic.js
export function calculateBMI(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

export function calculateCalorie({ age, weight, height, gender, activity, goal }) {
  let bmr = gender === 'Male' ? 10 * weight + 6.25 * height - 5 * age + 5 : 10 * weight + 6.25 * height - 5 * age - 161;

  const multiplier = {
    Sedentary: 1.2,
    Moderate: 1.55,
    Active: 1.725
  };

  let cal = bmr * multiplier[activity];
  if (goal === 'Lose') cal -= 500;
  if (goal === 'Gain') cal += 500;

  return Math.round(cal);
}

export function generateMealPlan({ calorie, foodType, allergies, conditions }) {
  const base = {
    Vegetarian: {
      breakfast: ['Oats', 'Fruit', 'Almond milk'],
      lunch: ['Rice', 'Dal', 'Vegetables'],
      dinner: ['Chapati', 'Paneer', 'Salad']
    },
    'Non-Vegetarian': {
      breakfast: ['Eggs', 'Toast', 'Banana'],
      lunch: ['Chicken', 'Rice', 'Veggies'],
      dinner: ['Fish', 'Bread', 'Soup']
    },
    Vegan: {
      breakfast: ['Chia pudding', 'Fruit'],
      lunch: ['Tofu stir fry', 'Quinoa'],
      dinner: ['Veg soup', 'Whole grain toast']
    }
  };

  let plan = base[foodType];

  if (conditions.includes('Diabetes')) {
    for (let meal in plan) {
      plan[meal] = plan[meal].filter(
        (item) =>
          !item.toLowerCase().includes('sugar') &&
          !item.toLowerCase().includes('banana') &&
          !item.toLowerCase().includes('white')
      );
    }
  }

  if (allergies) {
    const list = allergies
      .toLowerCase()
      .split(',')
      .map((a) => a.trim());
    for (let meal in plan) {
      plan[meal] = plan[meal].filter((item) => !list.some((allergy) => item.toLowerCase().includes(allergy)));
    }
  }

  return plan;
}
