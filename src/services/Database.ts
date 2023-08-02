// import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import { MONGO_URI } from "../config";

// if(!MONGO_URI) {
//   throw new Error('error')
// };
export default async () => {
  try {
    await mongoose.connect(MONGO_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log('DB Connected');
  } catch (error) {
    console.log('error'+ error)
  }
}
// mongoose.connect(MONGO_URI).then(() => {
//   console.log('DB Connected');
// }).catch(err => console.log('error'+ err));








// "nodemon --watch './**/*.ts' --exec ts-node src/index.ts"