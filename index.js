const express = require('express');
const app = express();
const userRoute = require('./Routes/userRoute')
const notesRoute = require('./Routes/notesRoute');
const cors = require('cors');
const dotenv = require("dotenv");
const path = require('path');




app.use(cors({
    origin: "http://localhost:3000",
}));


dotenv.config();

// connection
require("./dbconnection/connection");

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// middleWhere.

app.use('/user', userRoute);
app.use('/notes', notesRoute);

// static file
app.use(express.static(path.join(__dirname, './Client/build')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './Client/build/index.html'))
})

app.listen(8000, () => {
    console.log("server is created on port no.8000");
})