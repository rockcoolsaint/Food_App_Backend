import express from "express";
import mongoose from "mongoose";
import { MONGO_URI } from "./config";
import { AdminRoute, VendorRoute } from "./routes";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '50mb' }))

app.use('/admin', AdminRoute);
app.use('/vendor', VendorRoute);

if(!MONGO_URI) {
  throw new Error('error')
};
mongoose.connect(MONGO_URI).then(() => {
  console.log('DB Connected');
}).catch(err => console.log('error'+ err));

app.use('/', (req, res) => {
  return res.json('Hello from Food order Backend');
})

app.listen(PORT, () => {
  console.log(`App is listening to the port ${PORT}`)
})







// "nodemon --watch './**/*.ts' --exec ts-node src/index.ts"