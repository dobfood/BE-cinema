import express from "express";

import {verifyToken} from "../verify-token.js";
const router = express.Router();

router.put('/:id',verifyToken)
router.delete('/:id',verifyToken)
router.get('/find/:id')
router.put('/sub/:id',verifyToken)
router.put('/unsub/:id',verifyToken)
router.put('/like/:movieID',verifyToken)
router.put('/dislike/:movieId',verifyToken)

export default router