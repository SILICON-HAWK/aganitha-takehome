import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MealRecipe from './MealRecipe';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/meal/:idMeal" element={<MealRecipe />} />{' '}
    </Routes>
  );
};

export default App;
