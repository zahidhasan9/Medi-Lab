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

export function distributeCalories(total) {
  return {
    breakfast: Math.round(total * 0.25),
    lunch: Math.round(total * 0.4),
    dinner: Math.round(total * 0.35)
  };
}

const meals = {
  Vegetarian: {
    breakfast: [
      { item: 'Oats with almond milk', cal: 250 },
      { item: 'Apple', cal: 95 },
      { item: 'Boiled egg', cal: 78 }
    ],
    lunch: [
      { item: 'Brown rice', cal: 215 },
      { item: 'Lentil soup', cal: 180 },
      { item: 'Grilled vegetables', cal: 120 }
    ],
    dinner: [
      { item: 'Chapati', cal: 130 },
      { item: 'Paneer curry', cal: 220 },
      { item: 'Cucumber salad', cal: 40 }
    ]
  },
  'Non-Vegetarian': {
    breakfast: [
      { item: 'Eggs with toast', cal: 220 },
      { item: 'Banana', cal: 105 },
      { item: 'Milk', cal: 120 }
    ],
    lunch: [
      { item: 'Chicken curry', cal: 300 },
      { item: 'White rice', cal: 240 },
      { item: 'Vegetables', cal: 90 }
    ],
    dinner: [
      { item: 'Grilled fish', cal: 250 },
      { item: 'Chapati', cal: 130 },
      { item: 'Soup', cal: 100 }
    ]
  },
  Vegan: {
    breakfast: [
      { item: 'Chia pudding', cal: 180 },
      { item: 'Berries', cal: 70 },
      { item: 'Green smoothie', cal: 150 }
    ],
    lunch: [
      { item: 'Tofu stir-fry', cal: 250 },
      { item: 'Quinoa', cal: 220 },
      { item: 'Salad', cal: 80 }
    ],
    dinner: [
      { item: 'Lentil soup', cal: 200 },
      { item: 'Whole grain bread', cal: 160 },
      { item: 'Steamed broccoli', cal: 60 }
    ]
  }
};

function containsAllergen(item, allergyList) {
  const allergens = allergyList.map((a) => a.toLowerCase());
  return allergens.some((a) => item.item.toLowerCase().includes(a));
}

function isDiabeticFriendly(item) {
  const restricted = ['sugar', 'banana', 'white rice', 'syrup'];
  return !restricted.some((bad) => item.item.toLowerCase().includes(bad));
}

export function generateMealPlan({ calorie, foodType, allergies = '', conditions = [] }) {
  const calorieSplit = distributeCalories(calorie);
  let rawPlan = meals[foodType];

  const allergyList = allergies
    ? allergies
        .toLowerCase()
        .split(',')
        .map((a) => a.trim())
    : [];

  const mealPlan = {};

  for (let meal in rawPlan) {
    let filtered = rawPlan[meal];

    if (conditions.includes('Diabetes')) {
      filtered = filtered.filter(isDiabeticFriendly);
    }

    if (allergyList.length > 0) {
      filtered = filtered.filter((item) => !containsAllergen(item, allergyList));
    }

    // Limit to total calories of that meal
    let finalItems = [];
    let totalCal = 0;
    for (let i = 0; i < filtered.length; i++) {
      if (totalCal + filtered[i].cal <= calorieSplit[meal]) {
        finalItems.push(filtered[i]);
        totalCal += filtered[i].cal;
      }
    }

    mealPlan[meal] = finalItems;
  }

  return mealPlan;
}

export function totalCalories(mealPlan) {
  return Object.values(mealPlan)
    .flat()
    .reduce((sum, item) => sum + (item.cal || 0), 0);
}
