import express from "express";
import Category from "../models/category.js";

const router = express.Router();

router.post("/add-category", async (req, res) => {
    try {
        const { categoryName, image } = req.body;

        if (!categoryName) {
            return res.status(400).json({ message: "Category name is required" });
        }

        const cat = new Category({
            CategoryName: categoryName,
            image: image || "", // optional
        });

        await cat.save();
        res.status(200).json({ message: "Category added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error in adding category", error });
    }   
});

export default router;
