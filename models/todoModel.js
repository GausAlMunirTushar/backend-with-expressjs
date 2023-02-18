const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    status:{
        type: String,
        enum: ['active', 'inactive']
    },
    date: {
        type: Date,
        default: Date.now
    } 
}, {versionKey: false})
// Creating Todo Model with Schema
const todoModel = mongoose.model('todo', todoSchema) 

module.exports = todoModel;