// import express from "express";
// import {
//   getRecipes,
//   getRecipeById,
//   createRecipe,
//   updateRecipe,
//   deleteRecipe,
// } from "../controllers/recipeController.js";
// import protect from "../middleware/authMiddleware.js";
// import adminOnly from "../middleware/roleMiddleware.js";

// const router = express.Router();

// router.get("/", getRecipes);
// router.get("/:id", getRecipeById);
// router.post("/", protect, adminOnly, createRecipe);
// router.put("/:id", protect, adminOnly, updateRecipe);
// router.delete("/:id", protect, adminOnly, deleteRecipe);

// export default router;



// import express from "express";
// import multer from "multer";
// import {
//   getRecipes,
//   getRecipeById,
//   createRecipe,
//   updateRecipe,
//   deleteRecipe,
// } from "../controllers/recipeController.js";
// import protect from "../middleware/authMiddleware.js";
// import adminOnly from "../middleware/roleMiddleware.js";

// const router = express.Router();

// // Multer storage config
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // make sure this folder exists at project root
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage });

// // Public routes
// router.get("/", getRecipes);
// router.get("/:id", getRecipeById);

// // Admin routes (with file upload)
// router.post("/", protect, adminOnly, upload.single("image"), createRecipe);
// router.put("/:id", protect, adminOnly, upload.single("image"), updateRecipe);
// router.delete("/:id", protect, adminOnly, deleteRecipe);

// export default router;





// import express from "express";
// import multer from "multer";
// import path from "path";
// import {
//   getRecipes,
//   getRecipeById,
//   createRecipe,
//   updateRecipe,
//   deleteRecipe,
// } from "../controllers/recipeController.js";
// import protect from "../middleware/authMiddleware.js";
// import adminOnly from "../middleware/roleMiddleware.js";
// import multer from "multer";

// const router = express.Router();

// // Multer storage setup
// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename(req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// // Only allow images
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpeg|jpg|png/;
//   const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = allowedTypes.test(file.mimetype);

//   if (extname && mimetype) {
//     cb(null, true);
//   } else {
//     cb(new Error("Images only (jpeg, jpg, png)"));
//   }
// };

// const upload = multer({ storage, fileFilter });

// router.get("/", getRecipes);
// router.get("/:id", getRecipeById);
// router.post("/", protect, adminOnly, upload.single("image"), createRecipe); // ✅ added Multer
// router.put("/:id", protect, adminOnly, upload.single("image"), updateRecipe); // ✅ added Multer
// router.delete("/:id", protect, adminOnly, deleteRecipe);





// export default router;





import express from "express";
import path from "path";
import multer from "multer";
import {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";
import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/roleMiddleware.js";

const router = express.Router();

// Multer storage setup
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Only allow images
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Images only (jpeg, jpg, png)"));
  }
};

const upload = multer({ storage, fileFilter });

router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.post("/", protect, adminOnly, upload.single("image"), createRecipe);
router.put("/:id", protect, adminOnly, upload.single("image"), updateRecipe);
router.delete("/:id", protect, adminOnly, deleteRecipe);

export default router;




// import express from "express";
// import multer from "multer";
// import { createRecipe, getRecipes, deleteRecipe } from "../controllers/recipeController.js";
// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// // Configure multer (save uploads locally for now)
// const upload = multer({ dest: "uploads/" });

// // GET all recipes
// router.get("/", getRecipes);

// // POST create recipe (multipart/form-data)
// router.post("/", protect, upload.single("image"), createRecipe);

// // DELETE recipe
// router.delete("/:id", protect, deleteRecipe);

// export default router;



// import express from "express";
// import multer from "multer";
// import { createRecipe, getRecipes, deleteRecipe } from "../controllers/recipeController.js";
// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// // Multer setup for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage });

// // GET all recipes
// router.get("/", getRecipes);

// // POST new recipe (requires login, with optional image upload)
// router.post("/", protect, upload.single("image"), createRecipe);

// // DELETE a recipe
// router.delete("/:id", protect, deleteRecipe);

// export default router;
