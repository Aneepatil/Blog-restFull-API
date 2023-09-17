import bcrypt from "bcrypt";
import { UserModel } from "../models/UserModel.js";
import { hashPassword } from "../utils/hashPassword.js";

//  ======================================================== Get all User ========================================================

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res
      .status(200)
      .json({ message: "Fethced All Users", total: allUsers.length, allUsers });
  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong", error });
  }
};

//  ======================================================== Get Single User ========================================================

export const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await UserModel.findById(id);
    res.status(200).json({ message: "Fethced Single User", singleUser });
  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong", error });
  }
};

//  ======================================================== Register User ========================================================

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if email exist exist in database
    const isEmailExist = await UserModel.findOne({ email });
    if (isEmailExist) {
      return res.status(400).json({
        message: "User Already registered, please login with credentials",
      });
    }

    // Hash Passwaord
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    // send new user to databse
    const newUser = await UserModel.create({
      username,
      email,
      password: await hashPassword(password),
    });
    res.status(201).json({ message: "New User is created", newUser });
  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong", error });
  }
};


//  ======================================================== Login User ========================================================

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    
    // Check email is registered
    const foundUser = await UserModel.findOne({email})
    if(!foundUser){
      return res.status(404).json({ message: "Invalid login Credentials" });
    }

    // Check the password if correct or not / comapre

    const originalPassword = await bcrypt.compare(password,foundUser.password)
    if(!originalPassword){
      return res.status(404).json({ message: "Invalid login Credentials" });
    }

    // Send login response
    if(foundUser && originalPassword){
      return res.status(404).json({ message: "User Login Successfull" });
    }

  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong", error });
  }
};

//  ======================================================== Update user ========================================================

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    if (password) {
      // Re-Hash Passwaord
      // const salt = await bcrypt.genSalt(10);
      // const hashedPassword = await bcrypt.hash(password, salt);

      const updatedUser = await UserModel.findByIdAndUpdate(
        id,
        { username, email, password: await hashPassword(password) },
        { new: true }
      );
      return res.status(201).json({ message: "User is updated", updatedUser });
    } else {
      const updatedUser = await UserModel.findByIdAndUpdate(
        id,
        { username, email, password },
        { new: true }
      );
      res.status(201).json({ message: "User is updated", updatedUser });
    }

  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong", error });
  }

};

//  ======================================================== Delete User ========================================================

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndDelete(id);
    res.status(400).json({ message: "User is Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong", error });
  }
};
