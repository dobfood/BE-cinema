import createError from "../error";
import User from "../model/user";
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
const updateUser = async (req, res, next) => {
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
