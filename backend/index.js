const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const router = require('./routes')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api", router)
const PORT = process.env.PORT || 8000
connectDB().then(() => {
    console.log("database connected")
    app.listen(PORT, ()=> {
        console.log(`Server is running in port ${PORT}`)
    })
})