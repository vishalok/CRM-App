const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const serverConfig =require("./configs/server.config");
const bodyParser = require("body-parser");

const app = express();
mongoose.set('strictQuery', false);
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;

app.use(bodyParser.json())
db.on("error", ()=>{
    console.log("Error while connecting to data base ");
})

db.once("open",()=>{
    console.log("connected to MongoDB Successfully");
})

require("./Routes/userRoutes")(app);

app.listen(serverConfig.PORT,()=>{
    console.log(`Application running on port ${serverConfig.PORT} `);
})