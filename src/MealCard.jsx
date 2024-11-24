import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to handle navigation

const MealCard = ({ meal }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleClick = () => {
    // Navigate to the detailed recipe page, passing the meal's ID as a URL parameter
    navigate(`/meal/${meal.idMeal}`);
  };

  return (
    <div
      className="border-2 border-gray-200 rounded overflow-hidden shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <img
        className="w-full h-48 object-cover" // Reduce image height
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
        <h2 className="font-bold text-xl mb-2">{meal.strMeal}</h2>
      </div>
    </div>
  );
};

export default MealCard;
