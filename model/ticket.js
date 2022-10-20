import mongoose, { Schema } from "mongoose";
const ticketSchesma = new mongoose.Schema({
  quantity: "Number",
  city: "String",
  cinema: "String",
  time: "String",
  movie: { type: Schema.Types.ObjectId, ref: "Movies" },
});
export default mongoose.model("Ticket", ticketSchesma);
