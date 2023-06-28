import express, {Application} from "express";
// import mongoose from "mongoose";
// import { MONGO_URI } from "./config";
import { AdminRoute, VendorRoute } from "../routes";
import path from 'path';
import { ShoppingRoute } from "../routes/ShoppingRoute";

export default async (app: Application) => {

  // const app = express();
  // const PORT = process.env.PORT || 5000;
  
  app.use(express.json({ limit: '50mb' }))
  app.use('/images', express.static(path.join(__dirname, 'images')))
  
  app.use('/admin', AdminRoute);
  app.use('/vendor', VendorRoute);
  app.use('/shopping', ShoppingRoute);

  return app;
}


// if(!MONGO_URI) {
//   throw new Error('error')
// };
// mongoose.connect(MONGO_URI).then(() => {
//   console.log('DB Connected');
// }).catch(err => console.log('error'+ err));

// app.use('/', (req, res) => {
//   return res.json('Hello from Food order Backend');
// })

// app.listen(PORT, () => {
//   console.log(`App is listening to the port ${PORT}`)
// })







// "nodemon --watch './**/*.ts' --exec ts-node src/index.ts"