const express = require("express");
const routes = require("./routes");
const dotenv = require('dotenv');


const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(routes);


app.listen(port, ()=>{
    console.log("Server is running in port: " + port)
});