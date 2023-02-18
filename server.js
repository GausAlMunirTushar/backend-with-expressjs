const express = require('express');
const databaseConfig = require('./config/database')
const todoRoute = require('./routes/todoRoute')

const PORT = 3000
// express app initalization:
const app = express();
app.use(express.json());

// application routes
app.use('/api/', todoRoute)

// default error handler
function errorHandler(err, req, res, next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({error: err});
}

app.listen(PORT, ()=>{
    console.log(`Sever running on http://localhost:${PORT}`)
})