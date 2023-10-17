const express = require('express');
const env = require('dotenv');
env.config();
const connectDb = require("./db")
const app = express();
connectDb();

app.use(express.json())
const userRt = require('./routes/userRt');


app.use('/api/user', userRt);


const port = process.env.PORT || 5000;


app.listen(port, console.log("listening at port 5000"));
