require('dotenv').config(); // Add this line to load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./db');
const userRoutes=require('./Routes/user.routes')
const smsRoutes= require('./Routes/sms.routes')
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({ origin: ['http://localhost:3001'], methods:['POST','GET'],credentials:true }));
app.use(express.static(path.join(__dirname, '../client/build')));
userRoutes(app)
smsRoutes(app)
const port = process.env.PORT || 3000;

database();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
   
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
