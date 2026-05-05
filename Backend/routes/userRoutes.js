import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  getAllUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected (later add auth middleware)
router.get("/profile", getProfile);

// Admin
router.get("/", getAllUsers);

export default router;
