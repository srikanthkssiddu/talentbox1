const connectDB = require("./config/db");
const express = require("express");
const path = require('path');
const userRoutes = require('./routes/user');
const courseRoutes = require('./routes/courses');
const { response } = require("express");
var cors = require('cors')
require('dotenv').config()
const Courses = require('./models/courseModel');

const app = express()
connectDB();


app.use(cors({
    origin: '*'
}));
app.use(express.json({strict: false}));

app.use('./api/user', userRoutes)

app.use("/courses",cors(), courseRoutes)


app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

app.listen(process.env.PORT, () => {
    console.log('listining on port', process.env.PORT)
})


