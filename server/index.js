const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();
const UserListRouter = require("./routes/userList");
const MealRouter = require("./routes/meal");
const BuyListRouter = require("./routes/buyList");

const app = express();

//connect DB
mongoose
	.connect(process.env.DATA_BASE, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useFindAndModify: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("DB CONNECTED! HELLO MONGO!");
	})
	.catch((err) => console.log("DB NOT CONNECT", err));

//middleWare

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

//route
app.use(process.env.DEFAULT_URL, UserListRouter);
app.use(process.env.DEFAULT_URL, MealRouter);
app.use(process.env.DEFAULT_URL, BuyListRouter);

//port

const port = process.env.PORT;

app.listen(port, () => console.log(`${port}で起動中・・・`));
