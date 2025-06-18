const express = require("express");
const routes = express.Router();

routes.get("/", (req,res)=>{
    res.send("cheguei no route")
})

module.exports = routes;