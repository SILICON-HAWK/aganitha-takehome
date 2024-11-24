import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

/**
 * Fetch meals by a specific ingredient.
 * @param {string} ingredient - The ingredient to filter meals by.
 * @returns {Promise<Object[]>} - A promise resolving to an array of meal objects.
 */
export const getMealsByIngredient = async (ingredient) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?i=${ingredient}`);
    return response.data.meals || []; // Return meals array or empty if no results
  } catch (error) {
    console.error('Error fetching meals by ingredient:', error);
    throw error;
  }
};

/**
 * Fetch a random meal.
 * @returns {Promise<Object>} - A promise resolving to a random meal object.
 */
export const getRandomMeal = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/random.php`);
    return response.data.meals[0]; // Return the first meal object
  } catch (error) {
    console.error('Error fetching random meal:', error);
    throw error;
  }
};
export const getMealById = async (idMeal) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  const data = await response.json();

  return data.meals ? data.meals[0] : null; // Return the first meal if found
};
