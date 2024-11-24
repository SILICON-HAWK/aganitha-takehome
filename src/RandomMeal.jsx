import React, { useState, useEffect } from 'react';
import { getRandomMeal } from './api';
import MealRecipe from './MealRecipe';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchRandomMeal = async () => {
    console.log('Fetching random meal...');
    setLoading(true);
    try {
      const response = await getRandomMeal();
      console.log('API Response:', response);
      setApiResponse(response);
      setMeal(response[0]);
      console.log('Meal:', meal);
    } catch (error) {
      console.error('Error fetching random meal:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  const goToRecipe = (idMeal) => {
    navigate(`/meal/${idMeal}`);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-20">
        {loading ? (
          <p className="text-gray-600">Loading random meal...</p>
        ) : meal ? (
          <div className="meal-card" onClick={() => goToRecipe(meal.idMeal)}>
            <MealRecipe meal={meal} />
          </div>
        ) : error ? (
          <p className="text-red-600">Error: {error.message}</p>
        ) : (
          <p className="text-gray-600">No meal found, please try again!</p>
        )}
        <button
          onClick={fetchRandomMeal}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Get Another Random Meal
        </button>
        <span className="mt-6 text-sm text-gray-600">
          {apiResponse
            ? JSON.stringify(apiResponse)
            : 'Loading API response...'}
        </span>
        {error && (
          <pre className="mt-6 text-sm text-red-600">
            <code>Error Details:</code>
            {JSON.stringify(error, null, 2)}
          </pre>
        )}
      </div>
    </>
  );
};

export default RandomMeal;
