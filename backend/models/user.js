// Import mongoose (used to connect and interact with MongoDB)
import mongoose from "mongoose";

// Create a new Schema (structure/blueprint) for the 'user' collection
// Schema defines how the data (document) will look inside MongoDB
const user = new mongoose.Schema(
  {
    // 'username' field -> must be a string, required, and must be unique (no duplicates)
    username: { type: String, required: true, unique: true },

    // 'email' field -> must be a string, required, and must be unique as well
    email: { type: String, required: true, unique: true },

    // 'password' field -> must be a string and required
    password: { type: String, required: true },

    // 'podcasts' field -> stores an array of ObjectIds (references to another collection)
    // This means each user can have multiple podcast IDs linked to them
    podcasts: [{ type: mongoose.Types.ObjectId, ref: "podcasts" }],
  },

  // Adds two extra fields automatically:
  // 'createdAt' and 'updatedAt' (timestamps)
  { timestamps: true }
);

// Create a Mongoose model based on the schema
// Model = actual collection in MongoDB that we can use to query, insert, etc.
// 'user' → name of the collection (MongoDB will pluralize it to 'users')
export default mongoose.model("user", user);
