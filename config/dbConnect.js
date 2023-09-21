import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbConnect = async () => {
  try {
    const connted = await mongoose.connect(process.env.MONGO_URL);

    console.log(
      `MongoDB Connection Successfull and the host is ${connted.connection.host}`
    );


  } catch (error) {
    console.log(error);
  }
};
