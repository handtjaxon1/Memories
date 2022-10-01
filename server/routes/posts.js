import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

// All routes are reached at, and relative to, "/posts"

router.get("/", getPosts);
router.post("/", createPost);

export default router;