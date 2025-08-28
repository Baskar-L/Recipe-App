// import React, { useEffect, useState } from 'react';
// const [image, setImage] = useState(null);


// const fetchRecipes = async () => {
//     try {
//         const res = await api.get('/recipes');
//         setRecipes(res.data);
//     } catch (err) { console.error(err); }
// };


// useEffect(() => { fetchRecipes(); }, []);


// const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//         const form = new FormData();
//         form.append('title', title);
//         form.append('description', description);
//         form.append('ingredients', JSON.stringify(ingredients.split('\n').filter(Boolean)));
//         form.append('instructions', JSON.stringify(instructions.split('\n').filter(Boolean)));
//         if (image) form.append('image', image);
//         await api.post('/recipes', form, { headers: { 'Content-Type': 'multipart/form-data' } });
//         setTitle(''); setDescription(''); setIngredients(''); setInstructions(''); setImage(null);
//         fetchRecipes();
//     } catch (err) { console.error(err); }
// };


// const handleDelete = async (id) => {
//     if (!confirm('Delete this recipe?')) return;
//     try { await api.delete(`/recipes/${id}`); fetchRecipes(); } catch (err) { console.error(err); }
// };


// return (
//     <div className="space-y-6">
//         <h2 className="text-xl font-semibold">Manage Recipes</h2>


//         <motion.form onSubmit={handleCreate} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-6 rounded-2xl shadow space-y-4">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                 <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="p-3 border rounded-md" required />
//                 <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short description" className="p-3 border rounded-md" required />
//             </div>


//             <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients (one per line)" className="w-full p-3 border rounded-md" rows={4} />
//             <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions (one per line)" className="w-full p-3 border rounded-md" rows={4} />


//             <div>
//                 <label className="block text-sm mb-1">Image (optional)</label>
//                 <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//             </div>


//             <button className="py-2 px-4 bg-green-600 text-white rounded-md">Create Recipe</button>
//         </motion.form>


//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {recipes.map(r => (
//                 <motion.div key={r._id} className="bg-white p-4 rounded-2xl shadow">
//                     <h4 className="font-semibold">{r.title}</h4>
//                     <p className="text-sm text-gray-500 mt-1">{r.description}</p>
//                     <div className="mt-3 flex gap-2">
//                         <button onClick={() => handleDelete(r._id)} className="text-red-600 text-sm">Delete</button>
//                     </div>
//                 </motion.div>
//             ))}
//         </div>
//     </div>
// );


// //src/pages/admin/ManageRecipes.jsx
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import api from "../../utils/api";

// function ManageRecipes() {
//   const [recipes, setRecipes] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [instructions, setInstructions] = useState("");
//   const [image, setImage] = useState(null);

//   const fetchRecipes = async () => {
//     try {
//       const res = await api.get("/recipes");
//       setRecipes(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//       const form = new FormData();
//       form.append("title", title);
//       form.append("description", description);
//       form.append(
//         "ingredients",
//         JSON.stringify(ingredients.split("\n").filter(Boolean))
//       );
//       form.append(
//         "instructions",
//         JSON.stringify(instructions.split("\n").filter(Boolean))
//       );
//       if (image) form.append("image", image);

//       await api.post("/recipes", form, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setTitle("");
//       setDescription("");
//       setIngredients("");
//       setInstructions("");
//       setImage(null);

//       fetchRecipes();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!confirm("Delete this recipe?")) return;
//     try {
//       await api.delete(`/recipes/${id}`);
//       fetchRecipes();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-xl font-semibold">Manage Recipes</h2>

//       <motion.form
//         onSubmit={handleCreate}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="bg-white p-6 rounded-2xl shadow space-y-4"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Title"
//             className="p-3 border rounded-md"
//             required
//           />
//           <input
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Short description"
//             className="p-3 border rounded-md"
//             required
//           />
//         </div>

//         <textarea
//           value={ingredients}
//           onChange={(e) => setIngredients(e.target.value)}
//           placeholder="Ingredients (one per line)"
//           className="w-full p-3 border rounded-md"
//           rows={4}
//         />
//         <textarea
//           value={instructions}
//           onChange={(e) => setInstructions(e.target.value)}
//           placeholder="Instructions (one per line)"
//           className="w-full p-3 border rounded-md"
//           rows={4}
//         />

//         <div>
//           <label className="block text-sm mb-1">Image (optional)</label>
//           <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//         </div>

//         <button className="py-2 px-4 bg-green-600 text-white rounded-md">
//           Create Recipe
//         </button>
//       </motion.form>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {recipes.map((r) => (
//           <motion.div key={r._id} className="bg-white p-4 rounded-2xl shadow">
//             <h4 className="font-semibold">{r.title}</h4>
//             <p className="text-sm text-gray-500 mt-1">{r.description}</p>
//             <div className="mt-3 flex gap-2">
//               <button
//                 onClick={() => handleDelete(r._id)}
//                 className="text-red-600 text-sm"
//               >
//                 Delete
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ManageRecipes;



// src/pages/admin/ManageRecipes.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../../utils/api";

function ManageRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); // for live image preview

  const fetchRecipes = async () => {
    try {
      const res = await api.get("/recipes");
      setRecipes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("title", title);
      form.append("description", description);
      form.append(
        "ingredients",
        JSON.stringify(ingredients.split("\n").filter(Boolean))
      );
      form.append(
        "instructions",
        JSON.stringify(instructions.split("\n").filter(Boolean))
      );
      if (image) form.append("image", image);

      await api.post("/recipes", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Reset form
      setTitle("");
      setDescription("");
      setIngredients("");
      setInstructions("");
      setImage(null);
      setPreview(null);

      fetchRecipes();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this recipe?")) return;
    try {
      await api.delete(`/recipes/${id}`);
      fetchRecipes();
    } catch (err) {
      console.error(err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Manage Recipes</h2>

      <motion.form
        onSubmit={handleCreate}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-6 rounded-2xl shadow space-y-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="p-3 border rounded-md"
            required
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description"
            className="p-3 border rounded-md"
            required
          />
        </div>

        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients (one per line)"
          className="w-full p-3 border rounded-md"
          rows={4}
        />
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Instructions (one per line)"
          className="w-full p-3 border rounded-md"
          rows={4}
        />

        <div>
          <label className="block text-sm mb-1">Image (optional)</label>
          <input type="file" onChange={handleImageChange} />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 w-40 h-40 object-cover rounded-md"
            />
          )}
        </div>

        <button className="py-2 px-4 bg-green-600 text-white rounded-md">
          Create Recipe
        </button>
      </motion.form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((r) => (
          <motion.div key={r._id} className="bg-white p-4 rounded-2xl shadow">
            {r.image ? (
              <img
                src={`http://localhost:5000${r.image}`}
                alt={r.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md mb-2">
                No Image
              </div>
            )}
            <h4 className="font-semibold">{r.title}</h4>
            <p className="text-sm text-gray-500 mt-1">{r.description}</p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => handleDelete(r._id)}
                className="text-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ManageRecipes;
