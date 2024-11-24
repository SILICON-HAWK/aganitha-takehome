import React, { useState } from 'react';

const NavBar = ({ onSearch, goToHome }) => {
  const [ingredient, setIngredient] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (ingredient.trim()) {
      onSearch(ingredient); // Pass the ingredient back to the parent
      setIngredient(''); // Clear the input field
    }
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1
        className="text-white text-2xl font-bold cursor-pointer"
        onClick={goToHome}
      >
        Food Recipe App
      </h1>
      <form
        className="flex items-center bg-white rounded overflow-hidden"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="px-4 py-2 outline-none"
          placeholder="Search by ingredient..."
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default NavBar;

// import React, { useState } from 'react';

// const NavBar = ({ onSearch, goToHome }) => {
//   const [ingredient, setIngredient] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (ingredient.trim()) {
//       onSearch(ingredient); // Pass the ingredient back to the parent
//       setIngredient(''); // Clear the input field
//     }
//   };

//   return (
//     <nav className="bg-gray-800 p-4 flex justify-between items-center fixed top-0 left-0 w-full shadow-lg">
//       <button
//         className="text-white text-2xl font-bold focus:outline-none"
//         onClick={goToHome}
//       >
//         Food Recipe App
//       </button>
//       <form
//         className="flex items-center bg-white rounded overflow-hidden"
//         onSubmit={handleSearch}
//       >
//         <input
//           type="text"
//           className="px-4 py-2 outline-none"
//           placeholder="Search by ingredient..."
//           value={ingredient}
//           onChange={(e) => setIngredient(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
//         >
//           Search
//         </button>
//       </form>
//     </nav>
//   );
// };

// export default NavBar;
