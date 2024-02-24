import express from "express";
import { mongoDB_URL } from "./DbCon.js";
import mongoose from "mongoose";
import { booksRoute } from "./routes/bookRoute.js";
import cors from "cors" // cross origin resource sharing
const app = express();


app.use(express.json());
//1 : allow all originis with default of cors(*)
app.use(cors());
// 2: allow custome origins
/* app.use(cors({
  origin: "http://localhost:1000",
  methods: ['GET','POST', 'PUT', 'DELETE'],
  allowedHeaders: ["Content-Type"]
})
);
 */

// The first param is string the second is callbackFunc 
app.get("/",(req, res)=>  res.status(234).send("Welcome To Mern Stack"));

// connecting to the database and listining our port
mongoose.connect(mongoDB_URL).then(()=> {
  console.log("Database Connected Sucessfully...");
  app.listen(1000, () => console.log("Server Is Running..."));
}).catch((error)=> {
  console.log(error)
});

app.use(booksRoute);