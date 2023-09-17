import express from "express";
import blogRoute from "./routes/blogRoute.js";
import { dbConnect } from "./config/dbConnect.js";
import userRoute from "./routes/userRoute.js";
const PORT = 8001;
const app = express();

// Middlewares
app.use(express.json());

// Data Base Config
dbConnect();

// Routes
app.use('/api/v1/blogs',blogRoute)
app.use('/api/v1/users',userRoute)

// /api/v1/users/all-users

// Server connection
app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});
