import express, {Application} from "express";
import path from 'path';
import { AdminRoute, ShoppingRoutes, VendorRoute, CustomerRoute, DeliveryRoute } from "../routes";

export default async (app: Application) => {

  // const app = express();
  // const PORT = process.env.PORT || 5000;

  // const imagePath = path.join(__dirname, '../images');
  
  app.use(express.json({ limit: '50mb' }))
  app.use(express.urlencoded({ extended: true }))
  app.use('/images', express.static(path.join(__dirname, 'images')))
  
  app.use('/admin', AdminRoute);
  app.use('/vendor', VendorRoute);
  app.use('/vendor', CustomerRoute);
  app.use('/delivery', DeliveryRoute);
  app.use(ShoppingRoutes);

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