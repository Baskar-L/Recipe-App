import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import path from "path";

dotenv.config();
const app = express();

// DB connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/admin", adminRoutes);


// Serve uploads folder as static
app.use("/uploads", express.static(path.join(process.cwd(), "/uploads")));

// Routes
// app.use("/api/recipes", recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
