import express from "express";
import mongoose from "mongoose";
import helmet from "helmet"
import dotenv from "dotenv";
import cors from "cors"; 
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.js";
import moviesRoutes from "./routes/movies.js"
import authRoutes from "./routes/auth.js";

const PORT = process.env.PORT || 2212;
const app = express();
dotenv.config();
const connect = async () => {
  await mongoose
    .connect("mongodb+srv://CaseStudy5:!23456@case-study5.6tr4igy.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
      console.log("Connect OK");
    })
    .catch((e) => {
      throw e;
    });
};

connect();
app.use(helmet())

app.use(cookieParser());

app.use(express.json());

app.use(cors());
app.get('/',(req,res)=>{
  res.status(200,"ok")
})
app.use('/api/auth',authRoutes)
app.use('api/user',userRoutes)
app.use('/api/movies',moviesRoutes)
app.use((err, req, res, next) => {
  const status = err.status || 500;

  const message = err.message | "Co gi do sai ";

  res.status(status).json({

    sucsess: false,

    status,

    message,
  });
});

app.listen(PORT, "localhost", () => {
  console.log("connect ok http://localhost:" + PORT);
});
