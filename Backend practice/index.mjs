import  express  from "express";
import routes from './routes'

const app = express()

// console is code se chalta rhe ga

app.listen( 3001 , function () {
    console.log('Server is running at port 3001');
})

// Use method Post, Put, Get, Delete sb kelie use hota ha

app.use('/', routes)