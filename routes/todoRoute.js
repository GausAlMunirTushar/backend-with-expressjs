const express = require('express');
const todoRoute = express.Router();
const todoModel = require('../models/todoModel')
// GET All The TODOs
todoRoute.get('/', async (req, res)=>{

})
// GET TODOs by ID
todoRoute.get('/:id', async (req, res)=>{

})
// POST TODOs
todoRoute.post('/', async (req, res)=>{
    const newTodo = todoModel(req.body)
    await newTodo.save((err)=>{
        if(err){
            res.status(500).json({error: "There was Server Side Error"})
        }
        else{
            res.status(200).json({
                message: "Todo Was inserted Sucessfully"
            })
        }
    })
})
// POST Multiple TODO
todoRoute.post('/all', async (req, res)=>{
    
})
// PUT TODOs
todoRoute.put('/', async (req, res)=>{
    
})
// DELETE TODOs
todoRoute.delete('/:id', async (req, res)=>{
    
})

module.exports = todoRoute;