const express = require('express');
const env = require('dotenv');
env.config();

const app = express();

const port = process.env.PORT || 5000;


app.listen(5000, console.log("listening at port 5000"));
