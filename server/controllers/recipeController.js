// import Recipe from "../models/Recipe.js";

// // @desc Get all recipes
// export const getRecipes = async (req, res) => {
//     const recipes = await Recipe.find().populate("createdBy", "name email");
//     res.json(recipes);
// };

// // @desc Get single recipe
// export const getRecipeById = async (req, res) => {
//     const recipe = await Recipe.findById(req.params.id).populate("createdBy", "name email");
//     if (!recipe) return res.status(404).json({ message: "Recipe not found" });
//     res.json(recipe);
// };

// // @desc Create recipe (Admin only)
// export const createRecipe = async (req, res) => {
//     const { title, description, ingredients, instructions, image } = req.body;
//     const recipe = new Recipe({
//         title,
//         description,
//         ingredients,
//         instructions,
//         image,
//         createdBy: req.user._id,
//     });
//     const created = await recipe.save();
//     res.status(201).json(created);
// };

// // @desc Update recipe (Admin only)
// export const updateRecipe = async (req, res) => {
//     const recipe = await Recipe.findById(req.params.id);
//     if (!recipe) return res.status(404).json({ message: "Recipe not found" });

//     recipe.title = req.body.title || recipe.title;
//     recipe.description = req.body.description || recipe.description;
//     recipe.ingredients = req.body.ingredients || recipe.ingredients;
//     recipe.instructions = req.body.instructions || recipe.instructions;
//     recipe.image = req.body.image || recipe.image;

//     const updated = await recipe.save();
//     res.json(updated);
// };

// // @desc Delete recipe (Admin only)
// export const deleteRecipe = async (req, res) => {
//     const recipe = await Recipe.findById(req.params.id);
//     if (!recipe) return res.status(404).json({ message: "Recipe not found" });

//     await recipe.deleteOne();
//     res.json({ message: "Recipe removed" });
// };


// import Recipe from "../models/Recipe.js";

// export const createRecipe = async (req, res) => {
//   try {
//     const { title, description, ingredients, instructions } = req.body;

//     let parsedIngredients = [];
//     let parsedInstructions = [];

//     try {
//       if (ingredients) parsedIngredients = JSON.parse(ingredients);
//       if (instructions) parsedInstructions = JSON.parse(instructions);
//     } catch (err) {
//       return res.status(400).json({ message: "Invalid ingredients/instructions format" });
//     }

//     const recipe = new Recipe({
//       title,
//       description,
//       ingredients: parsedIngredients,
//       instructions: parsedInstructions,
//       image: req.file ? `/uploads/${req.file.filename}` : null,
//       user: req.user ? req.user._id : null, // ✅ prevent crash if no user
//     });

//     const createdRecipe = await recipe.save();
//     res.status(201).json(createdRecipe);
//   } catch (error) {
//     console.error("Create recipe error:", error.message);
//     res.status(500).json({ message: "Server error while creating recipe" });
//   }
// };





import Recipe from "../models/Recipe.js";

// @desc Get all recipes
export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("createdBy", "name email");
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Server error fetching recipes" });
  }
};

// @desc Get single recipe
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate("createdBy", "name email");
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: "Server error fetching recipe" });
  }
};

// @desc Create recipe (Admin only)
export const createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, instructions } = req.body;

    let parsedIngredients = [];
    let parsedInstructions = [];

    try {
      if (ingredients) parsedIngredients = JSON.parse(ingredients);
      if (instructions) parsedInstructions = JSON.parse(instructions);
    } catch (err) {
      return res.status(400).json({ message: "Invalid ingredients/instructions format" });
    }

    const recipe = new Recipe({
      title,
      description,
      ingredients: parsedIngredients,
      instructions: parsedInstructions,
      image: req.file ? `/uploads/${req.file.filename}` : null, // ✅ handle file from Multer
      createdBy: req.user._id,
    });

    const created = await recipe.save();
    res.status(201).json(created);
  } catch (err) {
    console.error("Create recipe error:", err);
    res.status(500).json({ message: "Server error while creating recipe" });
  }
};

// @desc Update recipe (Admin only)
export const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    recipe.title = req.body.title || recipe.title;
    recipe.description = req.body.description || recipe.description;

    // ✅ parse arrays again
    if (req.body.ingredients) {
      try {
        recipe.ingredients = JSON.parse(req.body.ingredients);
      } catch {
        return res.status(400).json({ message: "Invalid ingredients format" });
      }
    }
    if (req.body.instructions) {
      try {
        recipe.instructions = JSON.parse(req.body.instructions);
      } catch {
        return res.status(400).json({ message: "Invalid instructions format" });
      }
    }

    // ✅ handle new image if uploaded
    if (req.file) {
      recipe.image = `/uploads/${req.file.filename}`;
    }

    const updated = await recipe.save();
    res.json(updated);
  } catch (err) {
    console.error("Update recipe error:", err);
    res.status(500).json({ message: "Server error while updating recipe" });
  }
};

// @desc Delete recipe (Admin only)
export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    await recipe.deleteOne();
    res.json({ message: "Recipe removed" });
  } catch (err) {
    res.status(500).json({ message: "Server error while deleting recipe" });
  }
};
