// import mongoose from "mongoose";

// const recipeSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     description: { type: String },
//     ingredients: [{ type: String, required: true }],
//     instructions: { type: String, required: true },
//     image: { type: String },
//     createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Recipe", recipeSchema);





import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, required: true }], // array of strings
  instructions: [{ type: String, required: true }], // array of strings
  image: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.model("Recipe", recipeSchema);
