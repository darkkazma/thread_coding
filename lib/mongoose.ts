import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  console.log("connectToDB Call....");
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");

  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
