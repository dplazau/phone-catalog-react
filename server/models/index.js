import mongoose from "mongoose";
import { itemSchema } from "../schemas/index.js";

export const itemModel = mongoose.model("itemModel", itemSchema);
