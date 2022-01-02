const express = require('express')
const cors = require('cors');

const mongoose = require("mongoose")

require('dotenv').config()

const app = express()

app.use(cors())

const PORT = process.env.PORT || 5000;

app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri)
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('connection to database successfull')
})

const exerciseRouter = require("./routes/excercises")
const usersRouter = require("./routes/users")

app.use("/exercises",exerciseRouter)
app.use("/users",usersRouter)

app.listen(PORT,()=>{
    console.log(`server running successfully ${PORT}`)
})