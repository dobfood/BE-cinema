import express from "express";
import { updateUser ,like,dislike} from "../controller/user.js";
import {verifyToken} from "../verify-token.js";
const router = express.Router();

router.put('/:id',verifyToken,updateUser)
router.delete('/:id',verifyToken)
router.get('/find/:id')
router.put('/sub/:id',verifyToken)
router.put('/unsub/:id',verifyToken)
router.put('/like/:movieId',verifyToken,like)
router.put('/dislike/:movieId',verifyToken,dislike)

export default router