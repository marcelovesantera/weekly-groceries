import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("MongoDB is already connected.");
    return;
  }

  if (connectionState === 2) {
    console.log("MongoDB is connecting...");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "weeklyGroceriesDB",
      bufferCommands: true,
      socketTimeoutMS: 30000,
      serverSelectionTimeoutMS: 30000,
    });
    console.log("MongoDB connected successfully.");
  } catch (error: unknown) {
    console.log("MongoDB connection error: ", error);
    throw new Error("Error: " + (error as Error).message);
  }
};

export const disconnect = async () => {
  try {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 0) {
      console.log("MongoDB is already disconnected.");
      return;
    }

    await mongoose.disconnect();
    console.log("MongoDB disconnected successfully.");
  } catch (error: unknown) {
    console.log("MongoDB disconnection error: ", error);
    throw new Error("Error: " + (error as Error).message);
  }
};
