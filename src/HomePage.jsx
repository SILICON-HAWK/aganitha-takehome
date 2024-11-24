import React, { useState } from 'react';
import { getMealsByIngredient } from './api';
import NavBar from './NavBar';
import MealCard from './MealCard';
import MealRecipe from './MealRecipe'; // Import the MealRecipe component
import { Routes, Route, Outlet } from 'react-router-dom'; // Import Routes and Route for routing

const HomePage = () => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async (ingredient) => {
    try {
      const fetchedMeals = await getMealsByIngredient(ingredient);
      setMeals(fetchedMeals || []);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  return (
    <div className="bg-amber-50 h-screen">
      <NavBar onSearch={fetchMeals} />
      <Routes>
        <Route
          index
          element={
            <div className="flex flex-wrap justify-center mt-20 max-w-70vw">
              {meals.length > 0 ? (
                meals.map((meal) => (
                  <div
                    key={meal.idMeal}
                    className="max-w-sm m-4 border border-gray-200 rounded p-4"
                  >
                    <MealCard meal={meal} />
                  </div>
                ))
              ) : (
                <p className="text-gray-600">
                  No meals found. Try searching for another ingredient!
                </p>
              )}
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default HomePage;

// import React, { useState } from 'react';
// import { getMealsByIngredient } from './api';
// import NavBar from './NavBar';
// import MealCard from './MealCard';
// import MealRecipe from './MealRecipe'; // Import the MealRecipe component
// import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for routing

// const HomePage = () => {
//   const [meals, setMeals] = useState([]);

//   const fetchMeals = async (ingredient) => {
//     try {
//       const fetchedMeals = await getMealsByIngredient(ingredient);
//       setMeals(fetchedMeals || []);
//     } catch (error) {
//       console.error('Error fetching meals:', error);
//     }
//   };

//   return (
//     <div>
//       <NavBar onSearch={fetchMeals} />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div className="flex flex-wrap justify-center mt-20 max-w-70vw">
//               {meals.length > 0 ? (
//                 meals.map((meal) => (
//                   <div
//                     key={meal.idMeal}
//                     className="max-w-sm m-4 border border-gray-200 rounded p-4"
//                   >
//                     <MealCard meal={meal} />
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-600">
//                   No meals found. Try searching for another ingredient!
//                 </p>
//               )}
//             </div>
//           }
//         />
//       </Routes>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState } from 'react';
// import NavBar from './NavBar';
// import MealCard from './MealCard';

// const HomePage = () => {
//   const [meals, setMeals] = useState([]);

//   const fetchMeals = async (ingredient) => {
//     try {
//       const fetchedMeals = await getMealsByIngredient(ingredient);
//       setMeals(fetchedMeals || []);
//     } catch (error) {
//       console.error('Error fetching meals:', error);
//     }
//   };

//   const goToHome = () => {
//     setMeals([]); // Reset meals to an empty array
//   };

//   return (
//     <div>
//       <NavBar onSearch={fetchMeals} goToHome={goToHome} />

//       {/* Displaying meals based on the search results */}
//       <div className="flex flex-wrap justify-center mt-20">
//         {meals.length > 0 ? (
//           meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
//         ) : (
//           <p className="text-gray-600">
//             No meals found. Try searching for another ingredient!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState } from 'react';
// import { getMealsByIngredient } from './api';
// import NavBar from './NavBar';
// import MealCard from './MealCard';
// import RandomMeal from './RandomMeal';
// import ExampleUsage from './ExampleUsage';

// const HomePage = () => {
//   const [meals, setMeals] = useState([]);
//   const [showRandomMeal, setShowRandomMeal] = useState(false);

//   const fetchMeals = async (ingredient) => {
//     try {
//       const fetchedMeals = await getMealsByIngredient(ingredient);
//       setMeals(fetchedMeals || []);
//       setShowRandomMeal(false); // Switch to ingredient-based meals
//     } catch (error) {
//       console.error('Error fetching meals:', error);
//     }
//   };

//   const goToHome = () => {
//     setMeals([]);
//     setShowRandomMeal(false);
//   };

//   const goToRandomMeal = () => {
//     setShowRandomMeal(true);
//   };

//   return (
//     <div>
//       <NavBar
//         onSearch={fetchMeals}
//         goToHome={goToHome}
//         goToRandomMeal={goToRandomMeal}
//       />
//       <div className="flex flex-wrap justify-center mt-20">
//         {showRandomMeal ? (
//           <RandomMeal />
//         ) : meals.length > 0 ? (
//           meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
//         ) : (
//           <p className="text-gray-600">
//             No meals found. Try searching for another ingredient!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState } from 'react';
// import { getMealsByIngredient } from './api';
// import NavBar from './NavBar';
// import MealCard from './MealCard';

// const HomePage = () => {
//   const [meals, setMeals] = useState([]);

//   const fetchMeals = async (ingredient) => {
//     try {
//       const fetchedMeals = await getMealsByIngredient(ingredient);
//       setMeals(fetchedMeals || []);
//     } catch (error) {
//       console.error('Error fetching meals:', error);
//     }
//   };

//   const goToHome = () => {
//     setMeals([]); // Clear meals and reset to the home state
//   };

//   return (
//     <div>
//       <NavBar onSearch={fetchMeals} goToHome={goToHome} />
//       <div className="flex flex-wrap justify-center mt-20">
//         {' '}
//         {/* Adjusted for navbar height */}
//         {meals.length > 0 ? (
//           meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
//         ) : (
//           <p className="text-gray-600">
//             No meals found. Try searching for another ingredient!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState, useEffect } from 'react';
// import { getMealsByIngredient } from './api';
// import NavBar from './NavBar';
// import MealCard from './MealCard';

// const HomePage = () => {
//   const [meals, setMeals] = useState([]);

//   const fetchMeals = async (ingredient) => {
//     try {
//       const fetchedMeals = await getMealsByIngredient(ingredient);
//       setMeals(fetchedMeals || []); // Update the state with fetched meals
//     } catch (error) {
//       console.error('Error fetching meals:', error);
//     }
//   };

//   return (
//     <div>
//       <NavBar onSearch={fetchMeals} />
//       <div className="flex flex-wrap justify-center mt-6">
//         {meals.length > 0 ? (
//           meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
//         ) : (
//           <p className="text-gray-600">
//             No meals found. Try searching for another ingredient!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState, useEffect } from 'react';
// import { getMealsByIngredient } from './api';
// import ExampleUsage from './ExampleUsage';

// const HomePage = () => {
//   const [mealData, setMealData] = useState(null);

//   useEffect(() => {
//     const fetchMeals = async () => {
//       try {
//         const meals = await getMealsByIngredient('chicken'); // Replace 'chicken' with any ingredient
//         setMealData(meals); // Update state with fetched data
//       } catch (error) {
//         console.error('Error fetching meals:', error);
//       }
//     };

//     fetchMeals();
//   }, []);

//   return (
//     <>
//       <div className="text-center">
//         <span className="text-lg text-gray-600">
//           {mealData
//             ? JSON.stringify(mealData, null, 2) // Display raw meal data as JSON
//             : 'Loading meals...'}
//         </span>
//       </div>
//       <ExampleUsage />
//     </>
//   );
// };

// export default HomePage;
