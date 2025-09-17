const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const userRoutes = require("./routes/users")

const app = express()

app.use(express.json());
app.use(morgan("dev"))
// app.use(cors())
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));


const port = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/users', userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
