import express from "express";
import { deleteUser, getAllUsers, getSingleUser,loginUser,registerUser, updateUser, userProfile} from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.get("/all-user", getAllUsers);
userRoute.get("/single-user/:id", getSingleUser);
userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);
userRoute.put("/update/:id",updateUser);
userRoute.delete("/delete/:id",deleteUser);
userRoute.get("/profile/",userProfile);

export default userRoute;
