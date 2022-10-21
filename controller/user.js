import createError from "../error.js";
import movies from "../model/movies.js";
import Movie from "../model/movies.js";
import User from "../model/user.js";
const addUser = () => {};
const getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return next(createError(404, "khong ton tai user"));
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
const deleteUser = async (req, res, next) => {
  if ((req, params.id === req.user.id)) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("xoa thanh cong");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "chi co the xoa tai khoang cua minh"));
  }
};
export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const userUpdate = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json(userUpdate);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "chi co the thay doi tai khoang cua minh"));
  }
};
// const saved = async(req, res, next);
export const like = async (req, res, next) => {
  const userId = req.user.id;
  const movieId = req.params.videoId;
  try {
    await movies.findByIdAndUpdate(movieId, {
      $addToSet: { likes: userId },
      $pull: { dislikes: userId },
    });
    res.status(200).json("the video has been liked");
  } catch (err) {
    next(err);
  }
};
export const dislike = async (req, res, next) => {
  const userId = req.user.id;
  const movieId = req.params.movieId;
  try {
    await Movie.findByIdAndUpdate(movieId, {
      $addToSet: { dislikes: userId },
      $pull: { likes: userId },
    });
    res.status(200).json("the videl has been disklike");
  } catch (err) {
    next(err);
  }
};
