import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import { connect } from "mongoose";

import authRouter from './routes/auth';

dotenv.config();

const app = express();
const port: number = 5000;
const MONGODB_CONNECTION_URI = process.env.MONGODB_CONNECTION_URI;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/auth", authRouter)

connect(MONGODB_CONNECTION_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(port);
  console.log(`Server listening on port ${port}`);
}).catch((error) => {
    console.log(error);
})