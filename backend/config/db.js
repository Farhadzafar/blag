import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
const connectDB = async () => {
  console.log(process.env.MONGO_URI, "😘😘😘😘😘🙏🙏🙏🙏👌👌👌");
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // ✅ simplified
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
