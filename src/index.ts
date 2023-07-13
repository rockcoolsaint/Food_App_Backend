import express from 'express';
import App from './services/ExpressApp';
import dbConnection from './services/Database';

const StartServer = async () => {
  const app = express();

  const PORT = process.env.PORT || 5000;

  await dbConnection();

  await App(app);

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  })
}

StartServer();