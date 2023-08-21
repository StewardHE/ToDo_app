// APP Requires
const { config } = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// export the APP routes
const routes = require('./routes/ToDoRoute')


require('dotenv').config()

// Server
const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

// Connect with the DB
mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log(`Connected To Database MongoDB`))
    .catch((err) => console.log(err))
app.use(routes)

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))
