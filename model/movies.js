import mongoose from "mongoose";
const Movies = new mongoose.Schema(
  {
    name: { type: "String", required: true },
    nation: { type: "String", required: true },
    type: { type: "String", required: true },
    releaseDate: { type: "String" },
    desc: { type: "String", required: true },
    time: { type: "String" },
    imageURL: { type: "String" },
    trailerURL: { type: "String", required: true },
    like: { type: [string], default: [] },
    dislike: {
      type: [String],
      default: [],
    },
    view: { type: "String", default: 0 },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);
export default mongoose.model("Movies", Movies);
