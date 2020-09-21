const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {PORT} =require('./config/config');
const http = require('http');
const router = require("../app/routes/routes");


class App{
    constructor(){
        this.app = express();
        this.configure();
    }
    configure(){
    this.app.use(bodyParser.json());
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(router)

    this.app.get("/status", (req, res) => {
        res.json("Exchange Rate Ready")
      });
      
  
    }

    start(){
        const server = http.createServer(this.app)
        server.listen(PORT,() =>{
            console.log(`server is running on port ${PORT}`)
        })
    }
}
module.exports = new App();