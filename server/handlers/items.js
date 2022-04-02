import { itemModel } from "../models/index.js";

export const getItems = async (req, res) => {
    try {
        const items = await itemModel.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const postItem = async (req, res) => {
    const item = req.body;
    const newItem = new itemModel(item);
    try {
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getItem = async (req, res) => {
    try {
        console.log(req.params.id);
        const items = await itemModel.find();
        const item = items.find((item) => item._id == req.params.id);
        if (!item) {
            res.status(404).json("The item with the given id was not found");
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteItem = async (req, res) => {
    try {
        console.log("Deleting");
        await itemModel.findOneAndRemove({ _id: { $eq: req.params.id } });
        res.status(200).json({ message: "The item has been removed" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
