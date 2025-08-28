import express from "express";
import { getUsers } from "../controllers/adminController.js";
import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/users", protect, adminOnly, getUsers);

export default router;
