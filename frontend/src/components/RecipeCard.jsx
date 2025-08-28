// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';


// export default function RecipeCard({ recipe }) {
//     return (
//         <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="bg-white rounded-2xl shadow p-4 flex flex-col"
//         >
//             <div className="h-40 w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
//                 {recipe.imageUrl ? (
//                     <img src={recipe.imageUrl} alt={recipe.title} className="object-cover h-full w-full" />
//                 ) : (
//                     <span className="text-gray-400">No image</span>
//                 )}
//             </div>
//             <div className="mt-3 flex-1">
//                 <h3 className="text-lg font-semibold">{recipe.title}</h3>
//                 <p className="text-sm text-gray-500 mt-1 line-clamp-2">{recipe.description}</p>
//             </div>
//             <div className="mt-4 flex items-center justify-between">
//                 <Link to={`/recipes/${recipe._id}`} className="text-sm font-medium text-green-600">View</Link>
//                 <span className="text-xs text-gray-400">{recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString() : ''}</span>
//             </div>
//         </motion.div>
//     );
// }4



import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function RecipeCard({ recipe }) {
  // Construct full image URL
  const imageUrl = recipe.image ? `http://localhost:5000${recipe.image}` : null;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow p-4 flex flex-col"
    >
      <div className="h-40 w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={recipe.title}
            className="object-cover h-full w-full"
          />
        ) : (
          <span className="text-gray-400">No image</span>
        )}
      </div>

      <div className="mt-3 flex-1">
        <h3 className="text-lg font-semibold">{recipe.title}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{recipe.description}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Link
          to={`/recipes/${recipe._id}`}
          className="text-sm font-medium text-green-600"
        >
          View
        </Link>
        <span className="text-xs text-gray-400">
          {recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString() : ''}
        </span>
      </div>
    </motion.div>
  );
}
