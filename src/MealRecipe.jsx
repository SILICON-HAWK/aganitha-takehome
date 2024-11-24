import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from './api';

const MealRecipe = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const mealData = await getMealById(idMeal);
        setMeal(mealData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching meal details:', error);
        setLoading(false);
      }
    };

    fetchMeal();
  }, [idMeal]);

  if (loading) {
    return <p className="text-gray-600 text-center mt-20">Loading recipe...</p>;
  }

  if (!meal) {
    return <p className="text-gray-600 text-center mt-20">Meal not found.</p>;
  }

  return (
    <>
      <div className="bg-amber-50">
        <div className="max-w-[800px] mx-auto p-8 mt-20">
          <h1 className="text-4xl font-bold mb-5 text-orange-500">
            {meal.strMeal}
          </h1>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="max-w-[30vh] mb-6"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
              <strong className="font-bold">Category:</strong>{' '}
              {meal.strCategory}
            </div>
            <div>
              <strong className="font-bold">Area:</strong> {meal.strArea}
            </div>
            <div>
              <strong className="font-bold">Tags:</strong> {meal.strTags}
            </div>
          </div>

          <div className="my-3">
            <p>{meal.strInstructions}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
              <ul>
                {Object.keys(meal)
                  .filter((key) => key.startsWith('strIngredient') && meal[key])
                  .map((ingredient, index) => (
                    <li key={index}>
                      {meal[ingredient]} - {meal[`strMeasure${index + 1}`]}
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Measures</h2>
              <ul>
                {Object.keys(meal)
                  .filter((key) => key.startsWith('strMeasure') && meal[key])
                  .map((measure, index) => (
                    <li key={index}>{meal[measure]}</li>
                  ))}
              </ul>
            </div>
            <div className="mt-4">
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              >
                Watch on YouTube
              </a>
              <a
                href={meal.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
              >
                View Original Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealRecipe;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // Import useParams to get the meal ID from the URL
// import { getMealById } from './api'; // Assuming you have a function to fetch the meal by its ID

// const MealRecipe = () => {
//   const [meal, setMeal] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { idMeal } = useParams(); // Get the meal ID from the URL parameters

//   useEffect(() => {
//     const fetchMeal = async () => {
//       try {
//         const mealData = await getMealById(idMeal); // Fetch meal data by its ID
//         setMeal(mealData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching meal details:', error);
//         setLoading(false);
//       }
//     };

//     fetchMeal(); // Fetch the meal details on component mount
//   }, [idMeal]); // Rerun the effect if the idMeal changes (in case of route change)

//   if (loading) {
//     return <p>Loading recipe...</p>; // Show loading while the meal is being fetched
//   }

//   if (!meal) {
//     return <p>Meal not found.</p>; // In case of an error or no meal found
//   }

//   return (
//     <div className="meal-recipe">
//       <h1>{meal.strMeal}</h1>
//       <img src={meal.strMealThumb} alt={meal.strMeal} />
//       <h2>Ingredients</h2>
//       <ul>
//         {Object.keys(meal)
//           .filter((key) => key.startsWith('strIngredient') && meal[key])
//           .map((ingredient, index) => (
//             <li key={index}>
//               {meal[ingredient]} - {meal[`strMeasure${index + 1}`]}
//             </li>
//           ))}
//       </ul>
//       <h2>Instructions</h2>
//       <p>{meal.strInstructions}</p>
//       <h2>Video</h2>
//       <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
//         Watch on YouTube
//       </a>
//     </div>
//   );
// };

// export default MealRecipe;
