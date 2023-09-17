import { BlogModel } from "../models/BlogModel.js";

//  ======================================================== Get all Post ========================================================

export const getAllBlogs = async (req, res) => {
  try {
    const allblogs = await BlogModel.find();
    res
      .status(200)
      .json({ message: "Fethced All Blogs", total: allblogs.length, allblogs });
    } catch (error) {
      res.status(500).json({ message: "Somthing went wrong", error });
    }
  };
  
  
//  ======================================================== Get Single Post ========================================================
  
  export const getSingleBlog = async (req, res) => {
  const id = req.params.id;
  // console.log(req);
  try {
    const singleBlog = await BlogModel.findById(id);
    res.status(200).json({ message: "Fethced Single Blog", singleBlog });
  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong", error });
  }
};


//  ======================================================== Create Post Post ========================================================

export const createBlog = async (req, res) => {
  try {
    const newBlog = await BlogModel.create(req.body);
    res.status(201).json({ message: "New Blog is created", newBlog });
  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong", error });
  }
};


//  ======================================================== Update Post Post ========================================================


export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { description, title } = req.body;
  try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      id,
      { description, title },
      { new: true }
    );
    res.status(201).json({ message: "Blog is updated", updatedBlog });
  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong", error });
  }
};


//  ======================================================== Delete Post Post ========================================================

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await BlogModel.findByIdAndDelete(id);
    res
      .status(400)
      .json({ message: "Blog is Deleted Successfully", deletedBlog });
  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong", error });
  }
};
