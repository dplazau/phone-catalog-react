import express, { Router } from "express";
import { getItem, getItems, postItem, deleteItem } from "../handlers/items.js";

const itemsRouter = express.Router();

itemsRouter.get("/", getItems);
itemsRouter.get("/:id", getItem);

itemsRouter.post("/", postItem);

itemsRouter.delete("/:id", deleteItem);

export default itemsRouter;
