export const getTheTokenFromHeader = (req) => {
  // Generate Token
  const token = req?.headers?.authorization?.split(" ")[1];
  if (!token) {
    return null;
  } else {
    return token;
  }
};
