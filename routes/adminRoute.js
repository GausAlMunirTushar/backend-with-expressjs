const express = require('express');
const adminRoute = express.Router();

adminRoute.get('/', (req, res) =>{
    res.send("admin")
})
adminRoute.get('/login', (req, res)=>{
    res.send("login")
})

module.exports = adminRoute;