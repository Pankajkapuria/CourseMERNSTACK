const express = require('express');
const app = express();
const userRoute = require('./Routes/userRoute')
const notesRoute = require('./Routes/notesRoute');
const cors = require('cors');

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:3000",
}));


// connection
require("./dbconnection/connection");

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// middleWhere.

app.use('/user', userRoute);
app.use('/notes', notesRoute);


app.listen(8000, () => {
    console.log("server is created on port no.8000");
})