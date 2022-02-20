import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

import BookingReqDAO from "./dao/BookingReqDAO.js"

// CONFIG
dotenv.config();
const MongoClient = mongodb.MongoClient;

// DEFINING THE PORT
const port = process.env.PORT || 8000;

// CONNECTING DATABASE
const uri = process.env.BOOKINGREQ_DB_URI;
MongoClient.connect(uri, {
  // poolSize: 50, // nombre de gens qui peuvent se connecter en même temps
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await BookingReqDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  });
