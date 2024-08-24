const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello from Node API updated</h1>");
});

app.post('/api/products', (req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// mongoose connection
mongoose.connect('mongodb+srv://user:test@cluster0.ev4mn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('db connected');    
}).catch(()=>{
    console.log('not connected');    
});