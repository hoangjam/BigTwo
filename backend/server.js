require('dotenv').config()

const express = require('express');

// express app
const app = express();

// this is the middleware, showing path
app.use((req, res, next) => {
    console.log(req.path, req.method)

    next() // next function middleware
});

// router handler, responds to get request
app.get('/', (req, res) => {
    res.json({msg: "Big 2"})

});

// listen for requests aka a port number
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})