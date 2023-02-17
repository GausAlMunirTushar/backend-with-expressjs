const express = require('express');
const fs = require('fs')
const port = 3000;
const app = express();

app.use(express.json());

app.get('/api/students', (req, res) =>{
    fs.readFile('./db.json', 'utf-8', (err, data) =>{
        const students = JSON.parse(data).students
        res.send(students)
    })
})

app.post('/api/students', (req, res)=>{
    const student = req.body;
    fs.readFile('./db.json', 'utf-8', (err, data)=>{
        const students = JSON.parse(data);
        students.students.push(student);
        fs.writeFile('./db.json', JSON.stringify(students), (err)=>{
            res.send('Post')
        })
    })
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})