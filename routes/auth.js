import express from "express";
import{ googleAuth } from "../controller/auth.js";
import {signup} from "../controller/auth.js"
import {signin} from "../controller/auth.js"
const router = express.Router()

router.post('/signup',signup)

router.post('/signin',signin)

router.post('/google',googleAuth)

export default router