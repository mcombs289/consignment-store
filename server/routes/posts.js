import express from "express";
import { getPosts, createPosts } from "../controller/posts.js";

const router = express.Router();

//localhost:5000/posts
router.get("/", getPosts);
router.post("/", createPosts);

export default router;
