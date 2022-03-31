import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import itemsRouter from "./routes/items.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/items", itemsRouter);



mongoose
    .connect(DB_CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server Running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });

