import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
      const connted = await mongoose.connect(
        "mongodb+srv://cubiccodeBackendClass:0MZOWpzXIcczXMwv@cluster0.xdluwg7.mongodb.net/cubiccodeBackendClass?retryWrites=true&w=majority"
      );
  
      console.log(
        `MongoDB Connection Successfull and the host is ${connted.connection.host}`
      );
    } catch (error) {
      console.log(error);
    }
  };