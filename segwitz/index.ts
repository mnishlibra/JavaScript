import express , {Express , Request , Response } from "express";
// @ts-ignore 
import sequelize from './util/database';
import bodyParser from "body-parser";
const cors = require("cors");
const app : Express = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req : Request, res: Response) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

sequelize
.sync({force : true})
// .sync()
.then((result : string) => {
    console.log(result) 
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
})
.catch((error : string) => {
    console.log(error)
})
  