const mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017/todos' // Connection String

mongoose.set('strictQuery', false)

// database connection with mongoose
mongoose.connect(URL)
    .then(()=>{
        console.log('Connection Sucessful')
    })
    .catch((err)=>{
        console.log(err)
    });