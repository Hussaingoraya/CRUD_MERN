const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const Router = require("./Routes/employees_router");

const app = express();
dotenv.config();
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173", // frontend address
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    credentials: true,
  })
);

url = process.env.Mongo_Url || "mongodb://127.0.0.1:27017/Crud_mern";
const connectingDataBase = () => {
  mongoose
    .connect(url)
    .then(() => console.log("Data base connected sucsfuly"))
    .catch((err) => console.log("Databae not conncted", err));
};
connectingDataBase();
const port = process.env.PORT;
const host = process.env.HOST;
app.use("/employees", Router);

app.listen(port, host, () => {
  console.log(`Server is running at http://${host}/${port}`);
});
