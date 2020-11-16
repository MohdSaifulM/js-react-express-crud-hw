//imports
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//mongoose connection
require("./lib/connection");

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/buildings", require("./routes/buildings.routes"));

//listen
app.listen(process.env.PORT, () => console.log(`Running on PORT ${process.env.PORT}`));