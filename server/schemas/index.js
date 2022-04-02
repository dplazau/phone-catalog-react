import mongoose from "mongoose";

export const itemSchema = new mongoose.Schema({
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number,
    createdAt: { type: Date, default: Date.now },
});
