import express from "express";
import { BlogModel } from "../models/BlogModel.js";
import { createBlog, deleteBlog, getAllBlogs, getSingleBlog, updateBlog } from "../controllers/blogController.js";

const blogRoute = express.Router();

blogRoute.get("/", getAllBlogs);
blogRoute.get("/:id", getSingleBlog);
blogRoute.post("/create", createBlog);
blogRoute.put("/update/:id",updateBlog );
blogRoute.delete("/delete/:id",deleteBlog) ;

export default blogRoute;
