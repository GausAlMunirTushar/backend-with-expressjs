const express = require('express');
const adminRoute = require('./routes/adminRoute')
const port = 3000;
const app = express();

app.use(adminRoute)
app.get('/admin', adminRoute)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})