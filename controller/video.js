import express from 'express';
import Movie from '../model/movies.js'
const routes = express.Router()


const addVideo = async(req,res,next)=>{
    const newMovie = await Movie({
        userId:req.user.id,
        ...req.body
    })
    try{
        await newVideo.save()
        res.json(newMovie)
    }catch(err){
        next(err)
    }
}
const updateMovie = async(req,res,next)=>{
    
}