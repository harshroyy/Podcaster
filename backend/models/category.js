import mongoose from "mongoose";

const category = new mongoose.Schema({
    CategoryName: { type: String, required: true, unique: true },
    podcasts: [{ type: mongoose.Types.ObjectId, ref: "podcasts" }],
},
{ timestamps: true }
);

export default mongoose.model("category", category);
