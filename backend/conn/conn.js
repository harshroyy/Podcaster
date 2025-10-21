import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const conn = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("Error while connecting to MongoDB", error);
    }
};

conn();
