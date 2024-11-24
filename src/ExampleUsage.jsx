import React from 'react';
import MealRecipe from './MealRecipe';

const ExampleUsage = () => {
  // Mock data for testing
  const mockMeal = {
    strMeal: 'Tunisian Lamb with Saffron',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg',
    strInstructions:
      'Heat vegetable oil in a large frying pan over medium-high heat. Add the lamb and cook until browned on all sides, about 5 minutes. Season with saffron, salt and pepper to taste; stir in all but 4 tablespoons of the onion, and pour in the water. Bring to the boil, then cover, reduce heat to medium-low, and simmer until the lamb is tender, about 15 minutes.\nUncover the pan, stir in the butter and allow the sauce reduce 5 to 10 minutes to desired consistency. Season to taste with salt and pepper, then pour into a serving dish. Sprinkle with the remaining chopped onions and parsley. Garnish with lemon wedges to serve.',
    strTags: null,
    strYoutube: 'https://www.youtube.com/watch?v=u_OSIChzuL0',
    strSource:
      'http://allrecipes.co.uk/recipe/43723/keleya-zaara-tunisian-lamb-with-saffron.aspx',
    strIngredient1: 'Olive Oil',
    strIngredient2: 'Lamb',
    strIngredient3: 'Saffron',
    strIngredient4: 'Onion',
    strIngredient5: 'Water',
    strIngredient6: 'Parsley',
    strIngredient7: 'Butter',
    strIngredient8: 'Lemon',
    strMeasure1: '4 tbs',
    strMeasure2: '750g',
    strMeasure3: '1 1/2 tsp',
    strMeasure4: '1 Large Chopped',
    strMeasure5: '25 ml',
    strMeasure6: '30g',
    strMeasure7: '1 tbs',
    strMeasure8: '1',
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Example Usage of MealRecipe</h2>
      <MealRecipe meal={mockMeal} />
    </div>
  );
};

export default ExampleUsage;
