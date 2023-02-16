const express = require('express');
const port = 3000;
const app = express();

const middleware1 =(req, res, next)=>{
    console.log("I am logging")
    next()
}
app.use(middleware1)
app.get('/', (req, res)=>{
    res.send('hello')
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})