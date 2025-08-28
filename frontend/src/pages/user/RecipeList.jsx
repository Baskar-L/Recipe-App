// import React, { useEffect, useState } from 'react';
// import api from '../../utils/api';
// import RecipeCard from '../../components/RecipeCard';
// import { motion } from 'framer-motion';


// export default function RecipeList() {
//     const [recipes, setRecipes] = useState([]);
//     const [loading, setLoading] = useState(true);


//     const fetchRecipes = async () => {
//         try {
//             const res = await api.get('/recipes');
//             setRecipes(res.data);
//         } catch (err) {
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     };


//     useEffect(() => { fetchRecipes(); }, []);


//     return (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="">
//             <div className="flex items-center justify-between mb-6">
//                 <h1 className="text-3xl font-bold">Recipes</h1>
//             </div>


//             {loading ? (
//                 <div>Loading...</div>
//             ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {recipes.map(r => (
//                         <RecipeCard key={r._id} recipe={r} />
//                     ))}
//                 </div>
//             )}
//         </motion.div>
//     );
// }




// src/pages/recipes/RecipeList.jsx
import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import RecipeCard from "../../components/RecipeCard";
import { motion } from "framer-motion";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    try {
      const res = await api.get("/recipes");
      setRecipes(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="text-gray-500">Loading recipes...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto p-4"
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Recipes</h1>
      </div>

      {recipes.length === 0 ? (
        <p className="text-gray-400 text-center mt-12">No recipes available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r) => (
            <RecipeCard key={r._id} recipe={r} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
