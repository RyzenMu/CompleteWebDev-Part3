const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.listen(8000, ()=>{
    console.log('Server is running on port 8000');    
});

app.get('/', (req, res)=>{
    res.send('<h1>Hello from Node API updated</h1>');
});

// mongoose connection
mongoose.connect("mongodb+srv://muruga13in2022:test123@backend.e4rsp.mongodb.net/?retryWrites=true&w=majority&appName=Backend").then(()=>{
    console.log("connected to database");    
}).catch((e)=>{
    console.log("connection failed");  
    // console.log(e);
      
});

mongoose.connect("mongodb+srv://user:test123@backend.e4rsp.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=Backend")
.then(()=>{
    console.log("connected to database");    
}).catch(()=>{
    console.log("connectio faled");    
});

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb+srv://muruga13in2022:mongo"@"123@backend.e4rsp.mongodb.net/?retryWrites=true&w=majority&appName=Backend')
    .then(()=>{
        console.log('success');
        
    }).catch(()=>{
        console.log('failed');
        process.exit(1);
    })
}