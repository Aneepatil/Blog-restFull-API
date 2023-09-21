import express from "express";
import { createBlog, deleteBlog, getAllBlogs, getSingleBlog, updateBlog } from "../controllers/blogController.js";
import { isLogin } from './../middlewares/isLogin.js';
import { isAdmin } from './../middlewares/isAdmin.js';

const blogRoute = express.Router();

blogRoute.get("/", getAllBlogs);
blogRoute.get("/:id", getSingleBlog);
blogRoute.post("/create", createBlog);
blogRoute.put("/update/:id",isLogin,isAdmin,updateBlog );
blogRoute.delete("/delete/:id",isLogin,isAdmin,deleteBlog) ;

export default blogRoute;
