import  express  from "express";
import routes from './routes/index.mjs'
import db from './config/db.mjs'

const app = express()

// mongo db server running code here 

db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))
// console is code se chalta rhe ga

app.listen( 3001 , () => {
    console.log('Server is running at port 3001');
})

app.use(express.json());

// Use method Post, Put, Get, Delete sb kelie use hota ha
app.use('/', routes);
