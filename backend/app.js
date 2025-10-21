import dotenv from "dotenv";
import express from "express";
import "./conn/conn.js";
const app = express();

dotenv.config();
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});