import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../model/user.js";
import createError from "../error.js";
export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).json({ success: true, data: newUser });
  } catch (err) {
    next(err);
  }
};
export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, "tai khoang khong ton tai"));
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "loi khoi tao "));
    const token = jwt.sign({ id: user_id }, process.env.NUMBER_SECRET_TOKEN);
    const { password, ...others } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user_id }, process.env.NUMBER_SECRET_TOKEN);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle: true,
      });
      const saveUser = await newUser.save();
      const token = jwt.sign(
        { id: saveUser._id },
        process.env.NUMBER_SECRET_TOKEN
      );
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(saveUser._doc);
    }
  } catch (err) {
    next(err);
  }
};