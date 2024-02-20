import express  from "express";
import routes from "./routes/index.mjs"

const app = express()

app.listen(3001 , function () {
    console.log('The server is running at port 3001');
})