import express from "express";
import db from "./config/db.mjs"
import routes from "./routes/index.mjs"
import cors from 'cors'


const app = express()

db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))

app.listen(3001, function () {
    console.log('server is running');
})

app.use(cors())
app.use(express.json())
app.use('/', routes)