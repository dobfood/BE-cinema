import express from "express";
import createError from "../error.js";
import Movie from "../model/movies.js";
export const addMovie = async (req, res, next) => {
  const newMovie = await Movie({
    userId: req.user.id,
    ...req.body,
  });
  console.log;
  try {
    await newMovie.save();
    res.json(newMovie);
  } catch (err) {
    next(err);
  }
};
export const updateMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return next(createError(404, "not found"));
    console.log(req.user.id, movie.userId);
    if (req.user.id === movie.userId) {
      const updateMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateMovie);
    }
    return res.status(403).json("ban chi duoc update video cua minh");
  } catch (err) {
    next(err);
  }
};
export const deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return next(createError(404, "khong ton tai movie"));
    if (req.user.id === movie.userId) {
      await Movie.findByIdAndDelete(req.params.id);
      return res.status(200).json("delete ok");
    }
    return res.status(403).json({
      success: false,
      message: "ban khong the xoa video khong phai cua ban",
    });
  } catch (err) {
    throw err.message;
  }
};
export const getMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return next(createError(404, "khong ton tai movie"));
    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
};
export const random = async (req, res, next) => {
  try {
    const movies = await Movie.aggregate([{ $sample: { size: 30 } }]);
    res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
};
export const search = async (req, res, next) => {
  try {
    const search = req.query.q;
    console.log(req);
    const movies = await Movie.find({
      title: { $regex: search, $options: "i" },
    });
    res.status(200).json(movies)
  } catch (err) {
    next(err);
  }
};
