import express from "express";
import {
  addMovie,
  deleteMovie,
  getMovie,
  random,
  search,
  updateMovie,
} from "../controller/movie.js";
import { verifyToken } from "../verify-token.js";
const router = express.Router();

router.post("/", addMovie);
router.put("/:id", verifyToken, updateMovie);
router.delete("/:id", verifyToken, deleteMovie);
router.get("/find/:id", getMovie);
router.get("/search", search);
router.get("/random", random);
export default router;
