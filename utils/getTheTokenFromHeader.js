export const getTheTokenFromHeader = (req) => {
  // Generate Token
  const token = req?.headers?.authorization?.split(" ")[1];
  console.log(token)
  return token;
};
