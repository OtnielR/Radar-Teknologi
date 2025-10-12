
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import { blogController } from "./controllers/blogController.js";
import { createBlogRoutes } from "./routes/blogRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

export const createApp = async () => {
    const app = express();
    const db = await initDB();

    app.use(cors());
    app.use(express.json());

    // Routes
    app.use("/api/blogs", createBlogRoutes(blogController(db)));

    // Error handling
    app.use(errorHandler);

    return app;
};
