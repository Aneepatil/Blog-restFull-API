import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

export const generateToken = (id) => {
  // Generate Toke
  const token = jwt.sign({ id }, process.env.JWT_SEC_KEY, {
    expiresIn: "1min",
  });

  return token
};
