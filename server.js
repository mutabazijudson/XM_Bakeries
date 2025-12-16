import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/authroute.js";

dotenv.config();

const myApp=express();
myApp.use(cors());
myApp.use(bodyParser.json());
myApp.use("/auth",authRoute);
myApp.listen(3000,()=>{
    console.log("Server is running on port 3000");
}       );