require("dotenv").config();
const app = require("./src/app");
const pool = require("./src/pool");

pool
  .connect({
    host: "localhost",
    port: 5432,
    database: "socialnetwork",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  })
  .then(() => {
    app().listen(3005, () => {
      console.log("Listening on port: 3005");
    });
  })
  .catch((err) => console.error(err));
