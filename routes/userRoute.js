import express from "express";
import { deleteUser, getAllUsers, getSingleUser,loginUser,registerUser, updateUser} from "../controllers/userController.js";
import { isLogin } from "../middlewares/isLogin.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const userRoute = express.Router();

userRoute.get("/all-user", getAllUsers);
userRoute.get("/single-user/:id", getSingleUser);
userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);
userRoute.put("/update/:id",isLogin,isAdmin,updateUser);
userRoute.delete("/delete/:id",isLogin,isAdmin,deleteUser);

export default userRoute;
