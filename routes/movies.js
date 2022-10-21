import express from "express";
import { verifyToken } from "../verify-token.js";
const router = express.Router();

router.post("/", verifyToken);
router.put("/:id");
router.post("/movies", verifyToken);
router.delete("/:id");
router.get("/find/:id");

export default router;
