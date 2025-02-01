import jwt from "jsonwebtoken";

interface JwtPayload {
  userId?: string | number;
  email?: string;
}

export const generateJWT = async (payload: JwtPayload) => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY is not defined");
  }

  const token = await jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: "1d",
  });

  return token;
};

export const validateJWT = async (token: string) => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY is not defined");
  }
  const data = await jwt.verify(token, process.env.JWT_KEY);

  return data;
};
