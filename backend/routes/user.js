import express from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/sign-up", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if(!username || !email || !password) {
            return res
            .status(400)
            .json({ message: "All fields are required" });
        }
        if(username.length < 5) {
            return res
            .status(400)
            .json({ message: "Username must be at least 5 characters" });
        }
        if(password.length < 6) {
            return res
            .status(400)
            .json({ message: "Password must be at least 6 characters" });
        }

        // check user exists or not
        const existingEmail = await User.findOne({ email : email});
        const existingUsername = await User.findOne({ username : username});
        if(existingEmail || existingUsername) {
            return res
            .status(400)
            .json({ message: "Email or Username already exists" });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(200).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(400).json({ message: "Error in Sign Up", error});
    }
});
