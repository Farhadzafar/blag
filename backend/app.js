// app.js
import express from "express";
import cors from "cors"; // ✅ Import cors
import { router as blogsRouter } from "./routes/blogsRoute.js";

const app = express();

// ✅ Enable CORS for requests from your Next.js frontend
app.use(
  cors({
    origin: "http://localhost:3000", // Next.js frontend URL
    credentials: true,
  })
);

// Middleware to parse JSON
app.use(express.json());

// Your API routes
app.use("/api/v1/blogs", blogsRouter);

export default app;
