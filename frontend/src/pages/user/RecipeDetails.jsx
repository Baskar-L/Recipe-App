// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../../utils/api';
// import { motion } from 'framer-motion';


// export default function RecipeDetails() {
//     const { id } = useParams();
//     const [recipe, setRecipe] = useState(null);


//     useEffect(() => {
//         const fetchRecipe = async () => {
//             try {
//                 const res = await api.get(`/recipes/${id}`);
//                 setRecipe(res.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };
//         fetchRecipe();
//     }, [id]);


//     if (!recipe) return <div>Loading...</div>;


//     return (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl shadow p-6">
//             <div className="flex flex-col lg:flex-row gap-6">
//                 <div className="w-full lg:w-1/3">
//                     <div className="h-64 w-full rounded-lg overflow-hidden bg-gray-100">
//                         {recipe.imageUrl ? <img src={recipe.imageUrl} alt={recipe.title} className="object-cover h-full w-full" /> : <div className="p-6 text-gray-400">No image</div>}
//                     </div>
//                 </div>
//                 <div className="flex-1">
//                     <h2 className="text-2xl font-bold">{recipe.title}</h2>
//                     <p className="text-gray-500 mt-2">{recipe.description}</p>


//                     <div className="mt-6">
//                         <h3 className="text-lg font-semibold">Ingredients</h3>
//                         <ul className="list-disc list-inside mt-2">
//                             {recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
//                         </ul>
//                     </div>


//                     <div className="mt-6">
//                         <h3 className="text-lg font-semibold">Instructions</h3>
//                         <ol className="list-decimal list-inside mt-2 space-y-2">
//                             {recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>)}
//                         </ol>
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// }




// src/pages/recipes/RecipeDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import { motion } from "framer-motion";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await api.get(`/recipes/${id}`);
        setRecipe(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow p-6 max-w-5xl mx-auto mt-6"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <div className="h-64 w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
            {recipe.image ? (
              <img
                src={`http://localhost:5000${recipe.image}`}
                alt={recipe.title}
                className="object-cover h-full w-full"
              />
            ) : (
              <span className="text-gray-400">No image</span>
            )}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{recipe.title}</h2>
          <p className="text-gray-500 mt-2">{recipe.description}</p>

          {/* Ingredients */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Ingredients</h3>
            {recipe.ingredients && recipe.ingredients.length > 0 ? (
              <ul className="list-disc list-inside mt-2">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 mt-2">No ingredients listed</p>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Instructions</h3>
            {recipe.instructions && recipe.instructions.length > 0 ? (
              <ol className="list-decimal list-inside mt-2 space-y-2">
                {recipe.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            ) : (
              <p className="text-gray-400 mt-2">No instructions provided</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
